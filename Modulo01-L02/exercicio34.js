/*
Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/

function gerarMatrizAleatoria() {
    const matriz = [];
    for (let i = 0; i < 50; i++) {
        matriz[i] = [];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10);
        }
    }
    return matriz;
}

function multiplicarLinhasPelaDiagonalPrincipal(matriz) {
    for (let i = 0; i < 50; i++) {
        const elementoDiagonal = matriz[i][i];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] *= elementoDiagonal;
        }
    }
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < 50; i++) {
        console.log(matriz[i].map(num => num).join(' '));
    }
}

function main() {
    const matriz = gerarMatrizAleatoria();
    
    console.log("Matriz original:");
    imprimirMatriz(matriz);

    multiplicarLinhasPelaDiagonalPrincipal(matriz);

    console.log("\nMatriz após multiplicação:");
    imprimirMatriz(matriz);
}

main();
