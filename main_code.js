let element = ["Rock", "Paper", "Scissors", "Rock"];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let random = Math.floor(Math.random() * 3);  //gives a value between 0 and 2
  return random;
      //return ("unexpected error"; console.error("Random compueter selection");)
}

function capitalize(string)
{
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
  let i = 0;
  console.log("Computer Score: " + computerScore + " Player Score: " + playerScore);
  while (i < 5) {
    let playerSelection = prompt("Choose Wisely");
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log("Computer Score: " + computerScore + " Player Score: " + playerScore);
  }

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
}

game();
