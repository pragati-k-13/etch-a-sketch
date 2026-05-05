const grid = document.querySelector("#grid");

function createGrid(numberOfDivs) {
  // Create rows
  for (let i = 0; i <= numberOfDivs; i++) {
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
