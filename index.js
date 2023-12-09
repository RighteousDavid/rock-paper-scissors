let computerChoice;
let playerChoice;

const CHOICES = ["rock", "paper", "scissors"];
const numChoices = CHOICES.length;

console.log(numChoices);

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
      computerChoice = "sciccors";
      break;
  }

  return computerChoice;
}

console.log(getComputerChoice());

function getPlayerChoice() {
  playerChoice = prompt("Choose your weapon! Rock, paper, sciccors: ");
  return playerChoice;
}
