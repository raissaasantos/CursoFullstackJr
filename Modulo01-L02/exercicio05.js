/*
Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

function game (playerChoice){
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (playerChoice === computerChoice){
        result = "Empate!";
    }
    else if(playerChoice === 'pedra' && computerChoice === 'tesoura' || playerChoice === 'papel' && computerChoice === 'pedra' || playerChoice === 'tesoura' && computerChoice === 'papel'){
        result = "Você ganhou!"
    }
    else{
        result = "Você perdeu!"
    }

    console.log(`Você escolheu ${playerChoice}, o computador escolheu ${computerChoice}. ${result}`);
}

const prompt = require('prompt-sync')();

const playerChoice = prompt("Escolha pedra, papel ou tesoura: ");
const whoWon = game(playerChoice);