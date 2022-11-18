const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");

//Skapa variablerna som kommer att användas
let exp;
let evaluated;
let valueHeight = 0;
let valueWeight = 0;
let bmi;

function btnCalc() {
  // denna funktion tar hand om beräkningen
  sum = result;
  elemCalcScreen.innerHTML = sum; // show the result on screen
}

function addDigit(thisSign) {
  // Om man har räknat ett bmi tidigare tas det bort och man kan fortsätta skriva, vilken knapp man än trycker på (Används på flera ställen i koden)
  if (bmi >= 0) {
    elemCalcScreen.innerHTML = "";
    bmi = -1;
  }
  // lägg till siffra
  elemCalcScreen.innerHTML += thisSign;
}

function calcSum() {
  if (bmi >= 0) {
    elemCalcScreen.innerHTML = "";
    bmi = -1;
  }
  //Utför opperationerna: addition och subtraktion
  exp = elemCalcScreen.innerHTML;
  if (exp) {
    elemCalcScreen.innerHTML = eval(exp);
  }
}

function changeHeight() {
  if (bmi >= 0) {
    elemCalcScreen.innerHTML = "";
    bmi = 0;
  }
  // Sparar höjden soom en ny variabel för att kunna använda senare
  const height = elemCalcScreen.innerHTML;
  if (height) {
    valueHeight = height; //spara talet som ny variabel
    elemCalcScreen.innerHTML = ""; //renser skärmen för att kunna skriva in nya tal
  }
}

function changeWeight() {
  if (bmi >= 0) {
    elemCalcScreen.innerHTML = "";
    bmi = 0;
  }
  // Sparar vikten soom en ny variabel för att kunna använda senare
  const weight = elemCalcScreen.innerHTML;
  if (weight) {
    valueWeight = weight; //spara talet som ny variabel
    elemCalcScreen.innerHTML = ""; //renser skärmen för att kunna skriva in nya tal
  }
}

function calcBmi() {
  if (bmi >= 0) {
    elemCalcScreen.innerHTML = "";
    bmi = 0;
  }
  bmi = parseFloat(valueWeight / (valueHeight / 100) ** 2).toFixed(2); //räknar ut bmi
  elemCalcScreen.innerHTML = bmi;
  if (elemCalcScreen.innerHTML < 18.5) {
    // kollar om man är underviktig
    elemCalcScreen.innerHTML = bmi + " Undervikt";
  }
  if (elemCalcScreen.innerHTML < 25 && elemCalcScreen.innerHTML >= 18.5) {
    // kollar om man är normalviktig
    elemCalcScreen.innerHTML = bmi + " Normalvikt";
  }
  if (elemCalcScreen.innerHTML < 30 && elemCalcScreen.innerHTML >= 25) {
    // kollar om man är överviktig
    elemCalcScreen.innerHTML = bmi + " Övervikt";
  }
  if (elemCalcScreen.innerHTML >= 30) {
    // kollar om man är fet
    elemCalcScreen.innerHTML = bmi + " Fetma";
  }
}

function btnBackSpace() {
  // tar bort en siffra
  let calcScreen = elemCalcScreen.innerHTML;
  calcScreen = calcScreen.slice(0, -1);
  elemCalcScreen.innerHTML = calcScreen;
}

function reset() {
  // tar bort allt man skrivit
  elemCalcScreen.innerHTML = "";
}
