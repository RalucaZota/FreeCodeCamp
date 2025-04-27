/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  const newArr = arr.filter((el) => {
    return Boolean(el);
  });
  return newArr;
}

// bouncer([7, "ate", "", false, 9]);   // [7, "ate", 9]
// bouncer(["a", "b", "c"]);   // ["a", "b", "c"]
// bouncer([false, null, 0, NaN, undefined, ""]);   // []
// bouncer([1, null, NaN, 2, undefined]);   // [1, 2]
