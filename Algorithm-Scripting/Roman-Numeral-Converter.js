/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

const romanNumerals = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

function convertToRoman(num) {
  let result = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    const [value, symbol] = romanNumerals[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

// convertToRoman(3); // "III"
// convertToRoman(4); // "IV"
// convertToRoman(5); // "V"
// convertToRoman(9); // "IX"
// convertToRoman(12); // "XII"
// convertToRoman(16); // "XVI"
// convertToRoman(29); // "XXIX"
// convertToRoman(44); // "XLIV"
// convertToRoman(45); // "XLV"
// convertToRoman(68); // "LXVIII"
// convertToRoman(83); // "LXXXIII"
// convertToRoman(97); // "XCVII"
// convertToRoman(99); // "XCIX"
// convertToRoman(500); // "D"
// convertToRoman(501); // "DI"
// convertToRoman(649); // "DCXLIX"
// convertToRoman(798); // "DCCXCVIII"
// convertToRoman(891); // "DCCCXCI"
// convertToRoman(1000); // "M"
// convertToRoman(1004); // "MIV"
// convertToRoman(1006); // "MVI"
// convertToRoman(1023); // "MXXIII"
// convertToRoman(2014); // "MMXIV"
// convertToRoman(3999); // "MMMCMXCIX"
