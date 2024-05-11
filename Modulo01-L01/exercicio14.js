/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require("prompt-sync")();

let num;
let soma = 0;
let contador =  0;

while (num != 0){
    num = parseFloat(prompt(" Digite um número: "));
    soma = soma + num;
    contador ++;
}

contador --;

let media = soma/contador;
console.log("A média desses valores é ", media);

