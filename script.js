
function getComputerChoice(){
 const choice=Math.floor(Math.random()*3);
 let value;
 if(choice==0){
    value="rock";
 }
 else if(choice==1){
    value="paper";
 }
 else if(choice==2){
    value="scissors";
 }
 console.log("Me :"+value);
 return value;
}
function getHumanChoice(){
   let hChoice = prompt("Rock/Paper/Scissors");
   console.log("You :" +hChoice);
   return hChoice;
}


function playGame(){
let humanScore=0,computerScore=0;

function playRound(humanChoicee,computerChoice){
let humanChoice=humanChoicee.toLowerCase();
if(humanChoice==computerChoice){
    console.log("Its a Tie");
}else if(humanChoice=="rock"&&computerChoice=="scissors"){
    console.log("You Won!Rock beats Scissors");
    humanScore++;
}
else if (humanChoice=="scissors"&&computerChoice=="paper"){
    console.log("You Won!Scissors beat Paper");
    humanScore++;
}else if (humanChoice=="paper"&&computerChoice=="rock"){
    console.log("You won!Paper beats Rock");
    humanScore++;
}else{
    console.log(`You Lose :( ${computerChoice} beats ${humanChoice}`);
    computerScore++;
}
}
for(let i=0;i<3;i++){
console.log(`Round: ${i+1}`);
const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();
playRound(humanSelection,computerSelection);
console.log("Your Score : " +humanScore);

}

}
playGame();

