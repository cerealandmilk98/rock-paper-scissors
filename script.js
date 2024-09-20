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

console.log(getComputerChoice());