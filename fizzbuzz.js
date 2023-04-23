/* fizzbuzz.js
FizzBuzz
Create a JavaScript code that prints each number from 1 to 100 on a new line.

For each multiple of 3, print "Fizz" instead of the number.

For each multiple of 5, print "Buzz" instead of the number.

For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/
// initialize a variable with value = '1'
let aNumber = 1;
// for numbers from 1 to 100
while (aNumber <= 100) {
  if (aNumber % 3 === 0 && aNumber % 5 === 0) {
    // if multiple of 3 and 5 -> print "FizzBuzz"
    console.log("FizzBuzz");
  } else if (aNumber % 3 === 0) {
    // if multiple of 3 print -> "Fizz"
    console.log("Fizz");
  } else if (aNumber % 5 === 0) {
    // if multiple of 5 print "Buzz"
    console.log("Buzz");
  } else {
    // print number
    console.log(aNumber);
  }
  aNumber++;
}
