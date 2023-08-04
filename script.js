'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const message = document.querySelector('.message').textContent;
// const scoreValue = document.querySelector('.score').textContent;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // where there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a Number!';
    // where player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // where guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // where guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
