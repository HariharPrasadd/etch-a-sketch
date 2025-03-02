const pad = document.querySelector("#container");
const slider = document.querySelector(".slider");
const displayDimensions = document.querySelector(".dimensions");
const shadingButton = document.querySelector("#shadingButton");
const rainbowButton = document.querySelector("#rainbowButton");
const paintButton = document.querySelector("#clickOrHover");
const borderButton = document.querySelector("#borders");

let shading = false;
let rainbow = false;
let click = false;
let isMouseDown = false;
let borders = true;

function getRandomColor(opac) { 
    return "rgb(" + Math.floor(Math.random() * 255) + "," 
                + Math.floor(Math.random() * 255) + "," 
                + Math.floor(Math.random() * 255) + ","
                + opac + ")"; 
}

function mouseEnter(event){
    if(rainbow){
        if(shading){
            event.target.style.backgroundColor = getRandomColor(event.target.opacity);
            event.target.opacity += 0.1;
        }
        else{
            event.target.style.backgroundColor = getRandomColor(1);
        }
    }
    else{
        if(shading){
            event.target.style.backgroundColor = `rgb(0, 0, 0, ${event.target.opacity})`;
            event.target.opacity += 0.1;
        }
        else{
            event.target.style.backgroundColor = "black";
        }
    }
}

document.addEventListener("mousedown", () => {isMouseDown = true;});
document.addEventListener("mouseup", () => {isMouseDown = false;});

rainbowButton.addEventListener("click", () => {
    rainbow ? rainbowButton.textContent = "Rainbow OFF" : rainbowButton.textContent = "Rainbow ON";
    rainbow = !rainbow;
    pad.textContent = '';
    generateGrid();
});

shadingButton.addEventListener("click", () => {
    shading ? shadingButton.textContent = "Shading OFF" : shadingButton.textContent = "Shading ON";
    shading = !shading;
    pad.textContent = '';
    generateGrid();
});

paintButton.addEventListener("click", () => {
    click ? paintButton.textContent = "Click to Paint" : paintButton.textContent = "Hover to Paint";
    click = !click;
    pad.textContent = '';
    generateGrid();
});

borderButton.addEventListener("click", () => {
    borders ? borderButton.textContent = "Borders OFF" : borderButton.textContent = "Borders ON";
    if(borders){
        document.documentElement.style.setProperty('--gridbox-thickness', `0px`);
        document.documentElement.style.setProperty('--container-thickness', `1px`);
    }
    else{
        document.documentElement.style.setProperty('--gridbox-thickness', `1px`);
        document.documentElement.style.setProperty('--container-thickness', `0px`);
    }
    borders = !borders;
    pad.textContent = '';
    generateGrid();
});

let dimension = slider.value;

displayDimensions.textContent = `${dimension} × ${dimension}`;

let padWidth = 600;
let padHeight = 600;

pad.setAttribute("style", `height: ${padHeight}px; width: ${padWidth}px`);

function generateGrid(){
    for(let i = 0; i < dimension*dimension; i++){
        const gridbox = document.createElement("div");
        gridbox.opacity = 0.1;
        gridbox.setAttribute("style", 
            `height: ${padHeight/dimension}px; 
            width: ${padWidth/dimension}px;`);
        gridbox.classList.add("gridbox");
        gridbox.addEventListener("mouseenter", click ? (e) => {if(isMouseDown){mouseEnter(e)}} : (e) => {mouseEnter(e)});
        pad.appendChild(gridbox);
    }    
}

generateGrid();

slider.oninput = function() {
    dimension = this.value;
    displayDimensions.textContent = `${dimension} × ${dimension}`;

    pad.textContent = '';

    generateGrid();
}
 