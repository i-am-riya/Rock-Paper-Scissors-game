
let humanScore = 0;
let computerScore = 0

function playGame(humanScore, computerScore){

for(let i = 1; i <= 5; i++){

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice.toUpperCase();
};

function getHumanChoice() {
    let humanChoice = prompt("Chose one - rock,paper, or scissors");
    return humanChoice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice === computerChoice) {
        console.log("This round is tie");
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "ROCK"
    ) {
        console.log("You win!");
        humanScore++;
        // console.log(humanScore);
    } else {
        console.log("You Lose!");
        computerScore++;
        // console.log(computerScore);
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);

}
}

playGame(humanScore, computerScore)
document.write(`Your Score: ${humanScore}`);
document.write(`Computer Score: ${computerScore}`);



