/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function findMissingLetter(str) {
  const lettersArr = [...str];
  const firstCode = lettersArr[0].charCodeAt(0);
  const letterCode = lettersArr.find((letter, index) => {
    const expectedCode = firstCode + index;
    return letter.charCodeAt(0) !== expectedCode;
  });
  if (letterCode) {
    const index = lettersArr.indexOf(letterCode);
    const missingLetter = String.fromCharCode(firstCode + index);
    return missingLetter;
  }
  return undefined;
}

findMissingLetter('abce'); // "d"
findMissingLetter('abcdefghjklmno'); // "i"
findMissingLetter('bcd'); // undefined
findMissingLetter('yz'); // undefined
