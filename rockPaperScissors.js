
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

let playerChoice =  'rock'//getPlayerChoice()
let computerChoice =  getComputerChoice()


console.log('Computer = ' + computerChoice + ', player = '+ playerChoice)

if (playerChoice === computerChoice) {
    alert("Tie Game")
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


let computerScore = 0;
let playerScore = 0;

function playRound(numOfRounds) {

    let rounds = 0;

    for (let i = 0; i <= numOfRounds; i++) {
        if (playerScore === computerScore) i--;
        rounds ++
        playGame()
        console.log('Player score = '+playerScore+' Computer score = '+computerScore + ' rounds = ' + rounds);
        if (playerScore >= numOfRounds / 2 || computerScore >= numOfRounds / 2) i = numOfRounds;
    }

    if (playerScore > computerScore) {
        alert('You win best of '+ numOfRounds)
        console.log('player win best of ' + numOfRounds )
    }
    else if(computerScore > playerScore) {
        alert('You Lose the best of ' + numOfRounds)
        console.log('computer wins best of '+numOfRounds)
    }

}


playRound(5)