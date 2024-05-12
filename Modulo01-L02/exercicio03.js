/*
Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

function ticketPrice (chosenDistance){
    
    if (chosenDistance <= 200){
        return chosenDistance * 0.50;
    }
    else{
        return chosenDistance * 0.45;
    }
}

const prompt = require('prompt-sync')();

const chosenDistance = parseInt(prompt("Qual distância em km que deseja percorrer? "));
const yourPrice = ticketPrice(chosenDistance);

console.log("O preço da sua passagem é R$ "+ yourPrice.toFixed(2));
