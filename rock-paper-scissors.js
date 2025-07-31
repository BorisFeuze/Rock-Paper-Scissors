const args = process.argv.slice(2);
let angabe = args[0].toLowerCase().trim();

if (args.length > 1) {
  console.error("Please provide only one word");
  // return;
  process.exit(1);
}

if (angabe !== "rock" && angabe !== "scissors" && angabe !== "paper") {
  console.error("Please provide only a word among Rock, Scissors, Paper");
  // return;
  process.exit(2);
}

// const angabe = args[0];

function computerMove() {
  let randomNumb = Math.random();
  let computerMove;

  if (randomNumb < 1 / 3) {
    computerMove = "Rock";
    return computerMove;
  } else if (randomNumb >= 1 / 3 && randomNumb < 2 / 3) {
    computerMove = "Scissors";
    return computerMove;
  } else if (randomNumb >= 2 / 3 && randomNumb < 1) {
    computerMove = "Paper";
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

  if (move === "Rock" && angabe === "rock") {
    result = "Tie";
    console.log(`You chose Rock. Computer chose Rock. Draw`);
    return result;
  } else if (move === "Paper" && angabe === "rock") {
    result = "You lose!";
    console.log(`You chose Rock. Computer chose Paper. You lose!`);
    return result;
  } else if (move === "Scissors" && angabe === "rock") {
    result = "You win!";
    console.log(`You chose Rock. Computer chose Scissors. You win!`);
    return result;
  } else if (move === "Scissors" && angabe === "scissors") {
    result = "Tie";
    console.log(`You chose Scissors. Computer chose Scissors. Draw`);
    return result;
  } else if (move === "Paper" && angabe === "scissors") {
    result = "Tie";
    console.log(`You chose Scissors. Computer chose Paper. You win!`);
    return result;
  } else if (move === "Rock" && angabe === "scissors") {
    result = "Tie";
    console.log(`You chose Scissors. Computer chose Rock. You lose!`);
    return result;
  } else if (move === "Scissors" && angabe === "paper") {
    result = "You lose!";
    console.log(`You chose paper. Computer chose Scissors. You lose!`);
    return result;
  } else if (move === "Paper" && angabe === "paper") {
    result = "Tie";
    console.log(`You chose Paper. Computer chose Paper. Draw`);
    return result;
  } else if (move === "Rock" && angabe === "paper") {
    result = "You win!";
    console.log(`You chose Paper. Computer chose Rock. You win!`);
    return result;
  }
}

playGame();

// console.log(result);
