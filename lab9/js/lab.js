/**
* index.js - Lab 9: Libraries & jQuery
* JavaScipt/jQuery script that uses buton to modify some elements on the page
* Author: Jackie Kuang jhkuang@ucsc.edu
* Date: 5/12/2025
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

//add button to challange section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

//add a click listener to the challenge button
$("#button-challenge").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

//add button to problem section
$("#problems").append("<button id='button-problems'>Make Special</button>");

//add a click listener to the problem button
$("#button-problems").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special2");
}); 

//add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

//add a click listener to the results button
$("#button-results").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special3");
});