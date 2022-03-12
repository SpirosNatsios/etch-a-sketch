function main() {
  sqrButton.addEventListener("click", changeGrid);
}

function changeGrid(selection) {
  selection = parseInt(prompt("Choose number of squares per side (Max 100)"));

  while (selection > 100 || selection < 0) {
    selection = parseInt(prompt("Out of limits. Choose again (0-100)"));
  }

  emptyGrid();
  getGrid(selection);
}

function getGrid(selection) {
  console.log(selection);
  square.setAttribute(
    "style",
    `width:${600 / selection - 2}px;
   height:${600 / selection - 2}px;
   border: 1px solid black;`
  );

  for (let i = 0; i < selection; i++) {
    helpDiv.appendChild(square.cloneNode(true));
  }
  for (let i = 0; i < selection; i++) {
    container.appendChild(helpDiv.cloneNode(true));
  }
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

const square = document.createElement("div");
const helpDiv = document.createElement("div");
const container = document.querySelector(".main-container");
const sqrButton = document.querySelector(".squares-button");

let selection = 16;
getGrid(selection);
main(selection);
