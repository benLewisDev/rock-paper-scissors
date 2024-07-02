let humanSelection = getHumanChoice();
let compSelection = getComputerChoice();

function getComputerChoice() {
  let compChoice = Math.random();

  if (compChoice <= 0.33) {
    compChoice = "rock";
  } else if (compChoice >= 0.66) {
    compChoice = "scissors";
  } else compChoice = "paper";

  return compChoice;
}

function getHumanChoice() {
  let humanChoice;

  while (true) {
    humanChoice = prompt("Please choose rock, paper or scissors").toLowerCase();

    if (
      humanChoice == "rock" ||
      humanChoice == "paper" ||
      humanChoice == "scissors"
    ) {
      break;
    } else alert("Please enter a valid value");
  }
  return humanChoice;
}

function playRound(compChoice, humanChoice) {
  let humanWon = "You Won!";
  let humanLost = "You lost! Better luck next time";

  let humanScore = 0;
  let compScore = 0;

  if (compChoice === humanChoice) {
    alert("its a tie");
  } else if (compChoice === "scissors" && humanChoice === "paper") {
    alert(humanLost);
    compScore++;
  } else if (compChoice === "paper" && humanChoice === "rock") {
    alert(humanLost);
    compScore++;
  } else if (compChoice === "rock" && humanChoice === "scissors") {
    alert(humanLost);
    compScore++;
  } else if (compChoice === "scissors" && humanChoice === "rock") {
    alert(humanWon);
    humanScore++;
  } else if (compChoice === "paper" && humanChoice === "scissors") {
    alert(humanWon);
    humanScore++;
  } else if (compChoice === "rock" && humanChoice === "scissors") {
    alert(humanWon);
    humanScore++;
  }
}

playRound(compSelection, humanSelection);

// function get human choice
// hint: use math.random

// main function
// -evaluate winner
