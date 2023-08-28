let body = document.querySelector('body'),
    h1 = document.createElement('h1'),
    main = document.createElement('main'),
    button = document.createElement('button'),
    button2 = document.createElement('button'),
    sideLength = 0,
    mainHight = main.style.height = '964px';
    mainWidth = main.style.width = mainHight,
    mainHeightDigit = '',
    mainWidthDigit = '',
    divsNumber = 0,
    colorNumber1 = 0,
    colorNumber2 = 0,
    colorNumber3 = 0,
    transparencyMin = 0.1,
    transparencyDecreasingRate = 0.1,
    clicks = 0;
    // divHeight = div.style.height;
    // divWidth = div.style.width;

    body.appendChild(h1);
    h1.textContent += 'Etch-a-Sketch';
    h1.style.color = 'orange';
    h1.style.fontSize = '50px';
    h1.style.margin = '10px 0 0 0';

    body.appendChild(button);
    button.textContent += 'Set length of a side';
    body.appendChild(main);
    
    body.appendChild(button2);
    button2.textContent += 'Refresh';
    button2.classList.add('button2');
    body.appendChild(main); 

    main.style.border = '1px solid orange';
    main.style.outline = '3px solid orange';

button2.addEventListener('click', () => {
    location.reload();
})

button.addEventListener('click', () => {
    removeAllChildNodes(main);
    toSetField();
    
});


function toChangeHoverColor(item) {

        colorNumber1 = Math.floor(Math.random() * 300) + 1;
        colorNumber2 = Math.floor(Math.random() * 100) + 1;
        colorNumber3 = Math.floor(Math.random() * 100) + 1;

        item.style.backgroundColor = `hsla(${colorNumber1}, ${colorNumber2}%, ${colorNumber3}%, ${transparencyDecreasingRate+= 0.1})`;
};


function toSetField(sideLength) {

sideLength = prompt('Type the length of a side you want:');

if (sideLength > 100) {
    sideLength = prompt('The length has to be less than 100px. Type the length of a side once more:')
}

sideLength = parseInt(sideLength);
mainHeightDigit = mainHight.substring(0, 3);
mainHeightDigit = parseInt(mainHeightDigit);
mainWidthDigit = parseInt(mainHeightDigit);
divsNumber = sideLength * sideLength;

for (let i = 0; i < divsNumber; i++) {
    div = document.createElement('div');
    div.style.height = mainHeightDigit / sideLength - 2.5 + 'px';
    div.style.width = mainWidthDigit / sideLength - 2.5  + 'px';
    main.appendChild(div);
}; 

let divs = document.querySelectorAll('div');

divs.forEach((item) => {
    click = 0; 
    item.addEventListener('mouseover', (e) => {  
        toChangeHoverColor(item);        
    });
    
    
});

};

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
} 


    
// sideLength = parseInt(sideLength);
// mainHeightDigit = mainHight.substring(0, 3);
// mainHeightDigit = parseInt(mainHeightDigit);
// divsNumber = sideLength * sideLength;

    
 


