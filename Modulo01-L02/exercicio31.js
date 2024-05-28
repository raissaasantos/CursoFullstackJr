/*
Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/

const prompt = require('prompt-sync')();

function generateMatrix(size) {
    const matrix = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(Math.floor(Math.random() * 100)); 
        }
        matrix.push(row);
    }
    return matrix;
}


function processMatrix(matrix, A) {
    let count = 0;
    const X = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === A) {
                count++;
            } else {
                X.push(matrix[i][j]);
            }
        }
    }

    return { count, X };
}


function main() {
    const A = parseInt(prompt("Digite um número inteiro A:"));
    const V = generateMatrix(30);

    console.log("Matriz V:");
    console.table(V);

    const { count, X } = processMatrix(V, A);

    console.log(`Número de valores iguais a ${A} na matriz: ${count}`);
    console.log("Matriz X (valores diferentes de A):");
    console.table(X);
}

main();
