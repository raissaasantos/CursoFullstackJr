/*
Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/


// Função para gerar uma matriz 12x13 preenchida com números inteiros aleatórios
function generateMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 201) - 100); // Números aleatórios de -100 a 100
        }
        matrix.push(row);
    }
    return matrix;
}

// Função para encontrar o maior valor em módulo em uma linha
function maxAbsValue(row) {
    return Math.max(...row.map(Math.abs));
}

// Função para dividir cada elemento de uma linha pelo maior valor em módulo
function normalizeRow(row) {
    const maxAbs = maxAbsValue(row);
    return row.map(value => value / maxAbs);
}

// Função para imprimir uma matriz
function printMatrix(matrix, title) {
    console.log(title);
    matrix.forEach(row => {
        console.log(row.map(value => value.toFixed(2)).join(' '));
    });
}

// Função principal
function main() {
    const rows = 12;
    const cols = 13;
    const M = generateMatrix(rows, cols);

    printMatrix(M, "Matriz original M:");

    const M_normalized = M.map(normalizeRow);

    printMatrix(M_normalized, "Matriz M normalizada:");
}

// Executar a função principal
main();

