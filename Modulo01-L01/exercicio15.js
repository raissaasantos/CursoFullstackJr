/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

const prompt = require("prompt-sync")();

let num;
let peso;
let somaNum = 0;
let somaPesos =  0;
let contador = 0;

while (num != 0){
    num = parseFloat(prompt(" Digite um número: "));

    if (num != 0){
        peso = parseInt(prompt("Digite o peso do número: "));
        somaNum = somaNum + (num * peso);
        somaPesos = somaPesos + peso;
        contador ++;
    }
}

contador --;

let mediaPonderada = somaNum / somaPesos;
console.log(" A média ponderada desses valores é ", mediaPonderada);
