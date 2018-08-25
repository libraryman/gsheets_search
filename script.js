console.log('our JS file loaded!');

let searchBoxElem = document.getElementById("search_box");
let submitElem = document.getElementById("submit");

submitElem.addEventListener("click", listTheSearch );
  
//Take user input and matching it with title  check if it is a partial match  need to rewrite
//update new function
function matchTitle (reserveRecord) { 
  
  console.log("it worked");
  
  let indexOfFirst = reserveRecord.title.indexOf(searchBoxElem.value);

console.log(indexOfFirst);
 
  //bad logic do not use indexOfFirst > -1
if (indexOfFirst > -1){
  console.log(reserveRecord.title[indexOfFirst]);
  return true
  } 
  //return reserveRecord.title[indexOfFirst];
  //return reserveRecord.title === searchBoxElem.value; //;"Book One"
  } 


//-------------------------------------------------------------
function listTheSearch (){
  // for now, searchResults is only going to be ONE object (one book) // TODO: make this an array later
  let searchResults= TextbookDataList.filter(matchTitle);
  console.log(searchResults);
  searchResults.forEach(displayBookToHTML);
}
  //else statement if there is a result
  // Create a new <li> element, save in memory
function displayBookToHTML (reserveRecord) {
  let listItemElement = document.createElement("li");
   // TODO: test out concatenating all the data, one by one:
  //JSON does not need to be a string, format 
  //let resultString = JSON.stringify(searchResults);
  //let newResultString = resultString.replace("title","Title ");
  //let newNewResultString = newResultString.replace(/['"{}]+/g, '');
  //let newNewNewResultString = newNewResultString.replace(/[,]+/g, '; ');
  // resultString += .....;
  if (reserveRecord != undefined){
    let listH2Element = document.createElement("h3");
    
  listH2Element.innerHTML = "Title: " + reserveRecord.title;
  listItemElement.appendChild(listH2Element);
    let listParElement = document.createElement("p");
    listParElement.innerHTML = "Author: " + reserveRecord.author + "<br />" + "Class: " + reserveRecord.class + "<br />" + "Professor: " + reserveRecord.professor;
    listItemElement.appendChild(listParElement);
    
  }else{
  listItemElement.textContent = "no results";
  }
  // Get the <ol> tag, save it under a variable name
  let orderListElement = document.getElementById("list");
  // Finally, append the list item element inside
  // the ordered list element
  orderListElement.appendChild(listItemElement);
}


// Wrap this code in its own function and place this into the listTheSearch (and use python tutor to check)

  
 
  
  
  
  
