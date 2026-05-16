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
      htmlContent += `<div class="grid-div" data-bg-color="hsl(${Math.random() * 360},60%,40%)"></div>`;
    }
    gridRow.innerHTML = htmlContent;
    grid.appendChild(gridRow);
  }
}

createGrid(4);

const eachDiv = document.querySelectorAll(".grid-div");
for (let i = 0; i < eachDiv.length; i++) {
  eachDiv[i].style.backgroundColor = eachDiv[i].dataset.bgColor;
  eachDiv[i].addEventListener("mouseenter", () => {
    let currentOpacity = parseFloat(eachDiv[i].style.opacity) || 0.1;
    if (currentOpacity < 1) {
      eachDiv[i].style.opacity = currentOpacity + 0.1;
    }
  });
}

button.addEventListener("click", () => {
  let size = prompt("How many boxes per side?");

  if (size === null) {
    return;
  } else if (size == 0) {
    alert("Number cannot be 0! Try again with a number between 1 and 100.");
  } else if (size > 100) {
    alert("Number cannot be more than 100!");
  } else {
    grid.replaceChildren();
    createGrid(size);

    const eachDiv = document.querySelectorAll(".grid-div");
    for (let i = 0; i < eachDiv.length; i++) {
      eachDiv[i].style.backgroundColor = eachDiv[i].dataset.bgColor;
      eachDiv[i].addEventListener("mouseenter", () => {
        let currentOpacity = parseFloat(eachDiv[i].style.opacity) || 0.1;
        if (currentOpacity < 1) {
          eachDiv[i].style.opacity = currentOpacity + 0.1;
        }
      });
    }
  }
});
