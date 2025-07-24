const optionBtn = document.querySelectorAll('.btn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => location.reload());
optionBtn.forEach(button => {
  button.addEventListener('click', getPlayerChoice);
});


function getPlayerChoice(e){
 let playerChoice=e.target.id;
 let choice=["rock","paper","scissors"];
 let index=Math.floor(Math.random()*3);
 let computerChoice=choice[index];
 console.log(playerChoice+" "+computerChoice);
 playRound(playerChoice,computerChoice);
}
let playerScore=0,computerScore=0;
function playRound(playerChoice,computerChoice){

const winMap = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

if (playerChoice === computerChoice) {
  roundResults.textContent="IT'S A TIE!";
} else if (winMap[playerChoice] === computerChoice) {
  roundResults.textContent=`${playerChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}`;
  playerScore++;
  playerPoints.textContent=playerScore;
} else {
  roundResults.textContent=`${computerChoice.toUpperCase()} BEATS ${playerChoice.toUpperCase()}`;
  computerScore++;
  computerPoints.textContent=computerScore;
}
if(computerScore===5||playerScore===5){
  if(computerScore>playerScore){
    roundResults.textContent="YOU LOSS!!";
    roundResults.style.color="red";

  }else{
    roundResults.textContent="YOU WON!!";
    roundResults.style.color="green";
  }
  optionBtn.forEach(button=>{
    button.disabled=true;
  });
}
}


