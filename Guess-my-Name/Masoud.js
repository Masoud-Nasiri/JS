'use strict';

let secretNumber = randomNumber();
let highestScore = getContent('highscore');
let currentScore = 20;

function randomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

function getContent(keyName) {
    const elementValue = document.querySelector(`.${keyName}`).value;
    const elementText = document.querySelector(`.${keyName}`).textContent;

    return elementValue === undefined ||
        (elementValue === '' && elementText !== '')
        ? elementText
        : elementValue;
}

function setContent(keyName, keyValue) {
    const elementValue = document.querySelector(`.${keyName}`).value;
    const elementText = document.querySelector(`.${keyName}`).textContent;

    if (
        elementValue === undefined ||
        (elementValue === '' && elementText !== '')
    ) {
        document.querySelector(`.${keyName}`).textContent = keyValue;
    } else {
        document.querySelector(`.${keyName}`).value = keyValue;
    }
}

document.querySelector('.check').addEventListener('click', function () {
    const inputNumber = Number(getContent('guess'));

    if (inputNumber < 1 || inputNumber > 20) {
        setContent('message', 'No valid number!');
    } else if (inputNumber === secretNumber) {
        highestScore = getContent('highscore');
        setContent('message', 'Yeah. You win');
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (currentScore > highestScore) {
            setContent('highscore', currentScore);
        }
    } else {
        if (currentScore <= 1) {
            setContent('message', 'You loose.');
            setContent('score', 0);
        } else {
            currentScore--;
            setContent('score', currentScore);
            setContent(
                'message',
                `Too ${inputNumber > secretNumber ? 'high' : 'low'}`
            );
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = randomNumber();
    currentScore = 20;
    setContent('score', 20);
    setContent('guess', '');
    setContent('message', 'Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
});
