let randomNumber = Math.floor(Math.random() * 100);
let guesses = 0;

const text = document.querySelector('.text');
const field = document.querySelector('.field');
const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
    field.value = '';
    field.style.display = 'block';
    text.textContent = '';
    guesses = 0;
    randomNumber = Math.floor(Math.random() * 100);
});

field.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        start();
    }
});

function start() {
    let inputNumber = +field.value;

    if(!validateInputValue(inputNumber)) {
        text.textContent = 'Your number is invalid';
        guesses++;
        clearField();
    }

    if(validateNumber(randomNumber, inputNumber)) {
        text.textContent = `Yep. You are win. Random number is ${randomNumber}. Guesses are ${guesses}`;
        field.style.display = 'none';
    }
}

function validateInputValue(value) {
    if(value < 0 || value > 100) {
        return false;
    } else if(isNaN(value)) {
        return false;
    } else if(value === '') {
        return false;
    }
    return true;
}

function validateNumber(random, number) {
    if(number < random) {
        text.textContent = 'Random number is more';
        guesses++;
        clearField();
        return false;
    } else if(number > random) {
        text.textContent = 'Random number is less';
        guesses++;
        clearField();
        return false;
    } else {
        return true;
    }
}

function clearField() {
    field.value = '';
}
