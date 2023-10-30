let numbers = [
  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

numbers.forEach((item) => {
  let calculatorContainer = document.querySelector("#calculatorContainer");
  let numbersDiv = document.createElement("button");
  numbersDiv.id = `button${item}`;
  numbersDiv.className = "numbersDiv";
  calculatorContainer.append(numbersDiv);
  let buttonCharacter = document.createElement("h2");
  buttonCharacter.id = `font${item}`;
  buttonCharacter.style = "display:flex; align-items: center;";
  numbersDiv.append(buttonCharacter);
});

let fonts = {};
numbers.forEach((element) => {
  fonts["font" + element] = document.querySelector("#font" + element);
});

let calculatorContainer = document.querySelector("#calculatorContainer");
let resultBar = document.createElement("div");
resultBar.id = "resultBar";
resultBar.innerText = "";
calculatorContainer.append(resultBar);

fonts.font4.textContent = "**";
fonts.font5.textContent = "CE";
fonts.font6.textContent = "<=";
fonts.font7.textContent = "/";
fonts.font8.textContent = "7";
fonts.font9.textContent = "8";
fonts.font10.textContent = "9";
fonts.font11.textContent = "*";
fonts.font12.textContent = "4";
fonts.font13.textContent = "5";
fonts.font14.textContent = "6";
fonts.font15.textContent = "-";
fonts.font16.textContent = "1";
fonts.font17.textContent = "2";
fonts.font18.textContent = "3";
fonts.font19.textContent = "+";
fonts.font20.textContent = ".";
fonts.font21.textContent = "0";
fonts.font22.textContent = "=";

numbers.forEach((item) => {
  let buttonCharacter = document.querySelector(`#button${item}`);
  let resultBar = document.querySelector("#resultBar");
  let equalsCharacter = document.querySelector("#button22");
  let ceCharacter = document.querySelector("#button5");

  buttonCharacter.onclick = () =>
    (resultBar.innerText += buttonCharacter.innerText);
  equalsCharacter.onclick = () =>
    resultBar.innerText = math.evaluate(resultBar.innerText);
  ceCharacter.onclick = () =>
    resultBar.innerText = "";
});
