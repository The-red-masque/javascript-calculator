let numpad = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "C"];
let operators = ["*", "/", "-", "+", "="];
let inputArr=[];
let num=0;
let operator = null;
let total = 0;

const roundingPlace = 5;

const displayContainer = document.createElement("SECTION");
displayContainer.classList.add("display-container");

const displayDiv = document.createElement("DIV");
displayDiv.classList.add("display-div");
displayDiv.textContent = num;
displayContainer.appendChild(displayDiv);
document.body.appendChild(displayContainer);

generateInputContainer();
operate();

function generateInputContainer() {
  const inputContainer = document.createElement("SECTION");
  inputContainer.classList.add("input-container");

  generateNumpadButtons(inputContainer);
  generateOperatorButtons(inputContainer);
  
  document.body.appendChild(inputContainer);
}

function generateNumpadButtons(inputContainer) {
  const digitDiv = document.createElement("DIV");
  digitDiv.classList.add("digit-container");
  numpad.forEach(item => {
    createDigitBtn(item, digitDiv);
  });
  inputContainer.appendChild(digitDiv);
}

function generateOperatorButtons(inputContainer) {
  const operatorDiv = document.createElement("DIV")  
    operatorDiv.classList.add("operators-container");
    operators.forEach(item => {
      createOperatorBtn(item,operatorDiv);
  });
  inputContainer.appendChild(operatorDiv);
}


function createDigitBtn(item, parentDiv) {
  const btn = document.createElement("BUTTON");
  btn.textContent=item;
  item === "C" ? btn.classList.add("clear-button") 
  : item === "." ? btn.classList.add("decimal-button") // Visually the same as number button. Allows for customization and querySelector.
  : btn.classList.add("number-button");
  item === "C" ? btn.addEventListener("click", clearNumbers)
  : item === "." ? btn.addEventListener("click", function() {
    joinNumbers(inputArr,item)
    btn.disabled = true;
  }) 
  : btn.addEventListener("click", function() {
    joinNumbers(inputArr,item)});
  parentDiv.appendChild(btn);
}

function createOperatorBtn(item, parentDiv) {
  const btn = document.createElement("BUTTON");
  btn.textContent=item;
  btn.classList.add("operator-button");
  btn.addEventListener("click", function(){
    console.log(item);
    joinNumbers(inputArr,item)});
  parentDiv.appendChild(btn);
}

// Rounding logic
// const roundingLogic = (Math.round(newNumber*(10**roundingPlace)))/(10**roundingPlace);

function addition (inputArr) {
  inputArr.split("+");
  const a = Number(inputArr.at(0));
  const b = Number(inputArr.at(1));
  num = a + b;
  return displayContainerDiv.textContent = num;
}
function subtraction (inputArr) {
  inputArr.split("-");
    const a = Number(inputArr.at(0));
  const b = Number(inputArr.at(1));
  num = a - b;
  return displayContainerDiv.textContent = num;
}
function multiplication (inputArr) {
  inputArr.split("*");
  const a = Number(inputArr.at(0));
  const b = Number(inputArr.at(1));
  num = a * b;
  return displayContainerDiv.textContent = num;
}
function division (inputArr) {
  inputArr.split("/");
  const a = Number(inputArr.at(0));
  const b = Number(inputArr.at(1));
  num = a / b;
  return displayContainerDiv.textContent = num;
}

function clearNumbers ()  {
      inputArr = [];
      num = 0;
      total = 0;
      operator = null;
      document.querySelector(".decimal-button").disabled = "";
      return displayDiv.textContent = num,total,operator;
}
function joinNumbers(inputArr,item){
  inputArr.push(item)
  num = inputArr
    .join()
    .replace(/,/g, '')
  return displayDiv.textContent = num;
}

function operate  (operator,inputArr) {
  const isValidOperator = "+"||"-"||"/"||"*"||"="||null
  // let a = Number(num);
  // let b = Number(1);
  operator ===   "+" ? addition(a,b)
  : operator === "-" ? subtraction(a,b)
  : operator === "/" ? division(a,b)
  : operator === "*" ? multiplication(a,b)
  : operator === "=" ? console.log("Do the math.")
  : operator !== isValidOperator ?
    console.log("That doesn't belong there.") : console.log("Whoops! Problem with the operate function.");
  }
