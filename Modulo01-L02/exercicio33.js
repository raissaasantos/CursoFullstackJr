/*
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

const prompt = require('prompt-sync')();

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para matriz[${i}][${j}]: `));
        }
    }
    return matriz;
}

function mediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][2 - i];
    }
    return soma / 3;
}

function multiplicarDiagonalPrincipal(matriz, media) {
    for (let i = 0; i < 3; i++) {
        matriz[i][i] *= media;
    }
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join(' '));
    }
}

function main() {
    let matriz = lerMatriz();
    console.log("Matriz original:");
    imprimirMatriz(matriz);

    let media = mediaDiagonalSecundaria(matriz);
    console.log("Média da diagonal secundária:", media.toFixed(1));

    multiplicarDiagonalPrincipal(matriz, media);
    console.log("Matriz após multiplicação da diagonal principal:");
    imprimirMatriz(matriz);
}

main();

  