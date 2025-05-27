/**
* lab.js - Lab 12: Conditionals
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
function sortingHat(num){
  let mod = num % 4;

  let character = {
  name: "",
  className: ""
};

  if (mod == 0){
    character.name = "Tinky-Winky";
    character.className = "character-blue";
  }
  else if (mod == 1) {
    character.name = "Laa-Laa";
    character.className = "character-yellow";
  }
  else if (mod == 2) {
    character.name = "Po";
    character.className = "character-red";
  }
  else if (mod == 3) {
    character.name = "Dipsy";
    character.className = "character-green";
  } 
  return character;
}

//attach click handler to submit button
$("#button").click(function(){
    //get value in the #input text box, assign to a variable name
    let name = $("#input").val()
    console.log(name);
    //get the length of the name
    let nameLength = name.length;
    console.log(nameLength);
    //get the element
    let model = sortingHat(nameLength);
    console.log(model);
    //add element to output div
    $("#output").html('<h1 class="'+model.className + '">'+ "Your Teletubbie is: " + model.name + '</h1>');
})
