const container = document.getElementById("main-container");
const rangeController = document.getElementById("range");
let rangeValue = rangeController.value;
const buttonChange = document.getElementById("btn-change");
const cells = document.getElementsByClassName("cellDiv");
const buttonClear = document.getElementById("btn-clear");
const buttonBlack = document.getElementById("btn-black");
const buttonRgb = document.getElementById("btn-rgb");
const defaultCell = 16;

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

drawDefault();

function drawBlack(){
    Array.from(cells).forEach(function(cell){
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = `black`;
        }
    )});
}

function drawRgb(){
    Array.from(cells).forEach(function(cell){
        cell.addEventListener('mouseover', function() {
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            cell.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
    )});
}

function makeRows(rangeValue){
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${rangeValue},1fr)`
    container.style.gridTemplateRows = `repeat(${rangeValue},1fr)`
    for (let i = 0; i < rangeValue*rangeValue; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cellDiv");
        cell.style.border = "0.5px solid rgba(0,0,0,0.1)";
        container.appendChild(cell);
    }
};

function drawDefault(){
    makeRows(defaultCell);
    drawCell();
}

function drawCell(){
    Array.from(cells).forEach(function(cell){
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = `black`;
        }
    )});
}


function remove(){
    while(container.firstChild){
        container.removeChild(container.lastChild); 
    }
    makeRows(rangeValue);
    drawCell();
}

rangeController.addEventListener("input", function(e){
    rangeValue = e.target.value;
});

buttonClear.addEventListener('click', () => remove());
buttonChange.addEventListener('click', () => remove());
buttonBlack.addEventListener('click', drawBlack);
buttonRgb.addEventListener('click', drawRgb);



// cell.style.backgroundColor = `rgb(${r},${g},${b})`;