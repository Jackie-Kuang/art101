/**
* index.js - Lab 8: Anon Functions and Callbacks
* C
* Author: Jackie Kuang jhkuang@ucsc.edu
* Date: 5/8/2025
*/

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }

main();

    //set an array of numbers
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

    //creating a function that multiplies by 2
function multiply(x) {
    var results = x * 2;
    return results;
}

    //showing results of my function being executed
console.log(multiply(4));

    //using a callback cwith an anon function and inputting it into console
console.log (array.map(function(x) {
    var results = x * 5 + 3;
    return results;
}))

    //using callback function and display results
var mapResults = array.map(multiply);
console.log("Results: ", mapResults)

 // Your map results data
 var mapResults = "Map Results: " + mapResults;

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults);
 
 

