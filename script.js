let color = "black";

populateGrid(16);

function populateGrid(size) {
    const container = document.querySelector('.gridContainer');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i = 0; i < size*size; i++) {
        const box = document.createElement('div');
        box.addEventListener("mousemove", colourSquare);
        box.classList.add('box');
        container.appendChild(box)
}
}

function changeSize(input) {
    if (input <= 100) {
        populateGrid(input)
    } else {
        const container = document.querySelector('.gridContainer'); 
        let squares = container.querySelectorAll('div');
        squares.forEach((div) => div.remove());
        container.classList.replace('gridContainer', 'gridContainer2');
        const error = document.createElement('div');
        error.classList.add('error');
        error.textContent = "Error! Invalid grid size!";
        container.appendChild(error)
        setTimeout(function(){
            const container2 = document.querySelector('.gridContainer2');
            container2.classList.replace('gridContainer2', 'gridContainer');
            error.remove();
            changeSize(16);
        }, 2000);

    }
}

function colourSquare() {
    this.style.backgroundColor = color;
}
 
function toggleLines() {
    let container = document.querySelector('.gridContainer');
    let lines = container.querySelectorAll('div');
    lines.forEach((div) => div.classList.toggle("toggleLines"));
}
