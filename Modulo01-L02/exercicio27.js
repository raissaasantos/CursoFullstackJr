/*
Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/

const prompt = require('prompt-sync')();

function multiplicarMatriz(matriz, a) {
    let vetor = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vetor.push(matriz[i][j] * a);
        }
    }
    return vetor;
}

function preencherMatriz() {
    let matriz = [];
    for (let i = 0; i < 6; i++) {
        matriz[i] = [];
        for (let j = 0; j < 6; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }
    return matriz;
}


function imprimirVetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log("V[" + i + "]: " + vetor[i]);
    }
}

const M = preencherMatriz();
const A = parseFloat(prompt("Digite o valor de A:"));

const V = multiplicarMatriz(M, A);

console.log("Vetor V(36):");
imprimirVetor(V);
