function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getComputerChoice() {
    number = getRandomInt(3);
    if (number === 0){
        return "ROCK";
    } else if (number === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    playerPick = playerSelection.toUpperCase();
    if (playerPick === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats Scissors";
    } else if (playerPick === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats Rock";
    } else if (playerPick === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats Rock";
    } else if (playerPick === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! Scissors beats Paper";
    } else if (playerPick === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beats Paper";
    } else if (playerPick === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! Rock beats Scissors";
    } else {
        return "Tie!";
    }
}