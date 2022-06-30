"use strict";

const grid = document.querySelector(".grid");

function createGridItems(squaresPerSide) {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    grid.appendChild(newGridItem);
  }
}

// Create initial grid.
createGridItems(16);

// Colouring functionality.
let gridItems = document.querySelectorAll(".grid-item");

for (const item of gridItems) {
  item.addEventListener("mouseenter", changeColor);
}

function changeColor(e) {
  e.target.classList.add("grid-item-hovered");
}

// Custom grid functionality.
const customGridBtn = document.querySelector("#custom-grid-button");

customGridBtn.addEventListener("click", createCustomGrid);

function createCustomGrid() {
  getCustomGridSize();
  removeGrid();
  grid.style.gridTemplateColumns = `repeat(${customSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${customSize}, 1fr)`;
  createGridItems(customSize);
  addHoverColoring();
}

let customSize;

function getCustomGridSize() {
  customSize = prompt("How many squares per side? Max is 100.");
  if (customSize < 1 || customSize > 100 || isNaN(customSize)) {
    alert("Wrong input. Resetting to default.");
    customSize = 16;
    return customSize;
  } else {
    customSize = Math.floor(customSize);
    return customSize;
  }
}

function removeGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function addHoverColoring() {
  gridItems = document.querySelectorAll(".grid-item");
  for (const item of gridItems) {
    item.addEventListener("mouseenter", changeColor);
  }
}

// Clear grid functionality.
const clearGridBtn = document.querySelector("#clear-grid-button");

clearGridBtn.addEventListener("click", clearGrid);

function clearGrid() {
  for (const item of gridItems) {
    item.classList.remove("grid-item-hovered");
  }
}

// Not yet implemented different colours when hovering.
function rainbow() {
  let redRGB = Math.round(Math.random * 255);
  let greenRGB = Math.round(Math.random * 255);
  let blueRGB = Math.round(Math.random * 255);
  style.backgroundColor = `rgb(${redRGB},${greenRGB},${blueRGB})`;
}
