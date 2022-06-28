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
