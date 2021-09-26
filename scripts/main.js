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
      return 'You Lose! Paper beats rock';
    } else if (computerSelection === 'scissor') {
      return 'You Win! Rock beats Scissor';
    } else {
      return 'It\'s a Tie!';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'paper') {
      return 'It\'s a Tie!';
    } else if (computerSelection === 'scissor') {
      return 'You Lose! Scissor beats Paper';
    } else {
      return 'You Win! Paper beats Rock';
    }
  } else if (playerSelection === 'scissor') {
    if (computerSelection === 'paper') {
      return 'You Win! Scissor beats Paper';
    } else if (computerSelection === 'scissor') {
      return 'It\'s a Tie!';
    } else {
      return 'You Lose! Rock beats Scissor';
    }
  }


}

let computerSelection = computerPlay();
let playerSelection = prompt('Rock, Paper, or Scissor?', '').toLowerCase();
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));