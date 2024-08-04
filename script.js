function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "paper";
    } else if (result === 1) {
        return "rock";
    } else {
        return "scissors";
    }
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

document.getElementById("rock").addEventListener("click", function() {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors");
});

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    document.getElementById("player-choice").textContent = "Player Choice: " + playerChoice;
    document.getElementById("computer-choice").textContent = "Computer Choice: " + computerChoice;
    document.getElementById("winner").textContent = "Winner: " + winner;
}
