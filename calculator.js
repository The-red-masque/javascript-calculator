let numbers = [];
/* BONUS for me: Create the buttons iteratively. */
let numpad = ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operators = ["+", "-", "/", "*"];
const result = numbers.reduce(getSum, 0);
let n1,operator,n2,newNumber;
const roundingPlace = 5;

const inputContainer = document.createElement("SECTION");
inputContainer.classList.add("input-container");

const digitDiv = document.createElement("DIV");
  digitDiv.classList.add("digit-container");
  numpad.forEach(item => {
    const btn = document.createElement("BUTTON");
    btn.textContent=item;
    btn.classList.add("number-button");
    digitDiv.appendChild(btn);
  });
  inputContainer.appendChild(digitDiv);
const operatorDiv = document.createElement("DIV");
operatorDiv.classList.add("operators-container");
  operators.forEach(item => {
    const btn = document.createElement("BUTTON");
    btn.textContent=item;
    btn.classList.add("operator-button");
    operatorDiv.appendChild(btn);
  });
  
  inputContainer.appendChild(operatorDiv);
document.body.appendChild(inputContainer);

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