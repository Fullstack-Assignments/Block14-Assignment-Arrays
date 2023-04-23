/*
Only Odds
Create a JavaScript code that accepts an array of numbers and returns a 
new array with only the odd numbers from the original array. 
If there is only one odd number in the array, return an array with that single value.

Input Arrays	                   Expected Results
[2, 4, 6, 8, 11, 20, 15, 22]	   [ 11, 15]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	   [1, 3, 5, 7, 9]
[70, 42, 55, 81, 21, 91, 34]	   [55, 81, 21, 91]
[2, 4, 6, 8, 10, 11, 12] 	       [11]
*/

// get array of numbers as user input
//let aInput = prompt("Please enter array of integers: ");
/*
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Please Enter an array of integers", (aNumberArray) => {
  console.log(`Hey there ${aNumberArray}!`);
  readline.close();
});
*/

var aNewArray = [];
var aNumberArray1 = [2, 4, 6, 8, 11, 20, 15, 22];
var aNumberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var aNumberArray3 = [70, 42, 55, 81, 21, 91, 34];
var aNumberArray4 = [2, 4, 6, 8, 10, 11, 12];
var aNumberArray = aNumberArray4;

// loop through given array
for (let index = 0; index < aNumberArray.length; index++) {
  // check for odd number
  if (aNumberArray[index] % 2 !== 0) {
    // if odd number -> add to new array
    aNewArray.splice(aNewArray.length, 1, aNumberArray[index]);
  }
}

// display array of odd numbers from original array
console.log("Odd numbers: ", aNewArray, " from give array: ", aNumberArray);
