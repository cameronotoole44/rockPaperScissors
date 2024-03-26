
// //full game round x5
// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         const playerChoice = prompt('Rock, Paper, or Scissors?');
//         const playerSelection = playerChoice ? playerChoice.toLowerCase() : null;
//         const computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);
//         alert('Round ' + i + '\n' + result);
//     }
// }
// playGame();

const rockPaperScissors = ['rock', 'paper', 'scissors']; // options the computer/player could choose from

function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random() * 3)]; // randomizes options 
}
// play one round 
function playRound() {
    const playerChoice = prompt('Rock, paper, or scissors?'); //prompts player with choices
    const computerChoice = getComputerChoice(); //gets computer choice

    const win = `You win! ${player.Choice.toLowerCase()} beats ${computerChoice}.`; // player win
    const lose = `You lose! ${computerChoice} beats ${playerChoice.toLowerCase()}.`; // player loss
    const draw = `Draw! ${playerChoice.toLowerCase()} is equal to ${computerChoice}.`; // draw 

    if (playerChoice.toLowerCase() === computerChoice) {
        console.log(draw);
        return 'draw';
    }
    if (playerChoice.toLowerCase() === 'rock') {
        if (computerChoice === 'paper') {
            console.log(lose);
            return 'lose';
        } if (computerChoice === 'scissors') {
            console.log(win)
            return 'win';
        }
    }
    if (playerChoice.toLowerCase() === 'paper') {
        if (computerChoice === 'scissors') {
            console.log(lose)
            return 'lose';
        } if (computerChoice === 'rock') {
            console.log(win)
            return 'win';
        }
    }
    if (playerChoice.toLowerCase() === 'scissors') {
        if (computerChoice === 'rock') {
            console.log(lose)
            return 'lose';
        } if (computerChoice === 'paper') {
            console.log(win)
            return 'win';
        }
    }
}


