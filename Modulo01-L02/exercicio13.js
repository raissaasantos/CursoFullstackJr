/*
Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

function fibonacciSequence(length) {
    let sequence = [1, 1];
    for (let i = 2; i < length; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

const fibonacciArray = fibonacciSequence(15);
console.log(`Os 15 primeiros elementos da Sequência de Fibonacci são ${fibonacciArray}`);

