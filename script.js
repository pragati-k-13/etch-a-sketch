const grid = document.querySelector("#grid");
const button = document.querySelector("button");

function createGrid(numberOfDivs) {
  // Create rows
  for (let i = 0; i < numberOfDivs; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");

    // Create divs per row
    let htmlContent = "";
    for (let i = 0; i < numberOfDivs; i++) {
      htmlContent += `<div class="grid-div"></div>`;
    }
    gridRow.innerHTML = htmlContent;
    grid.appendChild(gridRow);
  }
}

createGrid(4);

button.addEventListener("click", () => {
  let size = prompt("How many boxes per side?");

  if (size > 100) {
    alert("Number cannot be more than 100!");
  } else {
    grid.replaceChildren();
    createGrid(size);
  }
});
