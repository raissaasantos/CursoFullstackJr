/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
1- Sul
2- Norte
3- Leste
4- Oeste
5 ou 6- Nordeste
7, 8 ou 9- Sudeste
10 até 20- Centro-Oeste
25 até 50- Nordeste
Fora dos intervalos- Produto importado
*/

const prompt = require("prompt-sync")();

let code = parseInt(prompt("Insira o código: "));

switch(code){
    case 1:
        console.log("Região do produto: Sul");
    break;
    case 2:
        console.log("Região do produto: Norte");
    break;
    case 3:
        console.log("Região do produto: Leste");
    break;
    case 4:
        console.log("Região do produto: Oeste");
    break;
    case 5:
    case 6:
        console.log("Região do produto: Nordeste");
    break;
    case 7:
    case 8:
    case 9:
        console.log("Região do produto: Sudeste");
    break;
}

if(code >= 10 && code <= 20){
    console.log("Região do produto: Centro-Oeste");
}
else if(code >= 25 && code <= 50){
    console.log("Região do produto: Nordeste");
}
else if (code > 20 && code < 25 || code > 50){
    console.log("Produto importado")
}
