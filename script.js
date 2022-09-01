'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
let secretNum = Math.ceil(Math.random() * 20);
console.log(secretNum);
let score = 20;
let highscore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const bodyColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const scoreValue = value => {
  document.querySelector('.score').textContent = value;
};

const numberContent = content => {
  document.querySelector('.number').textContent = content;
};

const numberWidth = width => {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there's no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
  }

  // when player wins
  else if (guess === secretNum) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    // document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').textContent = secretNum;
    // document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉 Correct Number!');
    numberContent(secretNum);
    bodyColor('#60b347');
    numberWidth('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNum) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNum ? 'Guess is too high📈' : 'Guess is too low📉';
      displayMessage(
        guess > secretNum ? 'Guess is too high📈' : 'Guess is too low📉'
      );
      score--;
      // document.querySelector('.score').textContent = score;
      scoreValue(score);
    } else {
      displayMessage('You lost the game!💥');
      document.querySelector('.score').textContent = 0;
      scoreValue(0);
      // document.querySelector('.message').textContent = 'You lost the game!💥';
    }
  }

  // when guess is low
  // else if (guess < secretNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess is too low📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.ceil(Math.random() * 20);
  document.querySelector('.guess').value = '';
  numberWidth('15rem');
  console.log(secretNum);
  scoreValue(score);
  displayMessage('Start guessing...');
  bodyColor('#222');
  numberContent('?');
  // document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.number').textContent = '?';
  // document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  // document.querySelector('body').style.backgroundColor = '#222';
});
