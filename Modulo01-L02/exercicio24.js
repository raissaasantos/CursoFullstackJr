/*
Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

function contarNegativosPorLinha(M) {
    let C = [];

    for (let i = 0; i < M.length; i++) {
        let count = 0; 
        
        for (let j = 0; j < M[i].length; j++) {
            if (M[i][j] < 0) {
                count++;
            }
        }
        
        C.push(count);
    }

    return C;
}

const M = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [2, 4, -6, 8, -10, 12, -14, 16],
    [3, 6, 9, -12, 15, -18, 21, 24],
    [4, -8, 12, -16, 20, -24, 28, 32],
    [5, 10, 15, 20, -25, -30, 35, 40],
    [-6, -12, -18, -24, -30, -36, -42, -48]
];


const vetorC = contarNegativosPorLinha(M);
console.log("Quantidade de elementos negativos por linha:");
console.log(vetorC);
