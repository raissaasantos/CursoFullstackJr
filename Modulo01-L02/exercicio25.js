/*
Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function randomMatriz() {
    let matriz = [];
    for (let i = 0; i < 15; i++) {
        matriz[i] = [];
        for (let j = 0; j < 20; j++) {
            matriz[i][j] = getRandomNumber(0, 100);
        }
    }
    return matriz;
}


function columnSum(matriz) {
    let somasColunas = [];
    for (let j = 0; j < matriz[0].length; j++) {
        let soma = 0;
        for (let i = 0; i < matriz.length; i++) {
            soma += matriz[i][j];
        }
        somasColunas.push(soma);
    }
    return somasColunas;
}

const matrizAleatory = randomMatriz();
const summingColumn = columnSum(matrizAleatory);


console.log("Soma de cada coluna:");
for (let j = 0; j < summingColumn.length; j++) {
    console.log("Coluna " + (j + 1) + ": " + summingColumn[j].toFixed(2));
}
