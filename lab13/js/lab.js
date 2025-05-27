/**
* lab.js - Lab 13 Loops
* This JavaScript sceript loops through each number up to the number 20 and if they are a multiple of 3, 5, and 7, it will print "Fizz!" "Buzz!" and
* "Boom!". If the number is a multiple of two of the numbers, thetn it will print a combinatoin of the words.
* Author: Jackie Kuang jhkuang@ucsc.edu
* Date: 5/26/2025
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


let oneLongString = "";

for (let num = 1; num <=200; num++) {
    if(num % 15 == 0){
        oneLongString += num + " FizzBuzz!<br>"; 
    } else if (num % 21 == 0){
        oneLongString += num + " FizzBoom!<br>"; 
    } else if (num % 35 == 0){
        oneLongString += num + " BuzzBoom!<br>"; 
    } else if (num % 3 == 0){
        oneLongString += num + " Fizz!<br>"; 
    } else if (num % 5 == 0) {
        oneLongString += num + " Buzz!<br>"; 
    } else if (num % 7 == 0) {
        oneLongString += num + " Boom!<br>"; 
    } else {
        oneLongString += num + "<br>";
    }
}
   $("#output").html(oneLongString);
    