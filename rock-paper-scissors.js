const args = process.argv.slice(2);
let angabe = args[0].toLowerCase().trim();

if (args.length > 1) {
  console.error("Please provide only one word");
  // return;
  process.exit(1);
}

const angabeKey = ["rock", "scissors", "paper"];

if (!angabeKey.some((word) => word === angabe)) {
  console.error("Please provide only a word among rock, scissors, paper");
  // return;
  process.exit(2);
}
/*

if (angabe !== "rock" && angabe !== "scissors" && angabe !== "paper") {
  console.error("Please provide only a word among Rock, Scissors, Paper");
  // return;
  process.exit(2);
}
*/
// const angabe = args[0];

function computerMove() {
  let randomNumb = Math.random();
  let computerMove;

  if (randomNumb < 1 / 3) {
    computerMove = "rock";
    return computerMove;
  } else if (randomNumb >= 1 / 3 && randomNumb < 2 / 3) {
    computerMove = "scissors";
    return computerMove;
  } else if (randomNumb >= 2 / 3 && randomNumb < 1) {
    computerMove = "paper";
    return computerMove;
  }
  return computerMove;
}

let result;
// console.log(args[0]);

function playGame(angabe) {
  angabe = args[0].toLowerCase().trim();
  // console.log(angabe);
  let move = computerMove();
  // console.log(move);

  if (move === "rock" && angabe === "rock") {
    result = "Draw";
    console.log(`You chose ${angabe}. Computer chose ${move}. ${result}`);
    return;
  } else if (move === "paper" && angabe === "rock") {
    result = "You lose!";
    console.log(`You chose ${angabe}. Computer chose ${move}. ${result}`);
    return;
  } else if (move === "scissors" && angabe === "rock") {
    result = "You win!";
    console.log(`You chose ${angabe}. Computer chose ${move}. ${result}`);
    return;
  } else if (move === "scissors" && angabe === "scissors") {
    result = "Draw";
    console.log(`You chose ${angabe}. Computer chose ${move}. ${result}`);
    return;
  } else if (move === "paper" && angabe === "scissors") {
    result = "You win!";
    console.log(`You chose ${angabe}. Computer chose ${move}. ${result}`);
    return;
  } else if (move === "rock" && angabe === "scissors") {
    result = "You lose!";
    console.log(`You chose ${angabe}. Computer chose ${move}. ${result}`);
    return;
  } else if (move === "scissors" && angabe === "paper") {
    result = "You lose!";
    console.log(`You chose ${angabe}. Computer chose ${move}. ${result}`);
    return;
  } else if (move === "paper" && angabe === "paper") {
    result = "Draw";
    console.log(`You chose ${angabe}. Computer chose ${move}. ${result}`);
    return;
  } else if (move === "rock" && angabe === "paper") {
    result = "You win!";
    console.log(`You chose ${angabe}. Computer chose ${move}. ${result}`);
    return;
  }
}

playGame();

// return;
process.exit(0);
