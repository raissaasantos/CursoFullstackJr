/*
Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/

const prompt = require('prompt-sync')();

function calculatingPA() {
    const firstTerm = parseFloat(prompt("Digite o primeiro termo da PA: "));
    const razao = parseFloat(prompt("Digite a razão da PA: "));
    
    let currentTerm = firstTerm;
    let sum = 0;

    console.log("Os 10 primeiros elementos da PA são:");
    for (let i = 1; i <= 10; i++) {
        console.log(currentTerm);
        sum += currentTerm;
        currentTerm += razao;
    }

    console.log(`A soma dos 10 elementos da PA é ${sum}.`); 
}

calculatingPA();
