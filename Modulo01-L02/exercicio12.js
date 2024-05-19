/*
Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

function fibonacci(element) {
    let fibSequence = [1, 1];
    for (let i = 2; i < element; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence.slice(0, element);
}

const firstTen = fibonacci(10);
console.log(`Os 10 primeiros elementos da Sequência de Fibonacci são ${firstTen}.`);

