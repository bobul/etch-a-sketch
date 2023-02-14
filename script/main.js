const container = document.getElementById("main-container");

function makeRows(value){
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${value},1fr)`
    container.style.gridTemplateRows = `repeat(${value},1fr)`
    for (let i = 0; i < value*value; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cellDiv");
        cell.style.border = "0.5px solid rgb(200,200,200)";
        container.appendChild(cell);
    }
}

makeRows (16);
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));


const cells = document.getElementsByClassName("cellDiv");
Array.from(cells).forEach(function(cell){
    cell.addEventListener('mouseover', function() {
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        cell.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
)});

// cell.style.backgroundColor = `rgb(${r},${g},${b})`;