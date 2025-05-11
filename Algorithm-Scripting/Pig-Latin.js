/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arr = [...str];
  const index = arr.findIndex((el) => vowels.includes(el));
  if (index === 0) {
    return str + 'way';
  }
  else {
   const cuttedArr = arr.slice(index)
   const cuttedLetter = arr.slice(0, index)
   return [...cuttedArr, ...cuttedLetter].join("") + 'ay'
  }
}
// translatePigLatin("california");   // "aliforniacay"
// translatePigLatin("paragraphs");   // "aragraphspay"
// translatePigLatin('glove'); // "oveglay"
// translatePigLatin("algorithm");   // "algorithmway"
// translatePigLatin("eight");   // "eightway"
