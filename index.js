let computerChoice;
const CHOICES = ["rock", "paper", "scissors"];
const numChoices = CHOICES.length;

console.log(numChoices);

function getComputerChoice() {
  computerChoice = Math.ceil(Math.random() * numChoices);
  return computerChoice;
}

console.log(getComputerChoice());
