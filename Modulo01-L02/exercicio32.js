/*
Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/


const prompt = require('prompt-sync')();

function criarMatriz(rows, cols) {
    let matriz = [];
    for (let i = 0; i < rows; i++) {
        let linha = [];
        for (let j = 0; j < cols; j++) {
            linha.push(Math.floor(Math.random() * 100)); 
        }
        matriz.push(linha);
    }
    return matriz;
}


function contarValores(matriz, A) {
    let count = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === A) {
                count++;
            }
        }
    }
    return count;
}


function criarMatrizX(matriz, A) {
    let matrizX = [];
    for (let i = 0; i < matriz.length; i++) {
        let linha = [];
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] !== A) {
                linha.push(matriz[i][j]);
            }
        }
        matrizX.push(linha);
    }
    return matrizX;
}


function exibirResultados(matriz, count, matrizX) {
    console.log("Matriz V(30,30):");
    matriz.forEach(linha => console.log(linha));

    console.log(`\nNúmero de elementos iguais a A: ${count}`);

    console.log("\nMatriz X (elementos de V diferentes de A):");
    matrizX.forEach(linha => console.log(linha));
}


const rows = 30;
const cols = 30;

const A = parseInt(prompt("Digite um número inteiro A: "));

let matrizV = criarMatriz(rows, cols);
let count = contarValores(matrizV, A);
let matrizX = criarMatrizX(matrizV, A);

exibirResultados(matrizV, count, matrizX);
