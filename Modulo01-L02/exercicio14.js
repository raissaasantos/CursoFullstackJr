/*
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

const prompt = require('prompt-sync')();

let names = [];

function readNames(count) {
    const name = prompt(`Digite o ${count}º nome: `);
    names.push(name);

    if (count === 7) {
        console.log("Nomes na ordem inversa:");
        for (let i = names.length - 1; i >= 0; i--) {
            console.log(names[i]);
        }
    } else {
        readNames(count + 1);
    }
}

readNames(1);

