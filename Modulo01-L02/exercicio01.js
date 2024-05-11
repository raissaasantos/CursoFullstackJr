/*
Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

function calculateLifeReduction(cigarettesPerDay, yearsSmoking) {
    const minutesLostPerCigarette = 10;
    const daysPerYear = 365;
    const totalCigarettesSmoked = cigarettesPerDay * daysPerYear * yearsSmoking;
    const totalMinutesLost = totalCigarettesSmoked * minutesLostPerCigarette;
    const totalDaysLost = totalMinutesLost / (60 * 24); 

    return totalDaysLost;
}

const prompt = require('prompt-sync')();

const cigarettesPerDay = parseInt(prompt("Quantidade de cigarros fumados por dia: "));
const yearsSmoking = parseInt(prompt("Há quantos está fumando: "));

const daysLost = calculateLifeReduction(cigarettesPerDay, yearsSmoking);

console.log("Você perdeu aproximadamente " + daysLost.toFixed(2) + " dias de vida fumando.");
