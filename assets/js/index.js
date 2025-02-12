function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}
function getHumanChoice() {
    let humanChoice = prompt(
        "Please enter your choice: Rock, Paper or Scissors",
        "Rock"
    ).toLowerCase();
    let validation = true;
    while (validation) {
        switch (humanChoice) {
            case 'rock':
            case 'paper':
            case 'scissors':
                validation = false;
                break;
            default:
                humanChoice = prompt('Please re-enter your choice: Rock, Paper or Scissors','Rock').toLowerCase();
        }
    }
    return humanChoice;
}

console.log(getHumanChoice());
