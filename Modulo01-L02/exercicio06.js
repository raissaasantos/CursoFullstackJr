/* Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.
*/

function randomNum(guess){
    const numbers = [1, 2, 3, 4, 5];
    const computerChoice = numbers[Math.floor(Math.random() * numbers.length)];
    let answer;

    if (guess == computerChoice){
        answer = "Você acertou!"
    }
    else{
        answer = "Você errou!"
    }

    console.log(`Você escolheu ${guess}, o número sorteado era ${computerChoice}. ${answer}`);
}

const prompt = require('prompt-sync')();

console.log("Um número de 1 a 5 foi sorteado, adivinhe qual foi!")
const guess = prompt("Qual é o seu chute? ");
const rightNumber = randomNum(guess);