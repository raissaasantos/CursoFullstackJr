/*
Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/


function somaTotal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}


function somaLinha(matriz, linha) {
    let soma = 0;
    for (let j = 0; j < matriz[linha].length; j++) {
        soma += matriz[linha][j];
    }
    return soma;
}


function somaColuna(matriz, coluna) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][coluna];
    }
    return soma;
}


function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}


function exibirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}


let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];


let somaLinha4 = somaLinha(M, 3);
let somaColuna2 = somaColuna(M, 1);
let somaDiagonal = somaDiagonalPrincipal(M);
let somaTotalMatriz = somaTotal(M);


console.log("Matriz M:");
exibirMatriz(M);
console.log("\nSoma da linha 4: " + somaLinha4);
console.log("Soma da coluna 2: " + somaColuna2);
console.log("Soma da diagonal principal: " + somaDiagonal);
console.log("Soma de todos os elementos da matriz: " + somaTotalMatriz);
