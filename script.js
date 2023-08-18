let body = document.querySelector('body'),
    main = document.createElement('main'),
    sideLength = 0,
    mainHight = main.style.height = '960px';
    mainWidth = main.style.width = mainHight,
    mainHeightDigit = '',
    divsNumber = 0;
    // divHeight = div.style.height;
    // divWidth = div.style.width;

body.appendChild(main);   

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
