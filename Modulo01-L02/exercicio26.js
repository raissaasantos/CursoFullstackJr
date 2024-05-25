/*
Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].
*/

function produtoMatrizes(A, B) {
    if (A.length !== B.length || A[0].length !== B[0].length) {
        console.log("As dimensões das matrizes não são compatíveis para a multiplicação.");
        return;
    }

    let P = [];
    for (let i = 0; i < A.length; i++) {
        P[i] = [];
        for (let j = 0; j < A[0].length; j++) {
            P[i][j] = A[i][j] * B[i][j];
        }
    }
    return P;
}


const A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

const B = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];


const P = produtoMatrizes(A, B);

console.log("Matriz Produto P:");
for (let i = 0; i < P.length; i++) {
    console.log(P[i]);
}
