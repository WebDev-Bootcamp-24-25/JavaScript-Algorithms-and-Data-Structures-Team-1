const input = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");


function convertToRoman(num) {
  let romanNumeral = "";
  let romanList = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  for (i = 0; i < romanList.length; i++) {
    while (num >= romanList[i][1]) {
      romanNumeral += romanList[i][0];
      num -= romanList[i][1];
    }
  }
  return romanNumeral
}

console.log(convertToRoman(200));
