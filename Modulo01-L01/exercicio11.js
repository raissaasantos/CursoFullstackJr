/*
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/

const prompt = require("prompt-sync")();

let value = prompt("Digite um valor: ");

while (value != 0 && value > 0){

    if(value % 2 == 0){
        console.log("O valor é par.")
    }
    else{
        console.log("O valor é ímpar.")
    }
    
    value = prompt("Digite um valor: ");
}
