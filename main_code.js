let element = ["Rock", "Paper", "Scissors", "Rock"];
function computerPlay() {
  const random = Math.floor(Math.random() * 3);  //gives a value between 0 and 2
  return random;
      //return ("unexpected error"; console.error("Random compueter selection");)
}

function capitalize(string)
{
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  playerSelection = element.indexOf(playerSelection);
  if (playerSelection != -1){
    if (playerSelection == computerSelection){
      return "Draw!";
    } else if (element[playerSelection+1] == element[computerSelection]) {
      return "Lose "+ element[computerSelection] + " defets " + element[playerSelection];
    } else {
      return "Win " + element[playerSelection] + " defets " + element[computerSelection];
    }
  }
  return "Try tiping again";
}

let playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
