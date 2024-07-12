console.log("Hello World");

function getComputerChoice() {
  const choices = ["pierre", "papier", "ciseaux"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
  let choice;
  const validChoices = ["pierre", "papier", "ciseaux"];

  do {
    choice = prompt(
      "Veuillez entrer votre choix (pierre, papier, ciseaux) :"
    ).toLowerCase();
  } while (!validChoices.includes(choice));

  return choice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["pierre", "papier", "ciseaux"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice;
  const validChoices = ["pierre", "papier", "ciseaux"];

  do {
    choice = prompt(
      "Veuillez entrer votre choix (pierre, papier, ciseaux) :"
    ).toLowerCase();
  } while (!validChoices.includes(choice));

  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("Égalité !");
    } else if (
      (humanChoice === "pierre" && computerChoice === "ciseaux") ||
      (humanChoice === "papier" && computerChoice === "pierre") ||
      (humanChoice === "ciseaux" && computerChoice === "papier")
    ) {
      console.log(
        `Vous gagnez ! ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } bat ${computerChoice}`
      );
      humanScore++;
    } else {
      console.log(
        `Vous perdez ! ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } bat ${humanChoice}`
      );
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i + 1}`);
    console.log(`Vous avez choisi : ${humanChoice}`);
    console.log(`L'ordinateur a choisi : ${computerChoice}`);
    playRound(humanChoice, computerChoice);
    console.log(`Score humain : ${humanScore}`);
    console.log(`Score ordinateur : ${computerScore}`);
    console.log("---------------------------");
  }

  console.log("Jeu terminé !");
  console.log(
    `Score final - Humain : ${humanScore}, Ordinateur : ${computerScore}`
  );
}

playGame();
