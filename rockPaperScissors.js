


function getComputerChoice() {
let choices = ['rock','paper','scissors']
let computerRoll = Math.floor(Math.random() * 3)
let computerChoice
switch(computerRoll) {
    case 0:
        computerChoice = choices[0]
        break;
    case 1:
        computerChoice = choices[1]
        break;
    case 2:
        computerChoice = choices[2]
        break;
}
return computerChoice;
}

function getPlayerChoice() {

    let playerChoice = prompt('Please choose rock, paper or scissors').toLowerCase()
    while(playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors'){
        playerChoice = prompt('Please try again').toLowerCase()
    }
    return playerChoice
}