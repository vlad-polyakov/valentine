"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 1;

let play = true;
let noCount = 0;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("mouseover", function () {
  goRandom();
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Finally!! :)";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function goRandom() {
  noButton.style.top = randomInteger(1, winHeight) + "px";
  noButton.style.left = randomInteger(1, winWidth) + "px";
}


function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

