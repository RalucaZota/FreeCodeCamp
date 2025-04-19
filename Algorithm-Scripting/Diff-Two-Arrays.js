/*
Compare two arrays and return a new array with any items only found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays.
*/

const searchDiffInArrays = (arr1, arr2) => {
  const differenceFromArr2 = arr1.filter(item => !arr2.includes(item))
  const differenceFromArr1 = arr2.filter(item => !arr1.includes(item))
  return [...differenceFromArr2, ...differenceFromArr1];
};
searchDiffInArrays(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);   // ["pink wool"]
searchDiffInArrays(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);   // ["diorite", "pink wool"]
searchDiffInArrays(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);   // []
searchDiffInArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]);   // [4]
searchDiffInArrays([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);   // ["piglet", 4]
searchDiffInArrays([], ["snuffleupagus", "cookie monster", "elmo"]);   // ["snuffleupagus", "cookie monster", "elmo"]
searchDiffInArrays([1, "calf", 3, "piglet"], [7, "filly"]);   // [1, "calf", 3, "piglet", 7, "filly"]
