/*
Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

function randomNumber() {
    return Math.floor(Math.random() * 100);
}

function fillRandomArray(array, size) {
    for (let i = 0; i < size; i++) {
        array.push(randomNumber()); 
    }
}

function displayArray(array) {
    console.log("Números gerados:");
    console.log(array.join(", "));
}

function sortArray(array) {
    return array.slice().sort((a, b) => a - b);
}

let numbers = [];
fillRandomArray(numbers, 20);
displayArray(numbers);
let sortedNumbers = sortArray(numbers);

console.log("Números ordenados em ordem crescente:");
console.log(sortedNumbers.join(", "));

