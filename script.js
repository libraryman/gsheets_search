console.log('our JS file loaded!');

// ids = project, submit

let projectElem = document.getElementById("project");
let submitElem = document.getElementById("submit");

submitElem.addEventListener("click", getUserInputProject);

// This function logs the users input
function getUserInputProject () {


  // Get the value of the user's input now
  let userInput = projectElem.value;
  //console log the value
  console.log(userInput);

};
