/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  const arr = str.split(" ");
  const newArr = arr.map((text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  });
  return newArr.join(" ");
}

titleCase("I'm a little tea pot");   // "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt");   // "Short And Stout"
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");   // "Here Is My Handle Here Is My Spout"
