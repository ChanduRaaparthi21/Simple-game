
var playerName = prompt("Enter your name:");
//scoringplayername
var playerHeader = document.getElementById("player-name");
playerHeader.textContent = playerName+"'s Score";

//starting player name
var h2 = document.createElement("h2");
h2.textContent = playerName;
var oldH2 = document.querySelector("h2");
oldH2.parentNode.replaceChild(h2, oldH2);


const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');

const resultTextElement = document.getElementById('result-text');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}


 // Define the point target
const POINT_TARGET = 20;

// Function to update game state
function updateGameState(playerChoice, computerChoice) {
    // playerChoiceElement.style.backgroundImage = `url(images/${playerChoice}.png)`;
    // computerChoiceElement.style.backgroundImage = `url(images/${computerChoice}.png)`;

    const winner = determineWinner(playerChoice, computerChoice);
    resultTextElement.textContent = winner;

    if (winner === 'You win!') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (winner === 'Computer wins!') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }

    // Check if either player has reached the point target
    if (playerScore === POINT_TARGET || computerScore === POINT_TARGET) {
        // Display a message declaring the winner
        if (playerScore === POINT_TARGET) {
            resultTextElement.textContent = `You wins the game! 🏆`;
        } else {
            resultTextElement.textContent = 'Computer wins the game!';
        }

        // Disable the buttons to prevent further gameplay after reach 20 points
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}
rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    updateGameState('rock', computerChoice);
});
paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    updateGameState('paper', computerChoice);
});
scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    updateGameState('scissors', computerChoice);
});

