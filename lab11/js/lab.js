/**
* lab.js - Lab 11: JavaScript Events and Forms
* JavaScript/jQuery script gets a value from an input field and outputs a modified version.
* Author: Jackie Kuang jhkuang@ucsc.edu
* Date: 5/15/2025
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

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){

//get value input field
const userName = $("#user-name").val();

// now let's sort it
userNameSorted = sortString(userName);

//append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
