const container = document.querySelector('.container');


for (i = 1; i <= 256; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    div.setAttribute('style', 'border:1px solid black')
    container.append(div);
}

const boxes = document.querySelectorAll('.box');

for (const box of boxes) {
    box.addEventListener('mouseenter', (e) => {
        console.log(e);
        e.target.style.backgroundColor = randomColor();
    })
    box.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = 'white';
    })
}

function randomColor(e) {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
}
