/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str1) {
    let count = 0;
    str1 = str1.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i<str1.length; i++){
      
      let char = str1.charAt(i);
      if (vowels.indexOf(char) !== -1){
        count+=1;
      }
    }
    return count;
}

module.exports = countVowels;