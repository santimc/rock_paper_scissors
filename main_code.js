let element = ["Rock", "Paper", "Scissors", "Rock"];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let random = Math.floor(Math.random() * 3);  //gives a value between 0 and 2
  return random;
      //return ("unexpected error"; console.error("Random compueter selection");)
}

function capitalize(string){
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  console.log("Computer Score: " + computerScore + " Player Score: " + playerScore);
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', game);
  });

  function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    playerSelection = element.indexOf(playerSelection);
    if (playerSelection != -1){
      if (playerSelection == computerSelection){
        i++;
        return console.log("Draw!");
      } else if (element[playerSelection+1] == element[computerSelection]) {
        computerScore ++;
        i ++;
        return console.log("You Lose "+ element[computerSelection] + " defets " + element[playerSelection]);
      } else {
        playerScore ++;
        i++;
        return console.log("You Win! " + element[playerSelection] + " defets " + element[computerSelection]);
      }
    }
    return console.error("Try typing again");
  }

function game(e){
  let playerSelection = e.target.id;
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  const container = document.querySelector('#container');
  console.log("Computer Score: " + computerScore + " Player Score: " + playerScore);
}
