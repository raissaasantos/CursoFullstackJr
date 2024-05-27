/*
Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/

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


function calcularSomas(matriz) {
    let SL = Array(matriz.length).fill(0);
    let SC = Array(matriz[0].length).fill(0);

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            SL[i] += matriz[i][j];
            SC[j] += matriz[i][j];
        }
    }

    return { SL, SC };
}

function exibirResultados(matriz, SL, SC) {
    console.log("Matriz M(5,5):");
    matriz.forEach(linha => console.log(linha));

    console.log("\nVetor SL (somas das linhas):");
    console.log(SL);

    console.log("\nVetor SC (somas das colunas):");
    console.log(SC);
}

const rows = 5;
const cols = 5;

let matriz = criarMatriz(rows, cols);
let { SL, SC } = calcularSomas(matriz);

exibirResultados(matriz, SL, SC);
