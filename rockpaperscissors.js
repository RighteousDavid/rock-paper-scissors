let computerChoice, playerChoice, roundCount, playerScore, computerScore;

const CHOICES = ["rock", "paper", "scissors"];
const numChoices = CHOICES.length;

function getComputerChoice() {
  let randomNum = Math.ceil(Math.random() * numChoices);

  switch (randomNum) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

function getPlayerChoice() {
  playerChoice = prompt("Choose your weapon! Rock, paper, scissors: ");
  playerChoice = playerChoice.toLowerCase();
  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    playerScore;
    roundCount++;
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    roundCount++;
    return console.log("You won this round!");
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    roundCount++;
    return console.log("You lost this round...");
  } else {
    console.log("Please enter a proper choice. You chose: " + playerChoice);
  }
}

function playGame() {
  computerChoice = "";
  playerChoice = "";
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
  while (playerScore != 3 && computerScore != 3) {
    playRound(getPlayerChoice(), getComputerChoice());
  }
  playerScore > computerScore
    ? console.log(
        `Congrats! You won the game ${playerScore} to ${computerScore}`
      )
    : console.log(`Boo... You lost ${computerScore} to ${playerScore}`);
}

playGame();
