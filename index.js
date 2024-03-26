const rockPaperScissors = ['rock', 'paper', 'scissors']; // options the computer/player could choose from

let computerScore = 0;
let playerScore = 0;
let roundNum = 1;

// player and computer Scores to update
const userScore = document.querySelector('.user-score');
const randomScore = document.querySelector('.computer-score');

// player buttons to add to eventlistener 
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

// computer buttons to add to eventlistener
const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');

// results of each round
const userContainer = document.querySelector('.user-container');
const gameWrapper = document.querySelector('.game-wrapper');

//  turn log
let resultsArray = [];
let resultsLog = document.createElement('ul');
resultsLog.classList.add('round-result');
gameWrapper.insertAdjacentElement('beforeend', resultsLog);

// button to refresh page
const newGame = document.createElement('div');
newGame.textContent = `Play again`;
newGame.classList.add('button', 'refresh');

// refresh page
function refreshPage() {
    window.location.reload(true);
}

// A new result will appear at the top of the log for each turn
function gameLog() {
    var li = document.createElement('li');
    li.textContent = resultsArray[`${resultsArray.length - 1}`];
    resultsLog.insertAdjacentElement('afterbegin', li);
}

// creates random computer choice
function computerPlay() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        return 'rock';
    }
    if (number % 3 === 1) {
        return 'paper';
    }
    return 'scissors';
}

// computer button animation 
function computerColor(computerSelection) {
    if (computerSelection === 'rock') {
        removeColor();
        computerRock.classList.add('computerPick');
    }
    if (computerSelection === 'paper') {
        removeColor();
        computerPaper.classList.add('computerPick');
    }
    if (computerSelection === 'scissors') {
        removeColor();
        computerScissors.classList.add('computerPick');
    }
}

// removes color from computer button
function removeColor() {
    computerRock.classList.remove('computerPick');
    computerPaper.classList.remove('computerPick');
    computerScissors.classList.remove('computerPick');
}

// removes color from player button
function removeUserColor() {
    rockButton.classList.remove('userClick');
    paperButton.classList.remove('userClick');
    scissorsButton.classList.remove('userClick');
}

// player button hover
function userHover() {
    if (playerScore <= 4 && computerScore <= 4) {
        this.classList.add('userHover');
    }
}

// hover for new game 
function refreshHover() {
    newGame.classList.add('userHover');
}

// removes hover 
function removeHover() {
    this.classList.remove('userHover');
}

//play game x5 rounds
function playGame(playerSelection, computerSelection) {
    playerSelection = this.dataset.button;
    computerSelection = computerPlay();
    removeUserColor(); // remove current animation
    this.classList.add('userClick'); // new button animation
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' &&
            computerSelection === 'paper' &&
            (computerScore <= 5 || playerScore <= 5))
    ) {
        playerScore++; // new player score
        resultsArray.push(`You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${playerScore} - ${computerScore}.`);
        userScore.textContent = `${playerScore}`; // update score
        if (playerScore >= 5) {
            resultsArray.push(`YOU WON! You got 5 points! Round #${roundNum}: ${playerSelection} beats ${computerSelection}.`);
            rockButton.removeEventListener('click', playGame);
            paperButton.removeEventListener('click', playGame);
            scissorsButton.removeEventListener('click', playGame);
            resultsLog.insertAdjacentElement('beforebegin', newGame);
        }
        roundNum++;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' &&
            computerSelection === 'rock' &&
            (computerScore <= 5 || playerScore <= 5))
    ) {
        computerScore++; // new computer Score
        resultsArray.push(`Computer won round #${roundNum}: ${computerSelection} beats ${playerSelection}. Score: ${playerScore} - ${computerScore}.`);
        randomScore.textContent = `${computerScore}`; // update score
        if (computerScore >= 5) {
            resultsArray.push(`You lost. The computer was first to get 5 points. Round #${roundNum}: ${computerSelection} beats ${playerSelection}.`);
            rockButton.removeEventListener('click', playGame);
            paperButton.removeEventListener('click', playGame);
            scissorsButton.removeEventListener('click', playGame);
            resultsLog.insertAdjacentElement('beforebegin', newGame);
        }
        roundNum++;
    } else {
        resultsArray.push(`Tie for round #${roundNum}: ${playerSelection} and ${computerSelection}. No points.`);
        roundNum++;

    }
    computerColor(computerSelection); // animation for computer button
    gameLog();
}

// remove animation from player button
function removeClick() {
    this.classList.remove('userClick');
    this.classList.remove('userHover');
}

// player event button to play game
rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);

// player button remove animation 
rockButton.addEventListener('transitionend', removeClick);
paperButton.addEventListener('transitionend', removeClick);
scissorsButton.addEventListener('transitionend', removeClick);

// player hover state
rockButton.addEventListener('mouseover', userHover);
paperButton.addEventListener('mouseover', userHover);
scissorsButton.addEventListener('mouseover', userHover);

// end game button
newGame.addEventListener('mouseover', refreshHover);
newGame.addEventListener('mouseleave', removeHover);
newGame.addEventListener('click', refreshHover);

// remove player hover
rockButton.addEventListener('mouseleave', removeHover);
paperButton.addEventListener('mouseleave', removeHover);
scissorsButton.addEventListener('mouseleave', removeHover);

// removes animation from computer button
computerRock.addEventListener('transitionend', removeColor);
computerPaper.addEventListener('transitionend', removeColor);
computerScissors.addEventListener('transitionend', removeColor);

// refresh page, new game
newGame.addEventListener('click', refreshPage);
