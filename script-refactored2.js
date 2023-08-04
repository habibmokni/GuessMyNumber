'use strict';

let secretNumber, score, highscore;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const updateScore = score => {
  document.querySelector('.score').textContent = score;
};

const initializeGame = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  updateScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  // Set highscore from the stored value
  highscore = Number(document.querySelector('.highscore').textContent);
};

const checkGuess = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Not a Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Guess is high!' : 'Guess is low!');
      score--;
      updateScore(score);
    } else {
      displayMessage('You lost the game!');
      updateScore(0);
    }
  }
};

document.querySelector('.again').addEventListener('click', initializeGame);
document.querySelector('.check').addEventListener('click', checkGuess);

initializeGame();
