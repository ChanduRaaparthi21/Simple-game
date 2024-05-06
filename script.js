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

function updateGameState(playerChoice, computerChoice) {
  playerChoiceElement.style.backgroundImage = `url(images/${playerChoice}.png)`;
  computerChoiceElement.style.backgroundImage = `url(images/${computerChoice}.png)`;

  const winner = determineWinner(playerChoice, computerChoice);
  resultTextElement.textContent = winner;

  if (winner === 'You win!') {
    playerScore++;
    playerScoreElement.textContent = playerScore;
  } else if (winner === 'Computer wins!') {
    computerScore++;
    computerScoreElement.textContent = computerScore;
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