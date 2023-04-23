/* vowel-vs-consonant.js
Vowel versus Consonant
Create a JavaScript code that accepts a string of lowercase letters. Print the word followed 
by how many consonants and vowels it has.

"a", "e", "i", "o", and "u" are considered vowels. 

Every other letter is considered a consonant.

Hint: Define two variables that keep track of the number of consonants and vowels.

Input Arrays	Expected Results
"hello"	
"hello has 3 consonants and 2 vowels"
"ukelele"	
"ukelele has 3 consonants and 4 vowels"
"awesome"	"awesome has 3 consonants and 4 vowels"
"onomonopia"	"onomonopia has 4 consonants and 6 vowels"
"textbook"	"textbook has 5 consonants and 3 vowels"
*/

// define and initialize variables
//let aConsonantCount = 0;
// get input string
let aString = "hello";
let aStringArray = ["hello", "ukelele", "awesome", "onomonopia", "textbook"];

for (let aIndex = 0; aIndex < aStringArray.length; aIndex++) {
  // find number of vowels
  let aVowelCount = aStringArray[aIndex].match(/[aeiou]/gi).length;
  // display string and string info
  console.log(
    '"',
    aStringArray[aIndex],
    '" has ',
    // number of consonents -> length - # of vowels
    aStringArray[aIndex].length - aVowelCount, //
    " consonats and ",
    aVowelCount,
    " vowels"
  );
}
