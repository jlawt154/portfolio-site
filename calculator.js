const calculator = document.getElementById("calculator");
const resultDisplay = document.getElementById("display");
const buttons1 = document.getElementById("buttons1");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const addButton = document.getElementById("add");
const minusButton = document.getElementById("subtract");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
let maxLength = resultDisplay.getAttribute("maxLength");
resultDisplay.value = "0";

let tempNumber = null;
let firstNumber = null;
let secondNumber = null;
let operation = null;
let result = null;

for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("number-button");
  button.classList.add("input-button");
  button.textContent = i;
  button.setAttribute("data-value", i);
  if (i === 0) {
    button.style.order = 1;
  }
  buttons1.appendChild(button);
}

const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach((button) => {
  let dataValue = parseInt(button.getAttribute("data-value"));

  button.addEventListener("click", function (event) {
    if (resultDisplay.value.length < maxLength) {
      if (operation === null) {
        if (firstNumber === null || firstNumber === 0) {
          firstNumber = dataValue;
        } else {
          firstNumber = parseInt(firstNumber.toString().concat(dataValue));
        }
        resultDisplay.value = firstNumber.toString();
      } else {
        if (secondNumber === null || secondNumber === 0) {
          secondNumber = dataValue;
        } else {
          secondNumber = parseInt(secondNumber.toString().concat(dataValue));
        }
        resultDisplay.value = secondNumber.toString();
      }
    }
  });
});

function clearValue() {
  tempNumber = null;
  firstNumber = null;
  secondNumber = null;
  operation = null;
  result = null;
  resultDisplay.value = 0;
}

clearButton.addEventListener("click", function () {
  clearValue();
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const thisOperation = event.target.id;
    console.log(thisOperation);
    if (firstNumber !== null && secondNumber === null) {
      switch (thisOperation) {
        case "add":
          operation = "+";
          break;
        case "subtract":
          operation = "-";
          break;
        case "multiply":
          operation = "*";
          break;
        case "divide":
          operation = "/";
          break;
      }
      resultDisplay.value = operation;
    }
  });
});

equalButton.addEventListener("click", function (event) {
  if (secondNumber !== null) {
    switch (operation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
    }
    resultDisplay.value = result;
  }
});
