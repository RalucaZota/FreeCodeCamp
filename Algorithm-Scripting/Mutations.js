/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  const secondArr = arr[1].toLowerCase().split('');
  const letter = secondArr.find((el) => {
    return !arr[0].includes(el);
  });
  return letter === undefined;
}

function mutationSecond(arr) {
  const lowerCasedArr = arr.map((el) => el.toLowerCase());
  const [first, second] = lowerCasedArr;
  const secondArr = second.split('');
  return secondArr.every((letter) => first.includes(letter));
}

mutation(['hello', 'Hello']); // true
mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']); // true
mutation(['Mary', 'Army']); // true
mutation(['Mary', 'Aarmy']); // true
mutation(['Alien', 'line']); // true
mutation(['floor', 'for']); // true
mutation(['hello', 'neo']); // false
mutation(['voodoo', 'no']); // false
