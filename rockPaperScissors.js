


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

function playRound () {

let playerChoice = getPlayerChoice()

let computerChoice = getComputerChoice()


    console.log('Computer = ' + computerChoice + ' player = '+ playerChoice)

if (playerChoice === computerChoice) {
    alert("Tie Game")
}
else if (playerChoice == 'rock' && computerChoice == 'paper') {
    alert('computer picked paper, You win the round')
}
else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    alert('computer picked scissors, You lose the round')
}
else if (playerChoice == 'paper' && computerChoice == 'rock') {
    alert('computer picked rock, You lose the round')
}
else if (playerChoice == 'paper' && computerChoice == 'scissors') {
    alert('computer picked scissors paper, You lose the round')
}
else if(playerChoice == 'scissors' && computerChoice == 'paper') {
    alert('computer picked paper, You win the round')
}
else if(playerChoice == 'scissors' && computerChoice == 'rock') 
    alert('computer picked scissors, You lose the round')
}


playRound ()