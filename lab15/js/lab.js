/**
 * lab.js - Lab 15: AJAX
 * Author: Jackie Kuang jhkuang@ucsc.edu
 * Date: 5/26/2025
 */

// This is an example function
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

main();

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    fetch("https://yesno.wtf/api")
      .then(response => {
        if (!response.ok) throw new Error("API call failed");
        return response.json();
      })
      .then(data => {
        document.getElementById("answer").textContent = data.answer.toUpperCase();
        document.getElementById("gif").src = data.image;
      })
      .catch(error => {
        console.error("API fetch error:", error);
        document.getElementById("answer").textContent = "Error";
        document.getElementById("gif").src = "";
      });
  });
});
