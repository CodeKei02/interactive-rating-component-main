'use strict';
let listaNumbers = document.querySelector('#hero-list');
let number = document.querySelector('.number');

let submit = document.querySelector('.hero-submit');
let rating = document.querySelector('.hero-container');
let thanks = document.querySelector('.thanks');

listaNumbers.addEventListener('click', (event) => {
    let numberSelected = event.target.innerText;
    number.innerText = numberSelected;
    if(numberSelected > 0 || numberSelected <= 5){
        submit.addEventListener('click', () =>{
            rating.style.display = 'none';
            thanks.style.display = 'block';
        });
    }
});

