const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinaryRecursive = (input, remainders = []) => {
  if (input === 0) {
    return remainders.length ? remainders.reverse().join("") : "0";
  }

  remainders.push(input % 2);
  return decimalToBinaryRecursive(Math.floor(input / 2), remainders);
};
