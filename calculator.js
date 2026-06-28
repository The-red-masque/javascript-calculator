let numbers = [];
const result = numbers.reduce(getSum, 0);
let n1,operator,n2,newNumber;
const roundingPlace = 5;

const digitDiv = document.createElement("div");
  digitDiv.classList.add("digit-container");
  const zeroBtn = document.createElement("BUTTON");
  zeroBtn.textContent = "0";
  zeroBtn.classList.add("number-button");
  digitDiv.appendChild(zeroBtn);
  const oneBtn = document.createElement("BUTTON");
    oneBtn.textContent = "1";
    oneBtn.classList.add("number-button");
  digitDiv.appendChild(oneBtn);
  const twoBtn = document.createElement("BUTTON");
    twoBtn.textContent = "2";
    twoBtn.classList.add("number-button");
  digitDiv.appendChild(twoBtn);
  const threeBtn = document.createElement("BUTTON");
    threeBtn.textContent = "3";
    threeBtn.classList.add("number-button");
  digitDiv.appendChild(threeBtn);
  const fourBtn = document.createElement("BUTTON");
    fourBtn.textContent = "4";
    fourBtn.classList.add("number-button");
  digitDiv.appendChild(fourBtn);
  const fiveBtn = document.createElement("BUTTON");
    fiveBtn.textContent = "5";
    fiveBtn.classList.add("number-button");
  digitDiv.appendChild(fiveBtn);
  const sixBtn = document.createElement("BUTTON");
    sixBtn.textContent = "6";
    sixBtn.classList.add("number-button");
  digitDiv.appendChild(sixBtn);
  const sevenBtn = document.createElement("BUTTON");
    sevenBtn.textContent = "7";
    sevenBtn.classList.add("number-button");
  digitDiv.appendChild(sevenBtn);
  const eightBtn = document.createElement("BUTTON");
    eightBtn.textContent = "8";
    eightBtn.classList.add("number-button");
  digitDiv.appendChild(eightBtn);
  const nineBtn = document.createElement("BUTTON");
    nineBtn.textContent = "9";
    nineBtn.classList.add("number-button");
  digitDiv.appendChild(nineBtn);
  const decimalBtn = document.createElement("BUTTON");
    decimalBtn.textContent = ".";
    decimalBtn.classList.add("number-button");
    digitDiv.appendChild(decimalBtn);
document.body.appendChild(digitDiv);

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

// document.getElementById("0key").addEventListener("click", function(){ n1? n1=0 : n2=0})  // Is there a better way to do this?
// document.getElementById("1key").onclick = function(){ n1? n1=1 : n2=1};
// document.getElementById("2key").onclick = function(){ n1? n1=2 : n2=2};
// document.getElementById("3key").onclick = function(){ n1? n1=3 : n2=3};
// document.getElementById("4key").onclick = function(){ n1? n1=4 : n2=4};
// document.getElementById("5key").onclick = function(){ n1? n1=5 : n2=5};
// document.getElementById("6key").onclick = function(){ n1? n1=6 : n2=6};
// document.getElementById("7key").onclick = function(){ n1? n1=7 : n2=7};
// document.getElementById("8key").onclick = function(){ n1? n1=8 : n2=8};
// document.getElementById("9key").onclick = function(){ n1? console.log(n1=9) : console.log(n2=9)};