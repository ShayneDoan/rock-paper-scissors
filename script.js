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
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        if (playerScore === 3) {
            break;
        }
        if (computerScore === 3){
            break;
        }
        let pick = prompt("Please enter your selection");
        if (playRound(pick, getComputerChoice()) === 1) {
            playerScore++;
        } else if (playRound(pick, getComputerChoice()) === 0) {
            computerScore++;
        } else {
            alert("You tied!");
        }
        console.log(playerScore);
        console.log(computerScore);
    }
    return "Thanks For Playing!";
}

game();
