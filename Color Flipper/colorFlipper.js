const click = document.querySelector(".click");
const body = document.querySelector("body");
const change = document.querySelector(".change");
const input = document.querySelector("input");
const colorChoice = [
  "red",
  "blue",
  "black",
  "Orange",
  "gray",
  "Pink",
  "yellow",
];

const randomColor = function () {
  let random = Math.floor(Math.random() * 7);
  console.log(colorChoice[random]);
  body.style.backgroundColor = colorChoice[random];
};

const changeColor = function () {
  let color = input.value;
  body.style.backgroundColor = color;
};

click.addEventListener("click", randomColor);
change.addEventListener("click", changeColor);
