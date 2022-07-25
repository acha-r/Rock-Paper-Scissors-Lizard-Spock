const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice //.innerHTML is needed to link the variable to the html element it represents. in this case "your choice"
    generateComputerChoice()
    getResult()
}))

//Math.floor rounds down to the nearest whole number(this is the whole number before the decimal i.e 4.9 = 4) 
//Math.random generates random numbers between 0 and 1 but does not include 1. If you want to increase the range, add *n (where n is a number)

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) //OR instead of 5, I can say possibleChoices.length

    switch (randomNumber) {
        case 0: computerChoice = "rock";
            break;
        case 1: computerChoice = "paper";
            break;
        case 2: computerChoice = "scissors";
            break;
        case 3: computerChoice = "lizard";
            break;
        case 4: computerChoice = "spock"

    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    }
    else if (computerChoice === "scissors") {
        if (userChoice === "paper" || userChoice === "lizard") result = "You lose!";
        else result = "You win!";
    }
    else if (computerChoice === "rock") {
        if (userChoice === "scissors" || userChoice === "lizard") result = "You lose!";
        else result = "You win!";
    }
    else if (computerChoice === "paper") {
        if (userChoice === "rock" || userChoice === "spock") result = "Your lose!";
        else result = "You win!";
    }
    else if (computerChoice === "lizard") {
        if (userChoice === "spock" || userChoice === "paper") result = "You lose!";
        else result = "You win!"
    }
    else if (computerChoice === "spock") {
        if (userChoice === "scissors" || userChoice === "rock") result = "You lose!";
        else result = "You win!"
    }

    resultDisplay.innerHTML = result; 
}