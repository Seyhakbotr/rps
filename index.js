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
    
}
function getUserChoice(){
    while(player != 'r' && player != 'p' && player != 's'){
    player = prompt("Please choose one of the following\n 'r' for rock \n 'p' for paper \n 's' for scissors \n");
    }
    return player;
}
alert(getUserChoice());
const computerSelection = getComputerChoice();
const playerSelection = getUserChoice();
// console.log(getComputerChoice(num));
