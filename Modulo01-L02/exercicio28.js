/*
Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
*/

function randomMatriz() {
    let matriz = [];
    for (let i = 0; i < 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }
    return matriz;
}



function aboveDiagonalSum(matriz) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
            sum += matriz[i][j];
        }
    }
    return sum;
}


function belowDiagonalSum(matriz) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            sum += matriz[i][j];
        }
    }
    return sum;
}


const matriz = randomMatriz();
const sumAbove = aboveDiagonalSum(matriz);
const sumBelow = belowDiagonalSum(matriz);

console.log("Soma dos elementos acima da diagonal principal:", sumAbove);
console.log("Soma dos elementos abaixo da diagonal principal:", sumBelow);
