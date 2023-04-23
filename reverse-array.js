/*  reverse-array.js
Reverse Array
With a for loop, create a JavaScript code that creates a new array in reverse order.

Input Arrays	Expected Results
[1, 2, 3]	[3, 2, 1]
[1, 3, 5, 7, 9, 11]	[11, 9, 7, 5, 3, 1]
[20, 50, 30, 60, 200]	[200, 60, 30, 50, 20]
[1, -1, 2, -3, 5, -8, 13]	[13, -8, 5, -3, 2, -1, 1]

*/

var aRevArray = [];
var aNumberArray1 = [1, 2, 3];
var aNumberArray2 = [1, 3, 5, 7, 9, 11];
var aNumberArray3 = [20, 50, 30, 60, 200];
var aNumberArray4 = [1, -1, 2, -3, 5, -8, 13];
let aNumberArray = aNumberArray2;
let my2DArray = [
  [1, 2, 3],
  [1, 3, 5, 7, 9, 11],
  [20, 50, 30, 60, 200],
  [1, -1, 2, -3, 5, -8, 13],
];
for (let aIndex = 0; aIndex < my2DArray.length; aIndex++) {
  // initialize reverse array
  let aRevArray = [];
  aNumberArray = my2DArray[aIndex];
  // loop through given array
  for (let index = 0; index < aNumberArray.length; index++) {
    // push number to new array -> reverse array
    aRevArray.unshift(aNumberArray[index]);
  }
  console.log(aRevArray);
}
