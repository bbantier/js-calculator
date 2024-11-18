let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function add (firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract (firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply (firstNum,secondNum) {
  return firstNum * secondNum;
}

function divide (firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate (op, firstNum, secondNum) {
  switch(op) {
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