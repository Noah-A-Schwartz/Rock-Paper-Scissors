let round = 1;
let playerScore = 0;
let computerScore = 0;
function computerPlay(){
        let moves = ["rock", "paper", "scissors"];
        return moves[Math.floor((Math.random()*3))];
    }

function playRound(playerMove, computerMove){
    document.getElementsByTagName("P")[0].textContent = "You play " + playerMove + " and Computer plays " + computerMove;
    console.log("You play " + playerMove)
    console.log("Computer plays " + computerMove);
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
function showButtons(){
        textAreas = document.getElementsByTagName("DIV");
        textAreas[4].appendChild(document.createElement("p"));
        textAreas[5].appendChild(document.createElement("p"));
        textAreas[6].appendChild(document.createElement("p"));
        resetGame();
        let div = document.getElementsByClassName("play-buttons")[0];
        div.childNodes.forEach(function(button){
            if(button.tagName == "BUTTON")
            button.style.visibility="visible";
        }); 
        button = document.getElementsByTagName("BUTTON")[0];
        button.disabled = "true";
}

function updateGame(result){
        document.getElementsByTagName("P")[1].textContent ="Scores after round " +  round + ": ";
        document.getElementsByTagName("P")[2].textContent = "Player: " + playerScore + "\n" + "Computer: " + computerScore;
        if(result == 0){
            document.getElementById("flashtext").textContent = "YOU WIN THIS ROUND!"
        }
        else if(result == 1){
            document.getElementById("flashtext").textContent = "YOU LOSE THIS ROUND!"
        }
        else document.getElementById("flashtext").textContent = "ITS A TIE";
        document.getElementById("flashtext").style.visibility = "visible";
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
    document.getElementsByTagName("P")[0].textContent = "";
    document.getElementsByTagName("P")[1].textContent = "";
    document.getElementsByTagName("P")[2].textContent = "Player: " + playerScore + "\n" + "Computer: " + computerScore;
    document.getElementById("flashtext").style.visibility = "hidden";
}