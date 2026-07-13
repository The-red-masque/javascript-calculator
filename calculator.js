let numpad = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "C"];
let operators = ["*", "/", "-", "+", "="];
let inputArr=[];
let num=0;
let total=0;
let operator = null;

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
  : item === "." ? btn.classList.add("decimal-button") // Visually the same as number button.
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

function addition (total,num) {
  total = total + num;
  return total;
}
function subtraction (total,num) {
  total = total - num;
  return total;
}
function multiplication (total,num) {
  total = total * num;
  return total;
}
function division (total,num) {
  total = total / num;
  return displayContainerDiv.textContent = total;
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

function operate  (operator,total,num,) {
  const isValidOperator = "+"||"-"||"/"||"*"||"="||null
  Number(num);
  Number(total);
  operator ===   "+" ? addition(total,num)
  : operator === "-" ? subtraction(num,total)
  : operator === "/" ? division(num,total)
  : operator === "*" ? multiplication(num,total)
  : operator === "=" ? console.log("Do the math.")
  : operator !== isValidOperator ?
    console.log("That doesn't belong there.") : console.log("Whoops! Problem with the operate function.");
  }
