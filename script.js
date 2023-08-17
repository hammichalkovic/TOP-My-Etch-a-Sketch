let body = document.querySelector('body'),
    main = document.createElement('main');

body.appendChild(main);    
    
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    main.appendChild(div);
}

let divs = document.querySelectorAll('div');

divs.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hovering');
});
});
