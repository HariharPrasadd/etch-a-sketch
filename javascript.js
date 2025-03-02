const pad = document.querySelector("#container");
const slider = document.querySelector(".slider");
const displayDimensions = document.querySelector(".dimensions");

let dimension = slider.value;

displayDimensions.textContent = dimension;

let padWidth = 500;
let padHeight = 500;

pad.setAttribute("style", `height: ${padHeight}px; width: ${padWidth}px`);


for(let i = 0; i < dimension*dimension; i++){
    const gridbox = document.createElement("div");
    gridbox.setAttribute("style", `height: ${padHeight/dimension}px; width: ${padWidth/dimension}px`);
    gridbox.classList.add("gridbox");
    pad.appendChild(gridbox);
}

slider.oninput = function() {
    dimension = this.value;
    displayDimensions.textContent = dimension;

    pad.textContent = '';

    for(let i = 0; i < dimension*dimension; i++){
        const gridbox = document.createElement("div");
        gridbox.setAttribute("style", `height: ${padHeight/dimension}px; width: ${padWidth/dimension}px`);
        gridbox.classList.add("gridbox");
        pad.appendChild(gridbox);
    }
}
