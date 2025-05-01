/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  const newArr = str.split(' ');
  let longestLength = 0;
  let longestWord = '';
  for (let i = 0; i < newArr.length; i++) {
    const currentWordLength = newArr[i].length;
    if (currentWordLength > longestLength) {
      longestLength = currentWordLength;
      longestWord = newArr[i];
    }
    return { length: longestLength, word: longestWord };
  }
}

function findLongestWordSecond(str) {
  const newArr = str.split(' ');
  const longestWord = newArr.reduce((acc, currentVal) => {
    if (currentVal.length > acc) {
      return currentVal.length;
    }
    return acc;
  }, 0);
  return longestWord;
}

function findLongestWordThird(str) {
  const newArr = str.split(' ');
  const longestWord = newArr.reduce((acc, currentVal) => {
    if (currentVal.length > acc.length) {
      return currentVal;
    }
    return acc;
  }, '');
  return longestWord;
}

// findLongestWord("The quick brown fox jumped over the lazy dog");   // 6
// findLongestWord("May the force be with you");   // 5
// findLongestWord("Google do a barrel roll");   // 6
// findLongestWord("What is the average airspeed velocity of an unladen swallow");   // 8
// findLongestWord("What if we try a super-long word such as otorhinolaryngology");   // 19
