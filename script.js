const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

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
  if (currentContent === "0") {
    display.textContent = input;
  } else {
    display.textContent += input;
  }
}

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const valueOfButton = button.textContent;
    updateDisplay(valueOfButton);
  });
});

opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.textContent;
    firstNumber = Number(display.textContent);
    clearDisplay();
  });
});

equalButton.addEventListener("click", () => {
  secondNumber = Number(display.textContent);
  const result = operate(operator, firstNumber, secondNumber);
  clearDisplay();
  updateDisplay(result);
});

function clearDisplay() {
  display.textContent = "0";
}

clearButton.addEventListener("click", () => {
  clearDisplay();
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
});
