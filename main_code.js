const element = ["Rock", "Paper", "Scissors", "Rock"];
let computerScore = 0;
let playerScore = 0;

const diplayPlayerScore = document.querySelector('#diplayPlayerScore');
const diplayComputerScore = document.querySelector('#diplayComputerScore');
const dispayComputerSelection = document.querySelector('#dispayComputerSelection');
const displayWiner = document.querySelector('#displayWiner');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', game);
});

function dispayScore() {
  diplayComputerScore.textContent = computerScore;
  diplayPlayerScore.textContent = playerScore;
}

function resetScore(){
  computerScore = 0;
  playerScore = 0;
}

function computerPlay() {
  let random = Math.floor(Math.random() * 3);  //gives a value between 0 and 2
  return random;
      //return ("unexpected error"; console.error("Random compueter selection");)
}

function capitalize(string){
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  playerSelection = element.indexOf(playerSelection);
  if (playerSelection != -1){
    if (playerSelection == computerSelection){
      return console.log("Draw!");
    } else if (element[playerSelection+1] == element[computerSelection]) {
      computerScore ++;
      return console.log("You Lose "+ element[computerSelection] + " defets " + element[playerSelection]);
    } else {
      playerScore ++;
      return console.log("You Win! " + element[playerSelection] + " defets " + element[computerSelection]);
    }
  }
  return console.error("Try typing again");
}

function game(e) {
  let playerSelection = e.target.id;
  let computerSelection = computerPlay();
  dispayComputerSelection.textContent = element[computerSelection];
  playRound(playerSelection, computerSelection);
  dispayScore();
  if (playerScore == 5){
    displayWiner.textContent = "Player Wins";
    resetScore();
  } else if (computerScore == 5) {
    displayWiner.textContent = "Computer Wins";
    resetScore();
  } else {displayWiner.textContent = "";}
}
