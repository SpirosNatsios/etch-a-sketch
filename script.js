const square = document.createElement("div");
const helpDiv = document.createElement("div");
const container = document.querySelector(".grid-container");
const sqrButton = document.querySelector("#change-button");
const rgbButton = document.querySelector("#rgb");
const clearButton = document.querySelector("#clear");

let selection = 16;

getGrid(selection);
sqrButton.addEventListener("click", changeGrid);

function getGrid(selection) {
  square.setAttribute("id", "square");
  square.setAttribute(
    "style",
    `width:${500 / selection}px;
   height:${500 / selection}px;
   
   `
  );

  for (let i = 0; i < selection; i++) {
    helpDiv.appendChild(square.cloneNode(true));
  }
  for (let i = 0; i < selection; i++) {
    container.appendChild(helpDiv.cloneNode(true));
  }
  mouseOver();
  clearGrid(selection);
}

function emptyGrid() {
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }

  child = helpDiv.lastElementChild;
  while (child) {
    helpDiv.removeChild(child);
    child = helpDiv.lastElementChild;
  }
}

function changeGrid(selection) {
  console.log(selection);
  selection = parseInt(prompt("Choose number of squares per side (Max 100)"));

  while (selection > 100 || selection < 0) {
    selection = parseInt(prompt("Out of limits. Choose again (0-100)"));
  }
  if (isNaN(selection)) return;

  emptyGrid();
  getGrid(selection);
}

function mouseOver() {
  let squares = document.querySelectorAll("#square");

  squares.forEach((square) =>
    square.addEventListener("mouseover", changeColor)
  );
}

function generateRandomColor() {
  let maxVal = 16777215;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

function changeColor(e) {
  let gridSquare = e.target;
  rgbButton.addEventListener("click", transformButton);
  if (rgbButton.textContent == "RGB") {
    gridSquare.style.cssText += "background-color: black;";
  } else {
    gridSquare.style.cssText += `background-color: ${generateRandomColor()};`;
  }
}

function transformButton(e) {
  if (e.target.textContent == "RGB") {
    e.target.textContent = "Black";
    return;
  }
  if (e.target.textContent == "Black") {
    e.target.textContent = "RGB";
    return;
  }
}

function clearGrid(selection) {
  clearButton.addEventListener("click", () => {
    emptyGrid();
    getGrid(selection);
  });
}
