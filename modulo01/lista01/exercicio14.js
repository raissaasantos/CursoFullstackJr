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

