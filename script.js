const MAX_DISPLAY = 999999999;
const display = document.querySelector("#display");
const opDisplay = document.querySelector("#op-display");
const numButtons = document.querySelectorAll(".number");
const decButton = document.querySelector("#dec");
const opButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;
let isNewNumber = true;

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
  if (input > MAX_DISPLAY) {
    display.textContent = "TOO BIG";
    return;
  }

  const cleanInput =
    input.toString().length > 9 ? input.toString().substring(0, 9) : input;

  if (isNewNumber) {
    display.textContent = cleanInput;
    isNewNumber = false;
  } else {
    display.textContent += cleanInput;
  }
}

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const valueOfButton = button.textContent;
    if (
      (display.textContent.includes(".") && button.textContent === ".") ||
      display.textContent.length === 9
    ) {
      return;
    }
    updateDisplay(valueOfButton);
  });
});

opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    isNewNumber = true;

    if (firstNumber === 0) {
      firstNumber = Number(display.textContent);
    } else {
      secondNumber = Number(display.textContent);
      result = operate(operator, firstNumber, secondNumber);
      updateDisplay(result);
      firstNumber = result;
    }

    secondNumber = 0;
    operator = button.textContent;
    opDisplay.textContent = operator;
    isNewNumber = true;
  });
});

equalButton.addEventListener("click", () => {
  if (operator === "") {
    return;
  }

  if (secondNumber === 0) {
    secondNumber = Number(display.textContent);
    result = operate(operator, firstNumber, secondNumber);
  }
  isNewNumber = true;
  updateDisplay(result);
  clearValues();
});

clearButton.addEventListener("click", () => {
  clearDisplay();
  clearValues();
});

function clearDisplay() {
  display.textContent = "0";
}

function clearValues() {
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  opDisplay.textContent = "";
  isNewNumber = true;
}
