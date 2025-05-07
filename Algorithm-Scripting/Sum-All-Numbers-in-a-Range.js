/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);
  let sum = 0;
  for(let i = minVal; i <= maxVal; i++){
    sum += i
  }
  return sum
}

sumAll([5, 10]);   // 45
sumAll([10, 5]);   // 45
sumAll([1, 4]);   // 10
