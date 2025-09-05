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
let gameOver = false;
let round = 0;

function playRound(choice) {
  round++;
  if (round >= 5) {
    checkWinner();
  } else if (gameOver == true) {
    return;
  }
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
  updateGameScore(humanScore, computerScore);
}

function checkWinner() {
  gameOver = true;
  const winnerHeading = document.querySelector("#FinalDecision");
  if (humanScore > computerScore) {
    winnerHeading.innerText =
      "Human wins with this score: " + humanScore + " : " + computerScore;
  } else if (humanScore == computerScore) {
    winnerHeading.innerText =
      "Draw with this score: " + humanScore + " : " + computerScore;
  } else {
    winnerHeading.innerText =
      "Computer wins with this score: " + computerScore + " : " + humanScore;
  }
}

function updateGameLog(result) {
  const logCont = document.querySelector("#GameLog");
  const resultText = document.createElement("li");
  resultText.innerText = `${result}`;
  logCont.appendChild(resultText);
}

function updateGameScore(humanScore, compScore) {
  const humanScoreBoard = document.querySelector("#HumanScore");
  const compScoreBoard = document.querySelector("#CompScore");

  humanScoreBoard.innerText = humanScore;
  compScoreBoard.innerText = compScore;
}

function initialise() {
  const playButtons = document.querySelectorAll(".ctrl-btn");
  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id);
    });
  });
  const scoreBoard = document.querySelector("#ScoreBoard");
  const score = document.createElement("p");
  score.id = "Score";
  score.innerHTML =
    "Human: <span id='HumanScore'>0</span> : Computer: <span id='CompScore'>0</span>";
  scoreBoard.appendChild(score);
}

initialise();
