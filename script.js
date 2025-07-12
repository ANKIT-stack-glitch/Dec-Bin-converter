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

const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  const binaryResult = decimalToBinaryRecursive(parseInt(numberInput.value));
  result.innerText = binaryResult;
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

