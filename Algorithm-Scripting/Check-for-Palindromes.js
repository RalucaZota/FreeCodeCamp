/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function checkForPalindrome(word) {
  const cleanedWord = word.replace(/[^A-Za-z]/g, '').trim().toLowerCase()
  const reversedWord = cleanedWord.split("").reverse().join('');
  if(cleanedWord === reversedWord){
    return true
  }
  return false
}

checkForPalindrome("rss*a_c#e caR");
checkForPalindrome("eye");   // true
checkForPalindrome("_eye");   // true
checkForPalindrome("race car");   // true
checkForPalindrome("not a palindrome");   // false
checkForPalindrome("A man, a plan, a canal. Panama");   // true
checkForPalindrome("never odd or even");   // true
checkForPalindrome("nope");   // false
checkForPalindrome("almostomla");   // false
checkForPalindrome("My age is 0, 0 si ega ym.");   // true
checkForPalindrome("1 eye for of 1 eye.");   // true
checkForPalindrome("0_0 (: /-\ :) 0-0");   // true
checkForPalindrome("five|\_/|four");   // false
