"use strict";

const grid = document.querySelector(".grid");

function createGridItems(squaresPerSide) {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    grid.appendChild(newGridItem);
  }
}

createGridItems(16);

const gridItems = document.querySelectorAll(".grid-item");

for (const item of gridItems) {
  item.addEventListener("mouseenter", changeColor);
}

function changeColor(e) {
  e.target.classList.add("grid-item-hovered");
}

// function getGridItemWidth(){
//     document.body.clientWidth
// }

const customGridBtn = document.querySelector("#custom-grid-button");

customGridBtn.addEventListener("click", getCustomGridSize);

function getCustomGridSize() {
  let customSize = prompt("How many squares per side? Max is 100.");
  if (customSize < 1 || customSize > 100 || isNaN(customSize)) {
    alert("Wrong input.");
  } else {
    // console.log(Math.floor(customSize));
    return Math.floor(customSize);
  }
}
