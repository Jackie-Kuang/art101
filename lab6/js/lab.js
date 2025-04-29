/**
* index.js - Lab 6: Arrays and Objects
* Implementing arrays and objects with out forms of transportation
* Author: Jackie Kuang jhkuang@ucsc.edu
* Date: 4/21/2025
*/

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// Defining variables
let myTransport = ["Car", " Bus"];

// Creating object for my main ride
let myMainRide = {
  make: "Toyota",
  model: "GR86",
  color: "Neptune Blue",
  year: 2023,
  age: function() {
    return 2025 - this.yeaer;
  }
}

// output
document.writeln("Kinds of transportatoin I use: ", myTransport, "</br>");
// write object to the document
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "<pre>");