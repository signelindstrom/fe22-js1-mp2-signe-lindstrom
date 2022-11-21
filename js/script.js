
const nameBtn = document.querySelector('#submitName');
nameBtn.addEventListener('click', submitName);

const restart = document.querySelector('#restartBtn');
restart.style.display = 'none'

const gameDiv = document.querySelector('#gameDiv');
gameDiv.style.display = 'none';

function submitName(event) {
    event.preventDefault();
    const nameInput = document.querySelector('#userName');
    const displayName = document.querySelector('#displayName')
    const displayComputer = document.querySelector('#displayComputer')

    let userName = nameInput.value;
    displayName.innerText = `${userName} väljer...`;
    displayComputer.innerText = 'datorn väljer...'
    nameInput.value = '';
    nameBtn.disabled = true;

    gameDiv.style.display = 'block';
}


const btnRock = document.querySelector('#rock');
const btnScissor = document.querySelector('#scissor');
const btnPaper = document.querySelector('#paper');

let userPoints = 0;
let computerPoints = 0;

btnRock.addEventListener('click', game);
btnScissor.addEventListener('click', game);
btnPaper.addEventListener('click', game);


function game(event) {
    const userChoice = document.querySelector('#userChoice');

    let userPicks = event.target.innerText;
    userChoice.innerText = userPicks;


    const computerChoice = document.querySelector('#computerChoice');
    let computerPicks = Math.round(Math.random() * 2);

    if (computerPicks == 0) {
        computerChoice.innerText = 'sten';
    }

    else if (computerPicks == 1) {
        computerChoice.innerText = 'sax';
    }

    else if (computerPicks == 2) {
        computerChoice.innerText = 'påse';
    }


    pointsCounter(computerPicks, userPicks);

    const points = document.querySelector('#pointsCounter');
    points.innerText = `${userPoints} - ${computerPoints}`;

    decideWinner(computerPoints, userPoints);

}


function pointsCounter(computerPicks, userPicks) {

    if (computerPicks == 0 && userPicks == 'sax' || computerPicks == 1 && userPicks == 'påse' || computerPicks == 2 && userPicks == 'sten') {
        computerPoints++;
    }

    else if (userPicks == 'sten' && computerPicks == 1 || userPicks == 'sax' && computerPicks == 2 || userPicks == 'påse' && computerPicks == 0) {
        userPoints++;
    }
}


function decideWinner(computerPoints, userPoints) {
    let winAnnouncment = document.querySelector('#winAnnouncement');

    if (computerPoints == 3) {
        winAnnouncment.innerText = 'datorn vinner!';
        btnRock.disabled = true;
        btnScissor.disabled = true;
        btnPaper.disabled = true;
        restart.style.display = 'inline-block';
    }

    else if (userPoints == 3) {
        winAnnouncment.innerText = 'du vinner!';
        btnRock.disabled = true;
        btnScissor.disabled = true;
        btnPaper.disabled = true;
        restart.style.display = 'inline-block';
    }
}


restart.addEventListener('click', restartGame)

function restartGame(event) {
    location.reload();
}
