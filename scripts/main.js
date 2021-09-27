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

console.log('You chose: ' + playerSelection + ',', 'Computer chose: ' + computerSelection + ',
', playRound(playerSelection, computerSelection));

console.log(playRound(playerSelection, computerSelection));
*/
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

