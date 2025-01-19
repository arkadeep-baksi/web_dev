/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length != str2.length){
    return false;
  }
  // Array to keep a frequency count of the characters of any one of the string
  const chars = new Array(128).fill(0);

  for (let i = 0; i< str1.length; i++){
    chars[str1.charCodeAt(i)] +=1;
  }
  for (let i = 0 ;i<str2.length; i++){
    if (!chars[str2.charCodeAt(i)]){
      return false;
    }
    else{
      chars[str2.charCodeAt(i)]-=1;
    }
  }
  // Checking if the frequency of each unique character exactly matches
  for (let i = 0; i<chars.length; i++){
    if (chars[i]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
