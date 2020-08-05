let number;
let enable = false;
const messages = document.querySelector('#messages');
const btnTry = document.querySelector('#btnTry');
const btnPlayAgain = document.querySelector('#btnPlayAgain');
const input = document.getElementsByName('number')[0];

document.addEventListener('DOMContentLoaded', () => {
    number = Math.ceil((Math.random() * 100 + 1))
    messages.textContent = 'Choosing a number...';
    setTimeout(function() {
        messages.textContent = 'Number Choosed, Guess what'; 
        btnTry.disabled = false; 
        input.disabled = false
    }, 5 * 1000);
})

function win(){
    input.disabled = true;
    btnTry.disabled = true;
    btnPlayAgain.style.visibility = 'visible';
    return 'YOU ARE RIGHT, THAT\'S THE NUMBER';
} 

function checkNumber(num){
    const guesses = document.querySelector('#guessesNumbers');
    guesses.textContent += ' ' + num;
    return num > number ? 'The right number is Lower' : num === number ? win() : 'The right number is Higher';
}

btnTry.addEventListener('click', () => {
    let num = input.value;
    number = 50;
    messages.textContent = checkNumber(parseInt(num));
})

btnPlayAgain.addEventListener('click', () => {document.location.reload(true)})

