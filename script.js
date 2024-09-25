// Declare scores
let humanScore = 0;
let computerScore = 0;

// Function to randomly choose between "rock", "paper", or "scissors" for the computer
function getComputerChoice() {
    const randomNumber = Math.random(); // Get a random number between 0 and 1
    if (randomNumber < 0.33) {
        return "rock"; // Less than 0.33 returns "rock"
    } else if (randomNumber < 0.66) {
        return "paper"; // Between 0.33 and 0.66 returns "paper"
    } else {
        return "scissors"; // Greater than 0.66 returns "scissors"
    }
}

// Function to play a single round of the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    // Check who wins each scenario
    if (humanChoice === "rock") {
        return computerChoice === "scissors" ? "You win! Rock beats Scissors." : "You lose! Paper beats Rock.";
    } else if (humanChoice === "paper") {
        return computerChoice === "rock" ? "You win! Paper beats Rock." : "You lose! Scissors beats Paper.";
    } else if (humanChoice === "scissors") {
        return computerChoice === "paper" ? "You win! Scissors beats Paper." : "You lose! Rock beats Scissors.";
    }
}

// Function to update the UI with results and scores
function updateUI(result) {
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');
    resultDiv.textContent = result;
    scoreDiv.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
}

// Function to handle button clicks and play the game
function handleUserChoice(humanChoice) {
    const computerChoice = getComputerChoice(); // Get the computer's random choice
    const result = playRound(humanChoice, computerChoice); // Play the round

    // Update scores based on result
    if (result.includes("win")) {
        humanScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    updateUI(result); // Update the UI with the result and scores
}

// Adding event listeners to buttons for user choices
document.getElementById('rock').addEventListener('click', () => handleUserChoice('rock'));
document.getElementById('paper').addEventListener('click', () => handleUserChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => handleUserChoice('scissors'));
