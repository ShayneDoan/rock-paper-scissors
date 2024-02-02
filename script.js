function getComputerChoice() {
    function getRandomInt(max) {
        return Math.ceil(Math.random() * max);
    }
    let computerChoice;
    switch (getRandomInt(3)) {
        case 1:
            computerChoice = "ROCK"
            break;
        case 2:
            computerChoice = "PAPER";
            break;
        case 3:
            computerChoice = "SCISSORS";
            break;
    }
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        playerScore++;
        return `You win! ${computerSelection} beats ${playerSelection}`;
    } else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "ROCK")
    ) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return "Draw!";
    }
}

function game(playerInput) {
    const computerInput = getComputerChoice(); 
    const result = playRound(playerInput, computerInput);

    //displayResult
    //updateScores

    roundsPlayed++;
    if (roundsPlayed === 5) {
        determineWinner();
    }
}

function determineWinner() {
    if (playerScore > computerScore) {
        display("You win! Congratulations!");
    } else if (computerScore > playerScore) {
        display("You lose!");
    } else {
        display("Tie!")
    }
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}
