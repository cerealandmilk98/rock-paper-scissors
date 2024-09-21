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

// Function to get the human player's choice using a prompt
function getHumanChoice() {
  let choice;
  do {
    choice = prompt("Choose rock, paper, or scissors:").toLowerCase(); // Ask the user for input
  } while (choice !== "rock" && choice !== "paper" && choice !== "scissors"); // Repeat until valid
  return choice;
}

// Function to play a single round of the game
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  // Check who wins each scenario
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You win! Rock beats Scissors.";
    } else {
      return "You lose! Paper beats Rock.";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win! Paper beats Rock.";
    } else {
      return "You lose! Scissors beats Paper.";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win! Scissors beats Paper.";
    } else {
      return "You lose! Rock beats Scissors.";
    }
  }
}

// Main function to run the game for 5 rounds
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Play 5 rounds of the game
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice(); // Get the human player's choice
    const computerChoice = getComputerChoice(); // Get the computer's random choice

    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);

    const result = playRound(humanChoice, computerChoice); // Play the round
    console.log(result); // Display the result of the round

    // Update scores based on result
    if (result.includes("win")) {
      humanScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }

    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`); // Show updated score
  }

  // Final result after 5 rounds
  if (humanScore > computerScore) {
    console.log("Congratulations, you won the game!");
  } else if (humanScore < computerScore) {
    console.log("The computer won the game. Better luck next time!");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game by calling playGame function
playGame();
