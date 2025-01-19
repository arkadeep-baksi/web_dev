/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  // Convert to Lowercase and remove common punctuations and spaces
  str = str.toLowerCase().split(" ").join("").split(",").join("").split("!").join("").split(".").join("").split("?").join("");
  // Reverse a string
  const reversed_str = [...str].reverse().join("");

  return str === reversed_str ? true : false;

}

module.exports = isPalindrome;
