let round = 1;
let playerScore = 0;
let computerScore = 0;
function computerPlay(){
        let moves = ["rock", "paper", "scissors"];
        return moves[Math.floor((Math.random()*3))];
    }

function playRound(playerMove, computerMove){
    console.log("You play " + playerMove)
    console.log("Computer plays " + computerMove);
    if (playerMove === computerMove)
         return "Tie";
    else if (playerMove == "rock"){
        if (computerMove == "paper"){
            computerScore++;
            return "Computer Wins round " + round;
        }
        else if(computerMove === "scissors"){
            playerScore++;
            return "Player wins round " + round;
        }
    }
    else if (playerMove == "paper"){
        if (computerMove == "rock"){
            playerScore++;
            return "Player Wins round " + round;
        }
        else if(computerMove === "scissors"){
            computerScore++;
            return "Computer wins round " + round;  
        }
    }
    else if (playerMove == "scissors"){
        if (computerMove == "paper"){
            playerScore++;
            return "Player Wins round " + round; 
        }
        else if(computerMove === "rock"){
            computerScore++;
            return "Computer wins round " + round;
        }
    }
      
}
function getPlayerMove(button){
    let playerMove = button.value;
    console.log(playRound(playerMove, computerPlay()));
    updateGame(); 
}
function showButtons(){
        let div = document.getElementsByClassName("play-buttons")[0];
        div.childNodes.forEach(function(button){
            if(button.tagName == "BUTTON")
            button.style.visibility="visible";
        }); 
}

function updateGame(){
        console.log("Scores after round " + round + ":")
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
        console.log(" ");
        round++;
    /*
    if(playerScore == 3)
        console.log("Hooray! Player Wins!");
    else if(computerScore == 3)
        console.log("Sorry, you lost.");
        */

    
}

function resetGame(){
    //reset game
    round = 1;
    playerScore = 0;
    computerScore = 0;
}