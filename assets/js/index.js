function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}
function getHumanChoice() {
    let humanChoice = parseInt(
        prompt(
            "Please enter your choice: 1 is Rock, 2 is Paper and 3 is Scissors.",
            "1"
        )
    );
    let notNumber = true;
    while (notNumber) {
        if (
            Number.isInteger(humanChoice) &&
            humanChoice <= 3 &&
            humanChoice > 0
        ) {
            return humanChoice;
            notNumber = false;
        } else {
            humanChoice = parseInt(
                prompt(
                    "Please re-enter your choice: 1 is Rock, 2 is Paper and 3 is Scissors.",
                    "1"
                ));
        }
        
    }
}

