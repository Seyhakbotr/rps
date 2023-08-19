
let computer;

function getPlayerChoice()
{
    let player;
    do{
        player = prompt("Please enter: Rock,Paper,Scissors").toLowerCase();

    }while(player != "rock" && player != "paper" && player != "scissors");
    return player;
}   

function getComputerChoice(){
    let computer = Math.floor(Math.random()*3) + 1;
    switch (computer) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        return "tie";
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You win! ${playerSelection} beat ${computerSelection}`);
        return "player";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`You win!${playerSelection} beat ${computerSelection}`);
        return "player";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You win!${playerSelection} beat ${computerSelection}`);
        return "player";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log(`You lose!${computerSelection} beat ${playerSelection}`);
        return "computer";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log(`You lose!${computerSelection} beat ${playerSelection}`);
        return "computer";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log(`You lose!${computerSelection} beat ${playerSelection}`);
        return "computer";
    }

}
function printResult()
{
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5)
    {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice,computerChoice);
        if (result == "player")
        {
            playerScore++;
        } else if (result == "computer")
        {
            computerScore++;
        }
    }
    
    if (playerScore == 5)
    {
        console.log(`Player Win!`);
    } else if (computerScore == 5)
    {
        console.log(`Computer Win!`);
    } else {
        console.log(`It's a tie!`);
    }
}
printResult();
// test