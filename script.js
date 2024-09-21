// Made a script.js connected to my index.html.

// We will try to write a funtion named getComputerChoice. We want this function to randomly return one of the following string values: "rock", "paper", or "scissors".
// First we created a function and named it get ComputetChoice() to show it was the computers choice on the random number. We didn't put a argument in the () because it didn't have a specific input. In the function body we put constant variable named randomNumber and assigned it the the Math object with the .random method.
// After the randome number variable we created a if statement conditional. if random number was less than 0.3 return rock, else if random number was less than 0.6 return paper, else return scissors if it's more than 0.6.
function getComputerChoice() {
  const randomNumber = Math.random(); // Get a random number between 0 and 1
  if (randomNumber < 0.3) {
    return "rock"; // If randomNumber is less than 0.3, return "rock"
  } else if (randomNumber < 0.6) {
    return "paper"; // If between 0.3 and 0.6, return "paper"
  } else {
    return "scissors"; // If greater than 0.6, return "scissors"
  }
}

// declared computers score to 0
let computerScore = 0;
// Declared human score to 0.
let humanScore = 0;

//The next step we will right function called getHumanChoice and we will return it with the players choice of rock, paper, scissors.
// I created a funtion called getHumanChoice() with in the body of the function I crated a constant variable named answer I assigned a prompt method to the variable saying "rock, paper, or scissors?". Then I added a switch statement with the exspresion answer from the constant variable the first case was "rock" and it returned "rock" same with "peper", and "scissors". Finally we console.log(getHumanChoice()); So it displays the players choice.

function getHumanChoice() {
  const answer = prompt("rock, paper, or scissors?").toLowerCase(); // Ask the player between rock, paper, or scissors
  switch (answer) {
    case "rock": // player chooses rock
    case "paper": // player chooses paper
    case "scissors": // payer chooses scissors
      return answer;
    default:
      return null; // Return null for invalid 
  }
}

function playRound(humanChoice, computerChoice) {
  if (!humanChoice) { // Check if humanChoice is invalid
    return "Invalid choice, please select rock, paper, or scissors.";
  }

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++; 
      return "You win! Rock beats Scissors";
    } else {
      computerScore++; 
      return "You lose! Paper beats Rock";
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++; 
      return "You win! Scissors beats Paper";
    } else {
      computerScore++; 
      return "You lose! Rock beats Scissors";
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++; 
      return "You win! Paper beats Rock";
    } else {
      computerScore++; 
      return "You lose! Scissors beats Paper";
    }
  }
}



const humanSelection = getHumanChoice(); // Get player's choice
const computerSelection = getComputerChoice(); // Get computer's random choice

console.log(`Human chose: ${humanSelection}`);
console.log(`Computer chose: ${computerSelection}`);

const result = playRound(humanSelection, computerSelection); // Determine the winner
console.log(result); // Show the result
console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`); // Show the updated scores