let numbers = [];
const result = numbers.reduce(getSum, 0);
let n1 = 0;
let n2 = 0;
let n3 = 0;
let operator;
let roundingPlace = 3;
// rounding logic
const roundingLogic = (Math.round(n3*(10**roundingPlace)))/(10**roundingPlace);
function add (n1,n2) {
  n3 = n1+n2;
  // n3 = roundingLogic;
  numbers.push((Math.round(n3*(10**roundingPlace)))/(10**roundingPlace));
  //numbers.push(n3);
}
function subtract (n1,n2) {
  n3 = n1-n2;
  numbers.push((Math.round(n3*(10**roundingPlace)))/(10**roundingPlace));
}
function multiply (n1,n2) {
  n3 = n1 * n2;
  numbers.push((Math.round(n3*(10**roundingPlace)))/(10**roundingPlace));
}
function divide   (n1,n2) {
  n3 = n1/n2;
  numbers.push((Math.round(n3*(10**roundingPlace)))/(10**roundingPlace));
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
document.getElementById("0key").onclick = function(){ n1? n1=0 : n2=0};
document.getElementById("1key").onclick = function(){ n1? n1=1 : n2=1};
document.getElementById("2key").onclick = function(){ n1? n1=2 : n2=2};
document.getElementById("3key").onclick = function(){ n1? n1=3 : n2=3};
document.getElementById("4key").onclick = function(){ n1? n1=4 : n2=4};
document.getElementById("5key").onclick = function(){ n1? n1=5 : n2=5};
document.getElementById("6key").onclick = function(){ n1? n1=6 : n2=6};
document.getElementById("7key").onclick = function(){ n1? n1=7 : n2=7};
document.getElementById("8key").onclick = function(){ n1? n1=8 : n2=8};
document.getElementById("9key").onclick = function(){ n1? console.log(n1=9) : console.log(n2=9)};