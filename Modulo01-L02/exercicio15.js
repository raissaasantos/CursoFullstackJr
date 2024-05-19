/*
Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/

const prompt = require('prompt-sync')();

let numbers = []; 


function readNum() {
    for (let i = 1; i <= 10; i++) {
        const num = parseInt(prompt(`Digite o ${i}º número: `));
        numbers.push(num);
    }
}


function evenNumbers() {
    console.log("Números pares digitados e suas posições:");
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(`Número ${numbers[i]} na posição ${i}`);
        }
    }
}

readNum();
evenNumbers();
