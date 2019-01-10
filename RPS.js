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
  document.body.appendChild(chooseBlock);
  chooseBlock.innerHTML = 'Choose a Weapon!';
  results.innerHTML = '';

  let opponentChoices = ['Rock', 'Paper', 'Scissors'];

  randomChoice = opponentChoices[Math.floor(Math.random() * opponentChoices.length)];

  console.log(randomChoice);
}

let results = document.createElement('H1');
document.body.appendChild(results);

rockBtn.onclick = function () {
  chooseBlock.innerHTML = '';
  if (randomChoice == 'Scissors') {
    results.innerHTML = 'You Win!'
  } else if (randomChoice == 'Paper') {
    results.innerHTML = 'You Lose!'
  } else if (randomChoice == 'Rock') {
    results.innerHTML = 'Draw!'
  }
}

paperBtn.onclick = function () {
  chooseBlock.innerHTML = '';
  if (randomChoice == 'Scissors') {
    results.innerHTML = 'You Lose!'
  } else if (randomChoice == 'Paper') {
    results.innerHTML = 'Draw!'
  } else if (randomChoice == 'Rock') {
    results.innerHTML = 'you Win!'
  }
}

scissorsBtn.onclick = function () {
  chooseBlock.innerHTML = '';
  if (randomChoice == 'Scissors') {
    results.innerHTML = 'Draw!'
  } else if (randomChoice == 'Paper') {
    results.innerHTML = 'you Win!'
  } else if (randomChoice == 'Rock') {
    results.innerHTML = 'you Lose!'
  }
}





