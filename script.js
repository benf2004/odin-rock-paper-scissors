function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    if (num === 0) {
        return "rock"
    }
    else if (num === 1) {
        return "paper"
    }
    else if (num === 2) {
        return "scissors"
    }
}
let playerWins; let computerWins;
function resetBoard() {
    playerWins = 0;
    computerWins = 0;
}
resetBoard()

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function playRound(playerSelection, computerSelection){
    let ps = playerSelection.toLowerCase()
    let cs = computerSelection.toLowerCase() // not really needed but eh
    const computer_win = "rockpaper paperscissors scissorsrock";
    const player_win = "paperrock scissorspaper rockscissors";
    const roundResult = ps + cs
    if (computer_win.includes(roundResult)){
        let msg = `You lose! ${capitalize(cs)} beats ${ps}.`
        handleWin(msg, "computer")
    }
    else if (player_win.includes(roundResult)){
        let msg = `You win! ${capitalize(ps)} beats ${cs}.`
        handleWin(msg, "player")
    }
    else {
        let msg = `You tied!`
        handleWin(msg, "tie")
    }
}

function triggerEnd(){
    const playerWon = playerWins >= 5
    let winner_message = ""
    if (playerWon) winner_message = "Congrats! You won!"
    else winner_message = "Wah wah wah... you lost..."
    document.getElementById("winnerMsg").innerText = winner_message
    resetBoard()
}

function handleWin(message, winner){
    document.getElementById("winMsg").innerText = message
    if (winner === "player") playerWins++
    if (winner === "computer") computerWins++
    document.getElementById("playerScore").innerText = playerWins.toString()
    document.getElementById("computerScore").innerText = computerWins.toString()
    if (playerWins >= 5 || computerWins >= 5) triggerEnd()
}

const btns = document.querySelectorAll(".btn")
for (let btn of btns){
    btn.addEventListener("click", () => playRound(btn.id, getComputerChoice()))
}