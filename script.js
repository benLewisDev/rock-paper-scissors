let humanScore = 0;
let compScore = 0;

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

function playGame(rounds) {
  for (i = 1; i <= rounds; i++) {
    console.log("round " + i);
    playRound(getComputerChoice(), getHumanChoice());
    console.log("human score = " + humanScore);
    console.log("Computer score = " + compScore);
  }

  while (true) {
    if (humanScore == compScore) {
      playRound(getComputerChoice(), getHumanChoice());
      console.log("Bonus Round");
      console.log("human score = " + humanScore);
      console.log("Computer score = " + compScore);
    } else if (humanScore > compScore) {
      alert("You Win the Game!");
      break;
    } else if (humanScore < compScore) {
      alert("You Lose the Game");
      break;
    }
  }
}

playGame(5);
