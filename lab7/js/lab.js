/**
* index.js - Lab 7: Functions
* Creating a functon in JavaScript that sorts names in an array.
* Author: Jackie Kuang jhkuang@ucsc.edu
* Date: 5/4/2025
*/

// Constants

// Functions

// sortUserName function takes the user's input and sorts the letters of their name
function sortUserName(userName) {

    //splits userName string into array of characteres
    //sorts the array alphabetically
    //rejoins the array back into a single string
    return userName.split("").sort().join("");
  }

  function main() {
    //window prompt where user types their name and stores it in userName
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");

    //displays original userName
    document.writeln("This was you typed before: " + userName + "</br></br>");

    //calls sortUserName with userName and stores theresults in sortedName
    var sortedName = sortUserName(userName);

    //displays sortedName
    document.writeln(" Here is your sorted name: " + sortedName + "</br></br>");
  }
  
//call the function
main();
