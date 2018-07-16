/***** Settings Section ************/

//columns we are using to search into
//name used into Select box
//column is the number of column in a spreadsheet
var fieldmap = {
  number:{
    name:'Number',
    column:1
  },
  name:{
    name:'Course Name',
    column:2
  },
  professor:{
    name:'Professor',
    column:3
  },
  title:{
    name:'Item Title',
    column:5
  }
}

//number of campus column
var campusColumn = 9;

//sheet we are using as database
var sheetName = 'Sheet1';
//the default spreadsheet we are using as database
var defaultSheetId = '1-_RF_ZhXrRwHSKQ2BQZ5ou0axF0PZKtFa3Jp5cs5wzo';

/***** End of Settings Section ******/

function doGet(e) {
  //get spreadsheet id from URL or use the default one
  var id = (e.parameter.id)?e.parameter.id:defaultSheetId;

  var html = HtmlService.createHtmlOutputFromFile('Index').getContent();

  //insert sheet id and name to JavaScript code in Index.html file
  html = html.replace(new RegExp(/{{name}}/g), SpreadsheetApp.openById(id).getName());
  html = html.replace(new RegExp(/{{id}}/g), id);

  //create HTML output from Index.html file
  return HtmlService.createHtmlOutput(html).setTitle('Searchbox').addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

//load initial settings
function getSettings(id){
  var sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);
  //headers to use in the result table
  var headers = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0];

  //collect unique campuses from campus column for filtering
  var campuses = [];
  sheet.getRange(2,campusColumn,sheet.getLastRow()-1,1).getValues()
  .forEach(function(row){
    if(row[0]!='' && campuses.indexOf(row[0])==-1) campuses.push(row[0]);
  });

  //also we return the fieldmap to create a select box
  return {headers:headers, campuses:campuses, fieldmap:fieldmap};
}

function findRow(settings){
  var sheet = SpreadsheetApp.openById(settings.id).getSheetByName(sheetName);
  //get all the data from sheet
  var data = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues();

  //filter data by campus
  if(settings.campus!='no'){
    data = data.filter(function(row){return row[campusColumn-1]==settings.campus});
  }

  var searchArray;
  //create a string array for searching from spreadsheet data
  if(settings.field=='any') searchArray = data.map(function(row){
    var rowArray = [];
    //search in all columns specified in settings section
    for(key in fieldmap){
      rowArray.push(row[fieldmap[key].column-1]);
    }
    //create a string for row array
    return rowArray.join('ё').toLowerCase();
  })
  //search a certain column only
  else searchArray = data.map(function(row){return row[fieldmap[settings.field].column-1].toString().toLowerCase()});

  //create a huge string from all the data
  //we use a russian letter to avoid any collisions due to cells concatenation
  var str = searchArray.join('ё');

  //try to find a keyword in a huge string
  var index = str.indexOf(settings.keyword);
  //no result
  if(index==-1) return {success:false};

  //found at least once
  var sum = 0;
  var result = {success:true,data:[]};

  //check row by row to find the found position
  for(var i=0;i<searchArray.length;i++){
    sum+=(searchArray[i].length+1);

    //current position is more then found position which means the found keyword was in this row
    if(index<sum) {
      //add row to result
      result.data.push(data[i]);

      //found in any other rows? search starting from current position
      index = str.indexOf(settings.keyword, sum);
      if(index==-1) break;
    }
  }

  return result;
}
