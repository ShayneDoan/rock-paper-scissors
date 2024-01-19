function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getComputerChoice() {
    number = getRandomInt(3);
    if (number === 0){
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}