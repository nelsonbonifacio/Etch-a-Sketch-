const container = document.querySelector('.container');
let boxes;


const grid = function (num) {
    for (i = 1; i <= (num ? (num * num) : 256); i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.setAttribute('style', 'border:1px solid black')
        container.append(div);
        boxes = document.querySelectorAll('.box');
    }
}
grid();

const removeChild = function () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function colorOnTouch() {
    for (const box of boxes) {
        box.addEventListener('mouseenter', (e) => {
            console.log(e);
            e.target.style.backgroundColor = randomColor();
        })
    }
}
colorOnTouch();

const randomColor = function (e) {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
}

const button = document.querySelector('button');
button.addEventListener('click', changeGrid)

// button.addEventListener('click', function())

function changeGrid() {
    const gridNumber = parseInt(prompt("what number of squares per side do you want? max:100", 10))
    removeChild();
    grid(gridNumber);
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    colorOnTouch();
}
