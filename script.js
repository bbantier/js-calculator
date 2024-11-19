const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".number");
const decButton = document.querySelector("#dec");
const opButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(op, firstNum, secondNum) {
  switch (op) {
    case "+":
      return add(firstNum, secondNum);
      break;
    case "-":
      return subtract(firstNum, secondNum);
      break;
    case "x":
      return multiply(firstNum, secondNum);
      break;
    case "/":
      return divide(firstNum, secondNum);
      break;
    default:
      return;
  }
}

function updateDisplay(input) {
  const currentContent = display.textContent;
  const cleanInput =
    input.toString().length > 10
      ? Math.round(input * 10 ** 9) / 10 ** 9
      : input;
  if (currentContent === "0" || secondNumber !== 0) {
    display.textContent = cleanInput;
  } else {
    display.textContent += cleanInput;
  }
}

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const valueOfButton = button.textContent;
    if (display.textContent.includes(".") && button.textContent === ".") {
      return;
    }
    if (firstNumber !== 0) {
      clearDisplay();
    }
    updateDisplay(valueOfButton);
  });
});

opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber !== 0) {
      secondNumber = Number(display.textContent);
      result = operate(operator, firstNumber, secondNumber);
      updateDisplay(result);
    }
    operator = button.textContent;
    firstNumber = Number(display.textContent);
  });
});

equalButton.addEventListener("click", () => {
  secondNumber = Number(display.textContent);
  result = operate(operator, firstNumber, secondNumber);
  updateDisplay(result);
});

clearButton.addEventListener("click", () => {
  clearDisplay();
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
});

function clearDisplay() {
  display.textContent = "0";
}