let body = document.querySelector('body'),
    main = document.createElement('main'),
    button = document.createElement('button'),
    button2 = document.createElement('button'),
    sideLength = 0,
    mainHight = main.style.height = '960px';
    mainWidth = main.style.width = mainHight,
    mainHeightDigit = '',
    divsNumber = 0;
    // divHeight = div.style.height;
    // divWidth = div.style.width;

    body.appendChild(button);
    button.textContent += 'Set length of a side';
    body.appendChild(main);
    
    body.appendChild(button2);
    button2.textContent += 'Refresh';
    button2.classList.add('button2');
    body.appendChild(main); 

button2.addEventListener('click', () => {
    location.reload();
})

button.addEventListener('click', () => {
    if (sideLength == 0) {
        toSetField();
    } else {
        location.reload(); 
    }
});





function toSetField(sideLength) {

sideLength = prompt('Type the length of a side you want:');
sideLength = parseInt(sideLength);
mainHeightDigit = mainHight.substring(0, 3);
mainHeightDigit = parseInt(mainHeightDigit);
divsNumber = sideLength * sideLength;

for (let i = 0; i < divsNumber; i++) {
    div = document.createElement('div');
    div.style.height = mainHeightDigit / sideLength + 'px';
    div.style.width = mainHeightDigit / sideLength + 'px';
    main.appendChild(div);
    
}; 

let divs = document.querySelectorAll('div');

divs.forEach((item) => {
   
    item.addEventListener('mouseover', () => {
        item.classList.add('hovering');
    });
});

};


    
// sideLength = parseInt(sideLength);
// mainHeightDigit = mainHight.substring(0, 3);
// mainHeightDigit = parseInt(mainHeightDigit);
// divsNumber = sideLength * sideLength;

    
 


