console.log("Welcome to the game Rock Paper Scissors!")

//Create function named getComputerChoice
function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);

    switch (compChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
            break;
    }
}

//console.log(getComputerChoice())

//Create function named getHumanChoice
function getHumanChoice() {
    let hChoice = prompt("Rock, Paper or Scissors?");
    hChoice = hChoice.toLowerCase();
    return hChoice;
}

//console.log(getHumanChoice())

let humanScore =0; 
let computerScore =0;

//Create a function named playRound
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw! Both you and the computer chose " + humanChoice);
    }

    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You Lose, you picked " + humanChoice + ", Computer chose " + computerChoice);
            computerScore += 1;
        } else {
            console.log("You Win, you picked " + humanChoice + ", Computer chose " + computerChoice);
            humanScore += 1;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You Lose, you picked " + humanChoice + ", Computer chose " + computerChoice);
            computerScore += 1;
        } else {
            console.log("You Win, you picked " + humanChoice + ", Computer chose " + computerChoice);
            humanScore += 1;
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You Lose, you picked " + humanChoice + ", Computer chose " + computerChoice);
            computerScore += 1;
        } else {
            console.log("You Win, you picked " + humanChoice + ", Computer chose " + computerChoice);
            humanScore += 1;
        }
    }
}

function playGame(){
    for (let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
  }
  //console.log(humanScore, computerScore);
  if (humanScore > computerScore) {
    console.log("Human won");
  } else if (humanScore < computerScore) {
    console.log("Computer won");
  } else {
    console.log("Draw");
  }
}

playGame();