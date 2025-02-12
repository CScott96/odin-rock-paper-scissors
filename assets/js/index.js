function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
        case 1:
            compChoice = "rock";
            break;
        case 2:
            compChoice = "paper";
            break;
        case 3:
            compChoice = "scissors";
            break;
    }
    return compChoice;
}
function getHumanChoice() {
    let playerChoice = prompt(
        "Please enter your choice: Rock, Paper or Scissors",
        "Rock"
    ).toLowerCase();
    let validation = true;
    while (validation) {
        switch (playerChoice) {
            case "rock":
            case "paper":
            case "scissors":
                validation = false;
                break;
            default:
                playerChoice = prompt(
                    "Please re-enter your choice: Rock, Paper or Scissors",
                    "Rock"
                ).toLowerCase();
        }
    }
    return playerChoice;
}

let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    console.log('Human chose: ' + humanChoice + ' Computer chose: ' + computerChoice);
    if (humanChoice === computerChoice) {
        console.log("draw, play again!");
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('Human wins! Rock beats Scissors');
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('Human wins! Paper beats Rock');
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('Human wins! Scissors beats Paper');
    } else {
        console.log('Computer wins! ' + computerChoice + ' beats ' + humanChoice + '. Try again.')
    }
}

playRound(humanSelection, computerSelection)
