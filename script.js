let playerScoreEl = document.getElementById("playerScore")
let playerChoiceEl = document.getElementById("playerChoice")
let compScoreEl = document.getElementById("compScore")
let compChoiceEl = document.getElementById("compChoice")

let playerRock = document.getElementById("playerRock")
let playerPaper = document.getElementById("playerPaper")
let playerScissors = document.getElementById("playerScissors")

let compRock = document.getElementById("compRock")
let compPaper = document.getElementById("compPaper")
let compScissors = document.getElementById("compScissors")


let gameIcons = document.querySelectorAll(".far")



const choices = {
    rock: {
        name: 'Rock',
        defeats: 'scissors'
    },
    paper: {
        name: 'Paper',
        defeats: 'rock'
    },
    scissors: {
        name: 'Scissors',
        defeats: 'paper'

    },
};

let playerScoreNumber = 0;
let compScoreNumber = 0;
let compChoice = '';

function resetAll() {
    playerScoreNumber = 0;
    compScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    compScoreEl.textContent = compScoreNumber;
    playerChoiceEl.textContent = '';
    compChoiceEl.textContent = '';
    resultText.textContent = '';
    resetSelected();
}

function compRandomChoice() {
    const compChoiceNumber = Math.random();
    if (compChoiceNumber < 0.33) {
        compChoice = 'rock';

    } else if (compChoiceNumber <= 0.67) {
        compChoice = 'paper';
    } else if (compChoiceNumber <= 1) {
        compChoice = 'scissors';
    }
    
}

function displayCompChoice() {
    switch (compChoice) {
        case 'rock':
            compRock.classList.add('selected');
            break;
        case 'paper':
            compPaper.classList.add('selected');
            break;
        case 'scissors':
            compScissors.classList.add('selected');
            break;

        default:
            break;

    }
}

function updateScore(playerChoice) {
    
    if (playerChoice === compChoice) {
        resultText.textContent = "Lygiosios!"
    } else {
        let choice = choices[playerChoice];
        if (choice.defeats.indexOf(compChoice) > -1) {
            resultText.textContent = "Laimėjai!";
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber;
        } else {
            resultText.textContent = "Pralaimėjai!";
            compScoreNumber++;
            compScoreEl.textContent = compScoreNumber;
        }
    }
}

function resetSelected() {
    gameIcons.forEach((icon) => {
        icon.classList.remove('selected');
    });
}

function checkResult(playerChoice) {
    resetSelected();
    compRandomChoice();
    displayCompChoice();
    updateScore(playerChoice);

}

function select(playerChoice) {
    checkResult(playerChoice);

    
    switch (playerChoice) {
        case 'rock':
            playerRock.classList.add("selected");
            break;
        case 'paper':
            playerPaper.classList.add("selected");
            break;
        case 'scissors':
            playerScissors.classList.add("selected");
            break;
        default:
            break;
    }
}