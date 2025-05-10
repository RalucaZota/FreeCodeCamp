/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/


function pairElement(str) {
  const arr = [...str];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      newArr.push([arr[i], "T"]);
    } else if (arr[i] === "T") {
      newArr.push([arr[i], "A"]);
    } else if (arr[i] === "C") {
      newArr.push([arr[i], "G"]);
    } else if (arr[i] === "G") {
      newArr.push([arr[i], "C"]);
    }
  }
  return newArr;
}

function pairElementTwo(str) {
  const arr = [...str];
  const dictionary = { A: "T", T: "A", C: "G", G: "C" };
  const updatedArr = arr.map((el) => {
    return [el, dictionary[el]];
  });
  return updatedArr;
}

pairElement("ATCGA");   // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG");   // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA");   // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
