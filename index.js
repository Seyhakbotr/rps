let num;

let player
function getComputerChoice() {

     num = Math.floor(Math.random() * 3) + 1;
     switch (num) {
        case 1: return 'r';
        case 2: return 'p';
        case 3: return 's';
            
        default:
            alert("Invalid characters!");
            break;
     }
    return num;
    

}

function playRPS(playerSelection,computerSelection) {
        if (playerSelection === computerSelection){
            console.log("It's a Tie!");
        } else if (playerSelection === 'r' && computerSelection === 's'){
            console.log("You win! Rock beat scissors");
        } else if (playerSelection === 'p' && computerSelection === 'r'){
            console.log("You win! Paper beat rock");
        } else if (playerSelection === 's' && computerSelection === 'p'){
            console.log("You win! Scissors beat Paper");
        } else if (computerSelection === 'r' && playerSelection == 's'){
            console.log("You lose! Paper beat rock");            
        } else if (computerSelection === 'p' && playerSelection === 'r'){
            console.log("You lose! Paper beat rock");            
        } else if (computerSelection === 's' && playerSelection === 's'){
            console.log("You lose! Paper beat rock");   
        }
        return playerSelection, computerSelection;
}
function getUserChoice(){
    while(player != 'r' && player != 'p' && player != 's'){
    player = prompt("Please choose one of the following\n 'r' for rock \n 'p' for paper \n 's' for scissors \n");
    switch (player) {
        case 'r': return 'r';
        case 'p': return 'p';
        case 's': return 's';
            
        default:
            alert("Invalid characters!");
            break;
     }
    }
    return player;
}

function game() {
    
}


const computerSelection = getComputerChoice();
const playerSelection = getUserChoice();
alert(getUserChoice());
console.log(playRPS(playerSelection,computerSelection));

// console.log(getComputerChoice(num));
