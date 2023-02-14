let color = "black";
let click = false;

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
    if (input <= 100 && input >= 2) {
        populateGrid(input)
    } else {
        const container = document.querySelector('.gridContainer'); 
        let squares = container.querySelectorAll('div');
        squares.forEach((div) => div.remove());
        container.classList.replace('gridContainer', 'gridContainer2');
        const error = document.createElement('div');
        error.classList.add('error');
        error.textContent = "Enter value between 2-100";
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
    if (click === true) {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}
 
function toggleLines() {
    let container = document.querySelector('.gridContainer');
    let lines = container.querySelectorAll('div');
    lines.forEach((div) => div.classList.toggle("toggleLines"));
}

function clearGrid() {
    let container = document.querySelector('.gridContainer');
    let whiteSquares = container.querySelectorAll('div');
    whiteSquares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector('.gridContainer').addEventListener("click", () => {
    click = !click
});