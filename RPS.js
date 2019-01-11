let startBtn = document.createElement('BUTTON');
let rockBtn = document.createElement('BUTTON');
let paperBtn = document.createElement('BUTTON');
let scissorsBtn = document.createElement('BUTTON');
let startText = document.createTextNode('Play!');
startBtn.appendChild(startText);

let rockText = document.createTextNode('Rock');
rockBtn.appendChild(rockText);

let paperText = document.createTextNode('Paper');
paperBtn.appendChild(paperText);

let scissorsText = document.createTextNode('Scissors');
scissorsBtn.appendChild(scissorsText);

document.body.appendChild(startBtn);
document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);

let chooseBlock = document.createElement('H1');

let randomChoice;

startBtn.onclick = function () {
  rockBtn.id = '';
  paperBtn.id = '';
  scissorsBtn.id = '';
  document.body.appendChild(chooseBlock);
  chooseBlock.innerHTML = '';
  results.innerHTML = '';

  let opponentChoices = ['Rock', 'Paper', 'Scissors'];

  randomChoice = opponentChoices[Math.floor(Math.random() * opponentChoices.length)];

  console.log(randomChoice);

  countDown();
}

function countDown() {
  let timeLeft = 4;
  let timeShow = document.createElement('H1');
  document.body.appendChild(timeShow);


  let countDownTimer = setInterval(function () {
    timeLeft--;

    timeShow.innerHTML = timeLeft;

    console.log(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(countDownTimer);
      document.body.removeChild(timeShow);
      chooseBlock.innerHTML = 'Choose a Weapon!';

    }
  }, 750);
}

let results = document.createElement('H1');
document.body.appendChild(results);

let choice = 'Your opponent chose ';

rockBtn.onclick = function () {
  rockBtn.id = 'btnPress';
  scissorsBtn.id = '';
  paperBtn.id = '';
  chooseBlock.innerHTML = '';
  if (randomChoice == 'Scissors') {
    results.innerHTML = 'You Win! ' + choice + 'scissors!';
  } else if (randomChoice == 'Paper') {
    results.innerHTML = 'You Lose! ' + choice + 'paper!';
  } else if (randomChoice == 'Rock') {
    results.innerHTML = 'Draw! ' + choice + 'rock!';
  }
}

paperBtn.onclick = function () {
  paperBtn.id = 'btnPress';
  rockBtn.id = '';
  scissorsBtn.id = '';
  chooseBlock.innerHTML = '';
  if (randomChoice == 'Scissors') {
    results.innerHTML = 'You Lose! ' + choice + 'scissors!';
  } else if (randomChoice == 'Paper') {
    results.innerHTML = 'Draw! ' + choice + 'paper!';
  } else if (randomChoice == 'Rock') {
    results.innerHTML = 'you Win! ' + choice + 'rock!';
  }
}

scissorsBtn.onclick = function () {
  scissorsBtn.id = 'btnPress';
  rockBtn.id = '';
  paperBtn.id = '';
  chooseBlock.innerHTML = '';
  if (randomChoice == 'Scissors') {
    results.innerHTML = 'Draw! ' + choice + 'scissors!';
  } else if (randomChoice == 'Paper') {
    results.innerHTML = 'you Win! ' + choice + 'paper!';
  } else if (randomChoice == 'Rock') {
    results.innerHTML = 'you Lose! ' + choice + 'rock!';
  }
}





