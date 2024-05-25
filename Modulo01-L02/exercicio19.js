/*
Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require('prompt-sync')();

function validateTimeFormat(time) {
    const timeParts = time.split(":").map(Number);

    if (timeParts.length !== 3) {
        return false;
    }

    const [hour, minute, second] = timeParts;
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
        return false;
    }

    return true;
}


const validatedTimes = [];

for(let i = 0; i < 5; i++){
    let time;
    do {
        time = prompt("Digite o horário (formato HH:MM:SS): ");
    } while (!validateTimeFormat(time));
    validatedTimes.push(time);
}

console.log("\nHorários válidos:");
validatedTimes.forEach((time, index) => console.log(`Horário ${index + 1}: ${time}`));
