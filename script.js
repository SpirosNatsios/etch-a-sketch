const square = document.createElement("div");
const helpDiv = document.createElement("div");
const container = document.querySelector(".main-container");
//square.classList.add("squares");
let selection = 16;

// square.style.cssText = `width:"${480 / selection - 2}"`;
// square.style.cssText = `height:${480 / selection - 2}`;

square.setAttribute(
  "style",
  `width:${540 / selection - 2}px;
   height:${540 / selection - 2}px;
   border: 1px solid black;`
);

for (let i = 0; i < selection; i++) {
  helpDiv.appendChild(square.cloneNode(true));
}
for (let i = 0; i < selection; i++) {
  container.appendChild(helpDiv.cloneNode(true));
}
