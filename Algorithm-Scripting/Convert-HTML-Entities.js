/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  const htmlEntitiesObj = { '&': '&​amp;', '<': '&​lt;', '>': '&​gt;', '"': '&quot;', "'": '&apos;' };
  const arr = [...str];
  const changedArr = arr.map((el) => {
    if (htmlEntitiesObj[el]) {
      return htmlEntitiesObj[el];
    } else return el;
  });
  return changedArr.join('');
}

convertHTML('Dolce & Gabbana'); // Dolce &​amp; Gabbana
convertHTML('Hamburgers < Pizza < Tacos'); // Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML('Sixty > twelve'); // Sixty &​gt; twelve
convertHTML('Stuff in "quotation marks"'); // Stuff in &​quot;quotation marks&​quot;
convertHTML("Shindler's List"); // Shindler&​apos;s List
convertHTML('<>'); // &​lt;&​gt;
convertHTML('abc'); // abc
