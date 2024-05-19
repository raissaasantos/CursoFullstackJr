/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

const prompt = require('prompt-sync')();

function readNamesAges() {
    let names = [];
    let ages = [];

    console.log("Por favor, insira o nome e a idade de 9 pessoas:");

    for (let i = 1; i <= 9; i++) {
        const name = prompt(`Digite o nome da ${i}ª pessoa: `);
        const age = parseInt(prompt(`Digite a idade da ${i}ª pessoa: `));

        names.push(name);
        ages.push(age);
    }

    return {names, ages};
}

function displayUnderage(names, ages) {
    console.log("\nPessoas menores de idade:");

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < 18) {
            console.log(`Nome: ${names[i]}, Idade: ${ages[i]}`);
        }
    }
}

const {names, ages} = readNamesAges();
displayUnderage(names, ages);
