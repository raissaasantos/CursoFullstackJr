/*
Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/


function randomMatriz() {
    let matriz = [];
    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100); 
        }
    }
    return matriz;
}


function calcularSomas(matriz) {
    let SL = []; 
    let SC = []; 

    for (let i = 0; i < matriz.length; i++) {
        let somaLinha = 0;
        let somaColuna = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            somaLinha += matriz[i][j]; 
            somaColuna += matriz[j][i]; 
        }
        SL.push(somaLinha); 
        SC.push(somaColuna); 
    }

    return { SL, SC };
}


function exibirMatrizEVetores(matriz, SL, SC) {
    console.log("Matriz M:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
    console.log("\nVetor SL (Somas das linhas):");
    console.log(SL.join('\t'));
    console.log("\nVetor SC (Somas das colunas):");
    console.log(SC.join('\t'));
}


let M = randomMatriz();
let { SL, SC } = calcularSomas(M);
exibirMatrizEVetores(M, SL, SC);
