function populateGrid(size) {
    let a = prompt("Please input size")

    const container = document.querySelector('#gridContainer');
    container.style.gridTemplateColumns = `repeat(${a}, 1fr)`
    container.style.gridTemplateRows = `repeat(${a}, 1fr)`



    for (i = 0; i < a*a; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box)
}
}



const button = document.getElementById("changeGrid");
button.addEventListener("click", populateGrid)