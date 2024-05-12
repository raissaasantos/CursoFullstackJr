/*
Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km 
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

function speedTax (carSpeed){
    return carSpeed * 5.00;
}

const prompt = require('prompt-sync')();

const carSpeed = parseInt(prompt("Qual a velocidade do carro? "));
const tax = speedTax(carSpeed);

if (carSpeed > 80){
    console.log("Você foi multado! Sua multa é R$ "+ tax.toFixed(2));
}