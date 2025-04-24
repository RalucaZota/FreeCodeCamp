/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  const arr = str.split("").reverse().join("");
  return arr;
}

reverseString("Greetings from Earth");  // "olleh"
reverseString("Howdy");   // "ydwoH"
reverseString("Greetings from Earth");   // "htraE morf sgniteerG"


function reverseStringSecond(str){
  const arr = str.split("")
  const newArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]) 
  }
  const newStr = newArr.join("")
  return newStr
  
}
reverseStringSecond("Greetings from Earth");;
reverseStringSecond("Howdy");