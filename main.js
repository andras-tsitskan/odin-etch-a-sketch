"use strict";

// Set initial (default) values.

let customSize = 16;
let colourScheme = "black";
let isInputCorrect = true;
const grid = document.querySelector(".grid");
let gridItems = document.querySelectorAll(".grid-item");

// Populating grid with grid items functionality.

function createGridItems(squaresPerSide) {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    grid.appendChild(newGridItem);
  }
}

// Colouring functionality.

function addHoverColouring() {
  gridItems = document.querySelectorAll(".grid-item");

  switch (colourScheme) {
    case "black":
      for (const item of gridItems) {
        item.addEventListener("mouseenter", changeColorToBlack);
      }
      break;
    case "colourful":
      for (const item of gridItems) {
        item.addEventListener("mouseenter", changeColorToColorful);
      }
      break;
    case "gray":
      for (const item of gridItems) {
        item.addEventListener("mouseenter", changeColorToShadesOfGray);
      }
      break;
  }
}

function changeColorToBlack(e) {
  e.target.style.backgroundColor = "black";
}

function changeColorToColorful(e) {
  let redRGB = Math.round(Math.random() * 255);
  let greenRGB = Math.round(Math.random() * 255);
  let blueRGB = Math.round(Math.random() * 255);
  e.target.style.backgroundColor = `rgb(${redRGB},${greenRGB},${blueRGB})`;
}

function changeColorToShadesOfGray(e) {
  if (e.target.style.opacity === "") {
    e.target.style.opacity = 1;
  }
  e.target.style.opacity = +e.target.style.opacity - 0.1;
}

// Change-colour-buttons' functionality.

const colourSchemeBlackBtn = document.querySelector("#js-colour-scheme-black");
const colourSchemeColourfulBtn = document.querySelector(
  "#js-colour-scheme-colourful"
);
const colourSchemeGrayBtn = document.querySelector("#js-colour-scheme-gray");

colourSchemeBlackBtn.addEventListener("click", (e) => {
  colourScheme = "black";
  e.target.classList.add("button-toggled");
  colourSchemeColourfulBtn.classList.remove("button-toggled");
  colourSchemeGrayBtn.classList.remove("button-toggled");
  removeGrid();
  createGridItems(customSize);
  addHoverColouring();
});

colourSchemeColourfulBtn.addEventListener("click", (e) => {
  colourScheme = "colourful";
  e.target.classList.add("button-toggled");
  colourSchemeBlackBtn.classList.remove("button-toggled");
  colourSchemeGrayBtn.classList.remove("button-toggled");
  removeGrid();
  createGridItems(customSize);
  addHoverColouring();
});

colourSchemeGrayBtn.addEventListener("click", (e) => {
  colourScheme = "gray";
  e.target.classList.add("button-toggled");
  colourSchemeBlackBtn.classList.remove("button-toggled");
  colourSchemeColourfulBtn.classList.remove("button-toggled");
  removeGrid();
  createGridItems(customSize);
  addHoverColouring();
});

// Create initial grid.

function createInitialGrid() {
  createGridItems(customSize);
  colourSchemeBlackBtn.classList.add("button-toggled");
  addHoverColouring();
}

createInitialGrid();

// Custom grid functionality.

const customGridBtn = document.querySelector("#js-custom-grid-button");

customGridBtn.addEventListener("click", createCustomGrid);

function createCustomGrid() {
  getCustomGridSize();
  if (isInputCorrect === false) {
    isInputCorrect = true; // Otherwise, once inserted wrong input, next correct input is treated as wrong input.
  } else {
    removeGrid();
    grid.style.gridTemplateColumns = `repeat(${customSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${customSize}, 1fr)`;
    createGridItems(customSize);
    addHoverColouring();
  }
}

function getCustomGridSize() {
  let tempCustomSize = customSize; // Necessary for the prompt not to mess with the value.
  customSize = prompt("How many squares per side? Max is 100.");
  if (customSize < 1 || customSize > 100 || isNaN(customSize)) {
    alert("Wrong input.");
    isInputCorrect = false;
    customSize = tempCustomSize; // customSize equals its value before prompt.
  } else {
    customSize = Math.floor(customSize);
    return customSize;
  }
}

// Remove grid functionality.

function removeGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

// Clear grid functionality.

const clearGridBtn = document.querySelector("#js-clear-grid-button");

clearGridBtn.addEventListener("click", clearGrid);

function clearGrid() {
  for (const item of gridItems) {
    item.style.backgroundColor = "white";
    item.style.opacity = 1;
  }
}

// Reset to default functionality.

const resetToDefaultBtn = document.querySelector("#js-reset-to-default-button");

resetToDefaultBtn.addEventListener("click", resetToDefault);

function resetToDefault() {
  customSize = 16;
  colourScheme = "black";
  colourSchemeBlackBtn.classList.add("button-toggled");
  colourSchemeColourfulBtn.classList.remove("button-toggled");
  colourSchemeGrayBtn.classList.remove("button-toggled");
  removeGrid();
  grid.style.gridTemplateColumns = `repeat(${customSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${customSize}, 1fr)`;
  createGridItems(customSize);
  addHoverColouring();
}
