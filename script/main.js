const container = document.getElementById("main-container");

function makeRows(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < rows*cols; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows (16,16);