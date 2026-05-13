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

// Random colours on hover
const eachDiv = document.querySelectorAll(".grid-div");
for (let i = 0; i <= eachDiv.length; i++) {
  eachDiv[i].addEventListener("mouseenter", () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 255).toString()}, 50%, 90%)`;
    eachDiv[i].style.backgroundColor = randomColor;
  });

  eachDiv[i].addEventListener("mouseleave", () => {
    eachDiv[i].style.backgroundColor = "#ffffff";
  });
}

button.addEventListener("click", () => {
  let size = prompt("How many boxes per side?");

  if (size > 100) {
    alert("Number cannot be more than 100!");
  } else {
    grid.replaceChildren();
    createGrid(size);
  }
});
