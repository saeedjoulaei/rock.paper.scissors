const choices = ["rock", "paper", "scissors"];
const userChoice = prompt("choose rock, paper,scissors");
if (userChoice) {
  console.log(`you choosed: ${userChoice}`);
} else {
  console.log("you cheated!!");
}
const randomNumber = Math.floor(Math.random() * 3);
const computerChoices = choices[randomNumber];
console.log(`computer choosed: ${computerChoices}`);
