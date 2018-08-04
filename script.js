console.log('our JS file loaded!');
let TextbookDataList = [
  {
    title: "Book One",
    author: "author One",
    class:"Class One",
    professor:"Professor One"
  },
  {
    title: "Book Two",
    author: "author Two",
    class:"Class Two",
    professor:"Professor Two"
  },
  {
    title: "Book Three",
    author: "author Three",
    class:"Class Three",
    professor:"Professor Three"
  },
  {
    title: "Book Four",
    author: "author Four",
    class:"Class Four",
    professor:"Professor Four"
  },
  {
    title: "Book Five",
    author: "author Five",
    class:"Class Five",
    professor:"Professor Five"
  },
  {
    title: "Book Six",
    author: "author Six",
    class:"Class Six",
    professor:"Professor Six"
  },
  {
    title: "Book Seven",
    author: "author Seven",
    class:"Class Seven",
    professor:"Professor Seven"
  },
  {
    title: "Book Eight",
    author: "author Eight",
    class:"Class Eight",
    professor:"Professor Eight"
  },
  {
    title: "Book Nine",
    author: "author Nine",
    class:"Class Nine",
    professor:"Professor Nine"
  },
  {
    title: "Book Ten",
    author: "author Ten",
    class:"Class Ten",
    professor:"Professor Ten"
  },
  {
    title: "Book Eleven",
    author: "author Eleven",
    class:"Class Eleven",
    professor:"Professor Eleven"
  },

];

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
//search the array

/*function searchItems(query) {
  return TextbookDataList.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(searchItems(getUserInputProject));
*/

function isBookOne(name) { 
    return name.title === 'Book One';
}

console.log(TextbookDataList.find(isBookOne));


