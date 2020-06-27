let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallCompWord = "comp".fontsize(3).sup();
const smallUserWord = "user".fontsize(3).sup();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToLetter(letter) {
    if (letter === 'r') return "Rock";
    else if (letter === 's') return "Scissor";
    return "Paper";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice).classList;
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToLetter(userChoice)}${smallUserWord} beats ${convertToLetter(computerChoice)}${smallCompWord}. You WIN!`;
    userChoice_div.add('green-glow');
    setTimeout(() => userChoice_div.remove('green-glow'), 300);
}

function loose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice).classList;
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToLetter(computerChoice)}${smallCompWord} beats ${convertToLetter(userChoice)}${smallUserWord}. You LOOSE!`
    userChoice_div.add('red-glow');
    setTimeout(() => userChoice_div.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice).classList;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToLetter(userChoice)}${smallUserWord} equals ${convertToLetter(computerChoice)}${smallCompWord}. It's a DRAWWW!`;
    userChoice_div.add('grey-glow');
    setTimeout(() => userChoice_div.remove('grey-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice);
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            loose(userChoice, computerChoice);
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"))
    paper_div.addEventListener('click', () => game("p"))
    scissors_div.addEventListener('click', () => game("s"))
}

main();