
let humanScore = 0;
let computerScore = 0

function playGame(humanScore, computerScore){

for(let i = 1; i <= 5; i++){

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let computerChoice = arr[Math.floor(Math.random() * arr.length)];
    document.write(`Computer Choice: ${computerChoice} </br>`);
    return computerChoice.toUpperCase();
};

function getHumanChoice() {
    let humanChoice = prompt("Chose one - rock,paper, or scissors");
    document.write(`Your Choice: ${humanChoice} </br>`);
    return humanChoice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice === computerChoice) {
        console.log("This round is tie");
        document.write("This round is tie" + "</br>");

    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "ROCK"
    ) {
        console.log("You win!");
        document.write("You Win!" + "</br>");
        humanScore++;
        // console.log(humanScore);
    } else {
        console.log("You Lose!");
        document.write("You Lose!" + "</br>");
        computerScore++;
        // console.log(computerScore);
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);

document.write(`Your Score: ${humanScore}`);
document.write(`Computer Score: ${computerScore} </br> </br>`);

}
}

playGame(humanScore, computerScore)



