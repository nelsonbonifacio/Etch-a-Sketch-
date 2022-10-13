const container = document.querySelector('.container');

for (i = 1; i <= 256; i++) {
    let div = document.createElement('div');
    div.setAttribute('style', 'width:20px; height:20px; background-color:red')
    container.append(div);
} 