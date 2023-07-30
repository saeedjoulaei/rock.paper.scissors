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
if (userChoice === computerChoices) {
  console.log("it is a tie");
} else if (userChoice === "rock") {
  if (computerChoices === "scissors") {
    console.log("you won !");
  } else {
    console.log("computer won !");
  }
} else if (userChoice === "paper") {
  if (computerChoices === "scissors") {
    console.log("computer won !");
  } else {
    console.log("you won !");
  }
} else if (userChoice === "scissors") {
  if (computerChoices === "rock") {
    console.log("computer won !");
  } else {
    console.log("you won !");
  }
}
