const pad = document.querySelector("#container");

let dimension = 5;

let padWidth = 500;
let padHeight = 500;

pad.setAttribute("style", `height: ${padHeight}px; width: ${padWidth}px`);


for(let i = 0; i < dimension*dimension; i++){
    const gridbox = document.createElement("div");
    gridbox.setAttribute("style", `height: ${padHeight/dimension}px; width: ${padWidth/dimension}px`);
    gridbox.classList.add("gridbox");
    pad.appendChild(gridbox);
    console.log("Appended " + i);
}