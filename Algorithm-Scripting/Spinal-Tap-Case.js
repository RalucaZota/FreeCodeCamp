/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  const arr = [...str];
  const newArr = arr.map((el, index) => {
    if (el === ' ' || el === '_') return '-';
    if (
      el === el.toUpperCase() &&
      el !== el.toLowerCase() &&
      index > 0 &&
      arr[index - 1] !== ' ' &&
      arr[index - 1] !== '_' &&
      arr[index - 1] !== '-'
    ) {
      return '-' + el.toLowerCase();
    }
    return el.toLowerCase();
  });
  return newArr.join('');
}

spinalCase('This Is Spinal Tap'); // "this-is-spinal-tap"
spinalCase('thisIsSpinalTap'); // "this-is-spinal-tap"
spinalCase('The_Andy_Griffith_Show'); // "the-andy-griffith-show"
spinalCase('Teletubbies say Eh-oh'); // "teletubbies-say-eh-oh"
spinalCase('AllThe-small Things'); // "all-the-small-things"
