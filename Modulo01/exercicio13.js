/*
13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

const prompt = require("prompt-sync")();

let contador;

let N;

for (let i = 0; i < 5; i++){
    N = parseInt(prompt("Digite um valor: "));

    for (contador = 1; contador <= N; contador++) {
    console.log(`${contador} * ${N} =`, contador * N);
    }
}
