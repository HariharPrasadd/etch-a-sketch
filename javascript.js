const pad = document.querySelector("#container");
const slider = document.querySelector(".slider");
const displayDimensions = document.querySelector(".dimensions");

let dimension = slider.value;

displayDimensions.textContent = `${dimension} × ${dimension}`;

let padWidth = 600;
let padHeight = 600;

pad.setAttribute("style", `height: ${padHeight}px; width: ${padWidth}px`);


for(let i = 0; i < dimension*dimension; i++){
    const gridbox = document.createElement("div");
    gridbox.setAttribute("style", 
        `height: ${padHeight/dimension}px; 
        width: ${padWidth/dimension}px;`);
    gridbox.classList.add("gridbox");
    gridbox.addEventListener("mouseenter", (e) => {normalMouseEnter(e)});
    pad.appendChild(gridbox);
}

function normalMouseEnter(event){
    event.target.style.backgroundColor = "black";
}

slider.oninput = function() {
    dimension = this.value;
    displayDimensions.textContent = `${dimension} × ${dimension}`;

    pad.textContent = '';

    for(let i = 0; i < dimension*dimension; i++){
        const gridbox = document.createElement("div");
        gridbox.setAttribute("style", `height: ${padHeight/dimension}px; width: ${padWidth/dimension}px`);
        gridbox.classList.add("gridbox");
        gridbox.addEventListener("mouseenter", (e) => {normalMouseEnter(e)});
        pad.appendChild(gridbox);
    }
}
 