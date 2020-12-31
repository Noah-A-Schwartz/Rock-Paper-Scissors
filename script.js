let round = 1;
let playerScore = 0;
let computerScore = 0;
function computerPlay(){
        let moves = ["rock", "paper", "scissors"];
        return moves[Math.floor((Math.random()*3))];
    }

function playRound(playerMove, computerMove){
    document.getElementsByTagName("P")[0].textContent = "You play " + playerMove + " and Computer plays " + computerMove;
    if (playerMove === computerMove)
         return -1;
    else if (playerMove == "rock"){
        if (computerMove == "paper"){
            computerScore++;
            return 1;
        }
        else if(computerMove === "scissors"){
            playerScore++;
            return 0;
        }
    }
    else if (playerMove == "paper"){
        if (computerMove == "rock"){
            playerScore++;
            return 0;
        }
        else if(computerMove === "scissors"){
            computerScore++;
            return 1  ;
        }
    }
    else if (playerMove == "scissors"){
        if (computerMove == "paper"){
            playerScore++;
            return 0;
        }
        else if(computerMove === "rock"){
            computerScore++;
            return 1;
        }
    }
      
}
function getPlayerMove(button){
    let playerMove = button.value;
    let computerMove = computerPlay();
    let result = playRound(playerMove, computerMove);
    updateGame(result); 
}

function disableButtons(){
    let div = document.querySelectorAll(".game-button");
        div.forEach(function(button){
            button.disabled=true;
        }); 
}

function enableButtons(){
    let div = document.querySelectorAll(".game-button");
        div.forEach(function(button){
            button.disabled=false;
        }); 
        reset = document.querySelector(".reset-button");
        reset.disabled = false;
        
}

function startGame(playButton){
        let button = document.querySelectorAll(".game-button");
        button.forEach(function(button){
        button.style.visibility = "visible";
    }); 
        button = document.querySelector(".reset-button");
        button.style.visibility = "visible";
        playButton.disabled = "true";

        
        let div = document.querySelector(".scores");
        div.style.visibility = "visible";

        resetGame();
        reset = document.querySelector(".reset-button");
        reset.style.visibility = "visible";
        button = document.getElementsByTagName("BUTTON")[0];
        button.style.visibility = "visible";
}

function updateGame(result){
        document.getElementById("move").textContent ="Scores after round " +  round + ": ";
        document.getElementById("round").textContent = "Player: " + playerScore + "\n" + "Computer: " + computerScore;
        if(result == 0){
            document.getElementById("flashtext").textContent = "YOU WIN THIS ROUND!"
        }
        else if(result == 1){
            document.getElementById("flashtext").textContent = "YOU LOSE THIS ROUND!"
        }
        else document.getElementById("flashtext").textContent = "ITS A TIE";
        document.getElementById("flashtext").style.visibility = "visible";
        round++;
    
    if(playerScore == 5){
        document.getElementById("flashtext").textContent = "YOU WIN THE GAME! Click reset to play again."
        disableButtons();
    }
    if(computerScore == 5){
        document.getElementById("flashtext").textContent = "YOU LOSE THE GAME! Click reset to play again."
        disableButtons();
    }
        

    
}

function resetGame(){
    
    round = 1;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("move").textContent = "Player: " + "Computer: ";
    document.getElementById("round").textContent = "Round: ";
    document.getElementById("score").textContent = "Player: " + playerScore + "\n" + "Computer: " + computerScore;
    document.getElementById("flashtext").style.visibility = "hidden";
    enableButtons();
    
}