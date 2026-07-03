let numbers = [];
/* BONUS for me: Create the buttons iteratively. */
let numpad = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "C"];
let operators = ["*", "/", "-", "+"];


const result = numbers.reduce(getSum, 0);
let n1,operator,n2,newNumber;
const roundingPlace = 5;
const displayContainer = document.createElement("SECTION");
displayContainer.classList.add("display-container");
const displayDiv = document.createElement("DIV");
displayDiv.textContent="The answer is 42.";
displayContainer.appendChild(displayDiv);
document.body.appendChild(displayContainer);
const inputContainer = document.createElement("SECTION");
inputContainer.classList.add("input-container");

const digitDiv = document.createElement("DIV");
  digitDiv.classList.add("digit-container");
  numpad.forEach(item => {
    createDigitBtn(item);
  });
  inputContainer.appendChild(digitDiv);

  const operatorDiv = document.createElement("DIV");
    operatorDiv.classList.add("operators-container");
    operators.forEach(item => {
      createOperatorBtn(item);
  });
  inputContainer.appendChild(operatorDiv);
document.body.appendChild(inputContainer);

function createDigitBtn(item) {
  const btn = document.createElement("BUTTON");
  btn.textContent=item;
  btn.classList.add("number-button");
  digitDiv.appendChild(btn);
}

function createOperatorBtn(item) {
  const btn = document.createElement("BUTTON");
  btn.textContent=item;
  btn.classList.add("operator-button");
  operatorDiv.appendChild(btn);
}

// Rounding logic
const roundingLogic = (Math.round(newNumber*(10**roundingPlace)))/(10**roundingPlace);

function add (n1,n2) {
  newNumber = n1+n2;

  numbers.push((Math.round(newNumber*(10**roundingPlace)))/(10**roundingPlace));
  //numbers.push(newNumber);
}
function subtract (n1,n2) {
  newNumber = n1-n2;
  numbers.push((Math.round(newNumber*(10**roundingPlace)))/(10**roundingPlace));
}
function multiply (n1,n2) {
  newNumber = n1 * n2;
  numbers.push((Math.round(newNumber*(10**roundingPlace)))/(10**roundingPlace));
}
function divide   (n1,n2) {
  newNumber = n1/n2;
  numbers.push((Math.round(newNumber*(10**roundingPlace)))/(10**roundingPlace));
}
function clearNumbers ()  {numbers = [];}
function operate  (n1,operator,n2) {
  if (operator === "+") {
    add(n1,n2);
  }
  else if (operator === "-"){
    subtract(n1,n2);
  }
  else if (operator === "/") {
    divide(n1,n2);
  }
  else if (operator === "*"){
    multiply(n1,n2);
  } else {alert("Whoops!")}
}

function getSum(total, num) {
  return total + Math.round(num);
}