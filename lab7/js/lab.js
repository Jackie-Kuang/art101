/**
* index.js - Lab 7: Functions
* Creating a functon in JavaScript that sorts names in an array.
* Author: Jackie Kuang jhkuang@ucsc.edu
* Date: 5/4/2025
*/

// Constants

// Functions

// sortUserName function takes the user's input and sorts  the letters of their name
function sortUserName(userName) {

    return userName.split("").sort().join("");
  }

  function main() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    document.writeln("This was you typed before: " + userName + "</br></br>");
    var sortedName = sortUserName(userName);
    document.writeln(" Here is your sorted name: " + sortedName + "</br></br>");
  }
  
//call the function
main();
