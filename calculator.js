let numpad = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "C"];
let operators = ["*", "/", "-", "+", "="];


// let result = //numbers.reduce(gettotal, 0);

let total = 0;

const roundingPlace = 5;

const displayContainer = document.createElement("SECTION");
displayContainer.classList.add("display-container");
const displayDiv = document.createElement("DIV");
  displayDiv.textContent = total;
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
  btn.addEventListener("click", function() 
  {
    console.log(item);
    n1 = item;
  })
  digitDiv.appendChild(btn);
}

function createOperatorBtn(item) {
  const btn = document.createElement("BUTTON");
  btn.textContent=item;
  btn.classList.add("operator-button");
  btn.addEventListener("click", function(){
    console.log(item);
    operator = item;
  })
  operatorDiv.appendChild(btn);
}

// Rounding logic
// const roundingLogic = (Math.round(newNumber*(10**roundingPlace)))/(10**roundingPlace);

function addition (total,n1) {
  total = total + n1;
}
function subtraction (total,n1) {
  total = total - n1;
  return total;
}
function multiplication (total,n1) {
  total = total * n1;
  return total;
}
function division   (total,n1) {
  total = total / n1;
  return total;
}
if (numpad ==="C") {clearNumbers();}
function clearNumbers ()  {number = 0;}

if (operator === "="){operate();} else {alert("Whoops!")}
function operate  (n1,operator,total) {
  if (operator === "+") {
    addition(n1,total);
  }
  else if (operator === "-"){
    subtraction(n1,total);
  }
  else if (operator === "/") {
    division(n1,total);
  }
  else if (operator === "*"){
    multiplication(n1,total);
  }// else {alert("Whoops!")}
}