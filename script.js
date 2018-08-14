console.log('our JS file loaded!');


// ids = project, submit

let searchBoxElem = document.getElementById("search_box");
let submitElem = document.getElementById("submit");

submitElem.addEventListener("click", listTheSearch );
  


//Take user input and matching it with title  check if it is a partial match  need to rewrite
function matchTitle (reserveRecord) { 
  
  console.log("it worked");
  return reserveRecord.title === searchBoxElem.value; //;"Book One"
  } 




function listTheSearch (){
  // for now, searchResults is only going to be ONE object (one book) // TODO: make this an array later
  let searchResults= TextbookDataList.find(matchTitle);
  console.log(searchResults);
  
  //else statement if there is a result
  // Create a new <li> element, save in memory
  let listItemElement = document.createElement("li");
    
  // TODO: only show results if searchResults exists! (not undefined)
  
  // ASSIGNMENT OPERATORS REFERNCE PAGE:
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators
  
  
  // TODO: test out concatenating all the data, one by one:
  let resultString = JSON.stringify(searchResults);
 
  // resultString += .....;
  if (searchResults != undefined){
  
  listItemElement.textContent = resultString;
  }else{
  listItemElement.textContent = "no results";
  }
   

  // Get the <ol> tag, save it under a variable name
  let orderListElement = document.getElementById("list");

  // Finally, append the list item element inside
  // the ordered list element
  orderListElement.appendChild(listItemElement);
  console.log("you are cooking now");
   
}


// Wrap this code in its own function and place this into the listTheSearch (and use python tutor to check)

 


// When page loads, display all strings from userDataArray
// as <li> elements inside the <ol> list
 
  
  
  
  
