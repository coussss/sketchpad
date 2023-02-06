const container = document.querySelector('#gridContainer');

let a = 16

for (i = 0; i < a*a; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = "hi"
    container.appendChild(box)
}