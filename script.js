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
        return `You lose! ${capitalize(cs)} beats ${ps}.`
    }
    else if (player_win.includes(roundResult)){
        return `You win! ${capitalize(ps)} beats ${cs}.`
    }
    else if (ps === cs){
        return `You tied!`
    }
    else {
        return "Uh oh! Not a valid input!"
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let gameResult = playRound(prompt("Choose rock, paper, or scissors"), getComputerChoice())
        console.log(gameResult)
        let playerWin = gameResult.charAt(4) === "w"
        let computerWin = gameResult.charAt(4) === "l"
        if (playerWin) playerScore += 1
        else if (computerWin) computerScore += 1
    }
    console.log(`The final score is:\n Player: ${playerScore} \n Computer: ${computerScore}`)
}
game()