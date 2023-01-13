
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


function playGame () {

let playerChoice =  getPlayerChoice()
let computerChoice =  getComputerChoice()


console.log('Computer = ' + computerChoice + ', player = '+ playerChoice)

if (playerChoice === computerChoice) {
    alert("Tie Game")
    return tie++
}
else if (playerChoice == 'paper' && computerChoice == 'rock'||
         playerChoice == 'scissors' && computerChoice == 'paper' ||
         playerChoice == 'rock' && computerChoice == 'scissors')
{
    alert('You win the round')
    return playerScore++;

}
else if (playerChoice == 'rock' && computerChoice == 'paper'||
         playerChoice == 'paper' && computerChoice == 'scissors' ||
         playerChoice == 'scissors' && computerChoice == 'rock')

{
    alert('You lose the round')
    return computerScore++;
}

}


let computerScore = 0
let playerScore = 0
let tie = 0

function playRound() {

    let rounds = 0


    for (let i = 0; i < 5; i++) {
        playGame()
        rounds++
        if (playerScore == 3 || computerScore == 3) i = 5;
        console.log('Player score = '+playerScore+' Computer score = '+computerScore + ' rounds = ' + rounds)
    }

    // while(playerScore < 3 && computerScore < 3) {
    //     playGame()
    //     rounds++
    //     console.log('Player score = '+playerScore+' Computer score = '+computerScore + ' rounds = ' + rounds)
    // }

    if (playerScore > computerScore) {
        alert('You win!!!')
    }
    else if(computerScore > playerScore) {
        alert('You Lose :(')
    }

}


playRound()