let humanScore = document.getElementById('humanScore');
let computerScore = document.getElementById('computerScore');
let buttons = document.querySelectorAll('.button');
let computerChoice = document.getElementById('computerChoice');
let whoWin = document.getElementById('whoWin');
let play = document.getElementById('play');

humanScore = 0;
computerScore = 0;
let humanChoice;

play.addEventListener('click', function () {
    whoWin.innerHTML = "Start Game";
    document.getElementById('computer').innerHTML = "";
    humanScore = 0;
    computerScore = 0;
    document.getElementById('humanScore').innerHTML = humanScore;
    document.getElementById('computerScore').innerHTML = computerScore;
})

buttons.forEach(button => {
    button.addEventListener('click', function () {
        humanChoice = this.value;
        console.log(humanChoice);

        let arr = ["ROCK", "PAPER", "SCISSORS"];
        computerChoice = arr[Math.floor(Math.random() * arr.length)];
        console.log(computerChoice);
        document.getElementById('computer').innerHTML = computerChoice;

            playRound(humanChoice, computerChoice);
    });
});

function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        console.log("This round is tie");
        whoWin.innerHTML = "This round is tie";

    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "ROCK"
    ) {
        console.log("You win!");
        whoWin.innerHTML = "You Win!";
        humanScore++;
        console.log(humanScore);
        document.getElementById('humanScore').innerHTML = humanScore;
    } else {
        console.log("You Lose!");
        whoWin.innerHTML = "You Lose!";
        computerScore++;
        console.log(computerScore);
        document.getElementById('computerScore').innerHTML = computerScore;
    }

}





// function playGame(humanScore, computerScore){

// for(let i = 1; i <= 5; i++){

// function getComputerChoice() {
//     let arr = ["rock", "paper", "scissors"];
//     let computerChoice = arr[Math.floor(Math.random() * arr.length)];
//     document.write(`Computer Choice: ${computerChoice} </br>`);
//     return computerChoice.toUpperCase();
// };

// function getHumanChoice() {
//     let humanChoice = prompt("Chose one - rock,paper, or scissors");
//     document.write(`Your Choice: ${humanChoice} </br>`);
//     return humanChoice.toUpperCase();
// }

// function playRound(humanChoice, computerChoice) {
//     console.log(humanChoice);
//     console.log(computerChoice);

//     if (humanChoice === computerChoice) {
//         console.log("This round is tie");
//         document.write("This round is tie" + "</br>");

//     } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "ROCK"
//     ) {
//         console.log("You win!");
//         document.write("You Win!" + "</br>");
//         humanScore++;
//         console.log(humanScore);
//     } else {
//         console.log("You Lose!");
//         document.write("You Lose!" + "</br>");
//         computerScore++;
//         console.log(computerScore);
//     }

// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// console.log(humanScore);
// console.log(computerScore);

// document.write(`Your Score: ${humanScore}`);
// document.write(`Computer Score: ${computerScore} </br> </br>`);

// }
// }

// playGame(humanScore, computerScore)
