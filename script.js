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

function getPlayerChoice() {
    let playerPick = prompt("Please enter your selection");
    if (playerPick) {
        playerPick = playerPick.toUpperCase();
        if (playerPick === "ROCK" || playerPick === "PAPER" || playerPick === "SCISSORS") {
            return playerPick;
        }
        console.log("Incorrect Input");
        return getPlayerChoice();
    }
    else {
        return getPlayerChoice();
    }
}

function playRound() {
    let result;
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        result = `You win! ${computerSelection} beats ${playerSelection}`;
    } else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "ROCK")
    ) {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        console.log("Draw!");
        return playRound();
    }

}

function game() {
    let playerScore = 0, computerScore = 0;
    let winner, gameRound;
    for (let i = 0; i < 5; i++){
        gameRound = playRound();
        console.log(gameRound);

        if (result.charAt(4) === 'w') {
            playerScore++;
        } else {
            computerScore++;
        }
    }
    playerScore > computerScore 
        ? (winner = "Player")
        : (winner = "Computer");
    return (`${winner} is the winner!`);
}

