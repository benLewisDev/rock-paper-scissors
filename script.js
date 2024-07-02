


// function get computer choice 

function getComputerChoice () {
    let compChoice = Math.random();
    
    if (compChoice <= 0.33){
        compChoice = 'rock'
    }
    else if (compChoice >= 0.66){
        compChoice = 'scissors'
    }
    else compChoice = 'paper'

    return compChoice
}

function getHumanChoice () {
    let humanChoice = prompt('Please choose rock, paper or scissors')
    
    return humanChoice
}



// function get human choice
// hint: use math.random


// main function
// -evaluate winner
// -print result to console. pape