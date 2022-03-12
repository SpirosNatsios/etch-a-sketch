const square = document.createElement("div");
const helpDiv = document.createElement("div");
const container = document.querySelector(".main-container");
const sqrButton = document.querySelector(".squares-button");

let selection = 16;

getGrid(selection);
sqrButton.addEventListener("click", changeGrid);

function getGrid(selection) {
  square.setAttribute("id", "square");
  square.setAttribute(
    "style",
    `width:${600 / selection}px;
   height:${600 / selection}px;
   border: 1px solid black;`
  );

  for (let i = 0; i < selection; i++) {
    helpDiv.appendChild(square.cloneNode(true));
  }
  for (let i = 0; i < selection; i++) {
    container.appendChild(helpDiv.cloneNode(true));
  }
  mouseOver();
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
  selection = parseInt(prompt("Choose number of squares per side (Max 100)"));

  while (selection > 100 || selection < 0) {
    selection = parseInt(prompt("Out of limits. Choose again (0-100)"));
  }

  emptyGrid();
  getGrid(selection);
}

function mouseOver() {
  let squares = document.querySelectorAll("#square");

  squares.forEach((square) =>
    square.addEventListener("mouseover", changeColor)
  );
}

function changeColor(e) {
  let gridSquare = e.target;
  gridSquare.classList.add("test");
}
