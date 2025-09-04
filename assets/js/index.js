function getComputerChoice() {
  let compChoice = Math.ceil(Math.random() * 3);
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
    "Rock",
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
          "Rock",
        ).toLowerCase();
    }
  }
  return playerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(choice) {
  const computerChoice = getComputerChoice();
  const humanChoice = choice;
  let resultText =
    "Human chose: " + humanChoice + " Computer chose: " + computerChoice;
  updateGameLog(resultText);
  if (humanChoice === computerChoice) {
    resultText = "draw, play again!";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    resultText = "Human wins! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    resultText = "Human wins! Paper beats Rock";
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    resultText = "Human wins! Scissors beats Paper";
    humanScore++;
  } else {
    resultText =
      "Computer wins! " +
      computerChoice +
      " beats " +
      humanChoice +
      ". Try again.";
    computerScore++;
  }
  updateGameLog(resultText);
}

function playGame() {
  if (humanScore > computerScore) {
    console.log(
      "Human wins with this score: " + humanScore + " : " + computerScore,
    );
  } else if (humanScore == computerScore) {
    console.log("Draw with this score: " + humanScore + " : " + computerScore);
  } else {
    console.log(
      "Computer wins with this score: " + computerScore + " : " + humanScore,
    );
  }
}

function updateGameLog(result) {
  const logCont = document.querySelector("#GameLog");
  const resultText = document.createTextNode(`
    ${result}`);
  logCont.appendChild(resultText);
}

function setButtons() {
  const playButtons = document.querySelectorAll(".ctrl-btn");
  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id);
    });
  });
}

setButtons();
