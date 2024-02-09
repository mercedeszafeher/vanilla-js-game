console.log("Welcome to the Rock, Paper, Scissors game!");
console.log("To play the game, please follow the instructions:");


function startGame() {
    let choice = prompt("Type 'start' to begin the game or 'exit' to quit:");

    if (choice.toLowerCase() === 'start') {
        let startConfirmation = prompt("Type 'start game' to begin playing:");

        if (startConfirmation.toLowerCase() === 'start game') {
            game(); 
        } else {
            console.log("You didn't confirm to start the game. Goodbye!");
        }
    } else if (choice.toLowerCase() === 'exit') {
        console.log("Thank you for playing! Goodbye!");
    } else {
        console.log("Invalid choice! Please try again.");
        startGame(); 
    }
}

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'Scissors' ||
        playerSelection === 'paper' && computerSelection === 'Rock' ||
        playerSelection === 'scissors' && computerSelection === 'Paper') {
            return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === 'rock' && computerSelection === 'Paper' ||
        playerSelection === 'paper' && computerSelection === 'Scissors' ||
        playerSelection === 'scissors' && computerSelection === 'Rock') {
            return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return 'It\'s a tie!';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors');
        let computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('You Win!')) {
            playerScore++;
        } else if (result.includes('You Lose!')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('Congratulations! You won the game!');
    } else if (playerScore < computerScore) {
        console.log('Sorry! You lost the game.');
    } else {
        console.log('It\'s a tie! No one wins.');
    }
}

startGame();