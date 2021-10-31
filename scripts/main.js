/*
function computerPlay() {
  let choice = Math.round(Math.random() * 3);

  if (choice === 1) {
    return 'rock';
  } else if (choice === 2) {
    return 'paper';
  } else {
    return 'scissor';
  }
}

function game() {
  let counter = 1;
  let computerWins = 0;
  let humanWins = 0;

  while(counter < 6) {
    let computerSelection = computerPlay();
    let playerSelection = prompt('Rock, Paper, or Scissor?', '').toLowerCase();

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
          computerWins++;
          counter++;
          return 'You Lose! Paper beats Rock';
        } else if (computerSelection === 'scissor') {
          humanWins++
          counter++;
          return 'You Win! Rock beats Scissor';
        } else {
          return 'It\'s a Tie!';
        }
      } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
          return 'It\'s a Tie!';
        } else if (computerSelection === 'scissor') {
          computerWins++;
          counter++;
          return 'You Lose! Scissor beats Paper';
        } else {
          humanWins++;
          counter++;
          return 'You Win! Paper beats Rock';
        }
      } else if (playerSelection === 'scissor') {
        if (computerSelection === 'paper') {
          humanWins++;
          counter++;
          return 'You Win! Scissor beats Paper';
        } else if (computerSelection === 'scissor') {
          return 'It\'s a Tie!';
        } else {
          computerWins++;
          counter++;
          return 'You Lose! Rock beats Scissor';
        }
      }
    }

    console.log('You chose: ' + playerSelection + ',', 'Computer chose: ' + computerSelection + ',', playRound(playerSelection, computerSelection)); 
    console.log(`Computer: ${computerWins}, You: ${humanWins}`);
  }

  if (humanWins < computerWins) {
    console.log('Sorry, better luck next time.');
  } else {
    console.log('You lucky ducky!')
  }
}
*/

let computerWins = 0;
let humanWins = 0;
let computerSelection;
let playerSelection;
const playerImg = document.querySelector('.player-pick');
const computerImg = document.querySelector('.computer-pick');
const outcome = document.querySelector('#outcome');
const buttonsContainer = document.querySelector('#buttons-container');

function computerPlay() {
  let choice = Math.round(Math.random() * 3);

  if (choice === 1) {
    return 'rock';
  } else if (choice === 2) {
    return 'paper';
  } else {
    return 'scissor';
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      computerWins++;
      return 'You Lose! Paper beats Rock!';
    } else if (computerSelection === 'scissor') {
      humanWins++;
      return 'You Win! Rock beats Scissor!';
    } else {
      return 'It\'s a Tie!';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'paper') {
      return 'It\'s a Tie!';
    } else if (computerSelection === 'scissor') {
      computerWins++;
      return 'You Lose! Scissor beats Paper!';
    } else {
      humanWins++;
      return 'You Win! Paper beats Rock!';
    }
  } else if (playerSelection === 'scissor') {
    if (computerSelection === 'paper') {
      humanWins++;
      return 'You Win! Scissor beats Paper!';
    } else if (computerSelection === 'scissor') {
      return 'It\'s a Tie!';
    } else {
      computerWins++;
      return 'You Lose! Rock beats Scissor!';
    }
  }
  
}
function specifyImgSrc(imgOne, imgTwo) {
  let playerChoice = imgOne;

  if (playerSelection === 'rock') {
    playerChoice.src = "images/rock.png";
  } 
  if (playerSelection === 'paper') {
    playerChoice.src = "images/paper.png";
  } 
  if (playerSelection === 'scissor') {
    playerChoice.src = "images/scissor.png";
  } 

  let computerChoice = imgTwo;
  if (computerSelection === 'rock') {
    computerChoice.src = "images/rock.png";
  } 
  if (computerSelection === 'paper') {
    computerChoice.src = "images/paper.png";
  } 
  if (computerSelection === 'scissor') {
    computerChoice.src = "images/scissor.png";
  } 
}

let playButtons = document.querySelectorAll('.play-buttons');
playButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    playerSelection = btn.id;
    computerSelection = computerPlay();
    
    specifyImgSrc(playerImg, computerImg);
 
 
    const result = document.querySelector('#result');
    result.textContent = playRound(playerSelection, computerSelection);

    const playerScore = document.querySelector('#player-score');
    playerScore.textContent = `Player: ${humanWins}`;

    const computerScore = document.querySelector('#computer-score');
    computerScore.textContent = `Computer: ${computerWins}`;

    let myModal = document.querySelector('#modal');
    if (computerWins === 5 || humanWins === 5) {
      myModal.style.display = 'block';
      buttonsContainer.style.display = 'none';

      if (computerWins > humanWins) {
        outcome.textContent = 'Womp Womp You Lost!';
      } else {
        outcome.textContent = 'Yaaaay You Won!';
      }
    }



    const repeatGame = document.querySelector('#modal > #repeat');
    repeatGame.addEventListener('click', (e) => {
      
      myModal.style.display = 'none';
      buttonsContainer.style.display = 'block';
      humanWins = 0;
      computerWins = 0;
      playerScore.textContent = `Player: ${humanWins}`;
      computerScore.textContent = `Computer: ${computerWins}`;
      result.textContent = 'Result';
      playerImg.src = "images/xmas-dog-cutout.png";
      computerImg.src = "images/grinch.png";

    });

    console.log(playerSelection, computerSelection);
    console.log(computerWins, humanWins);
  });
});








