import * as readlineSync from 'readline-sync';

function rps() {
    let player = readlineSync.question("rock, paper or scissors?")
    let computer = Math.floor(Math.random() * 3);
    let computerChoice = ''
    if (computer === 0) {
        computerChoice = 'rock'
    } else if (computer === 1) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    console.log(`Computer chose ${computerChoice}`)
    if (player === computerChoice) {
        console.log('It\'s a tie!')
    } else if (player === 'rock' && computerChoice === 'scissors' || player === 'paper' && computerChoice === 'rock' || player === 'scissors' && computerChoice === 'paper') {
        console.log('You win!')
    } else {
        console.log('You lose!')
    }
}
const game = rps();
