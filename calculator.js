let numpad = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "C"];
let operators = ["*", "/", "-", "+", "="];
let inputArr=[];
let num=0;

// const roundingPlace = 5;

const displayContainer = document.createElement("SECTION");
displayContainer.classList.add("display-container");

const displayDiv = document.createElement("DIV");
displayDiv.classList.add("display-div");
displayDiv.textContent = `${num}`;
displayContainer.appendChild(displayDiv);
document.body.appendChild(displayContainer);

generateInputContainer();

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
  : item === "." ? btn.classList.add("decimal-button")
  : btn.classList.add("number-button");
  item === "C" ? btn.addEventListener("click", clearNumbers)
  : item === "." ? btn.addEventListener("click", function() {
    joinArr(inputArr,item)
    btn.disabled = true;
  }) 
  : btn.addEventListener("click", function() {
    joinArr(inputArr,item)
  });
  parentDiv.appendChild(btn);
}

function createOperatorBtn(item, parentDiv) {
  const btn = document.createElement("BUTTON");
  btn.textContent=item;
  btn.classList.add("operator-button");
  item === "=" ? btn.addEventListener("click", operate)
  : btn.addEventListener("click", function()
  {
    if (inputArr.includes(operators)) {
      inputArr = operate()
      joinArr(inputArr,item)  // : expected?
      decimalBtn = document.querySelector(".decimal-button")
      decimalBtn.disabled =""
    }
    else{
      joinArr(inputArr,item) // Declaration or statement expected
      decimalBtn = document.querySelector(".decimal-button")
      decimalBtn.disabled =""
  }}
  );
  parentDiv.appendChild(btn);
}

// Rounding logic


function addition (num) {
  inputArr = num.split("+");
  const a = Number(inputArr.at(0));
  const b = Number(inputArr.at(1));
  num = (a + b);
  num = Math.round(num*(10**5))/(10**5);;
  return inputArr = [num], displayDiv.textContent = num;
}

function subtraction (num) {
  inputArr = num.split("-");
  const a = Number(inputArr.at(0));
  const b = Number(inputArr.at(1));
  num = (a - b);
  num = Math.round(num*(10**5))/(10**5);;
  return inputArr = [num], displayDiv.textContent = num;
}

function multiplication (num) {
  inputArr = num.split("*");
  const a = Number(inputArr.at(0));
  const b = Number(inputArr.at(1));
  num = (a * b);
  num = Math.round(num*(10**5))/(10**5);
  return inputArr = [num], displayDiv.textContent = num;
}

function division (num) {
  
  inputArr = num.split("/");
  const a = Number(inputArr.at(0));
  const b = Number(inputArr.at(1)); // a and b
  num = (a / b);  
  num = Math.round(num*(10**5))/(10**5);
  return inputArr = [num], displayDiv.textContent = num;
}

function clearNumbers ()  {
  inputArr = [];
  num = 0;
  total = 0;
  document.querySelector(".decimal-button").disabled = "";
  return displayDiv.textContent = num,total;
}

function joinArr(inputArr,item){
  inputArr.push(item)
  num = inputArr
    .join()
    .replace(/,/g, '')
  return displayDiv.textContent = num;
}

function operate  () {
  num = String(num);
  num.includes("+")   ? addition(num)
  : num.includes("-") ? subtraction(num)
  : num.includes("/") ? division(num)
  : num.includes("*") ? multiplication(num)
  : alert("Whoops! There's no math to do.");
  }
