const prompt = require("prompt-sync")();

let contador;

let N;

for (let i = 0; i < 5; i++){
    N = parseInt(prompt("Digite um valor: "));

    for (contador = 1; contador <= N; contador++) {
    console.log(`${contador} * ${N} =`, contador * N);
    }
}