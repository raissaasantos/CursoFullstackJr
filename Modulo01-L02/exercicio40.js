/*
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/

const prompt = require('prompt-sync')();


function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let resultadoOficial = [];
console.log("Digite os 5 números do resultado oficial da Loto:");
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Número ${i + 1}: `), 10);
    resultadoOficial.push(numero);
}


let apostas = [];
console.log("Resultado dos apostadores: ");
for (let i = 0; i < 50; i++) {
    let aposta = [];
    for (let j = 0; j < 5; j++) {
        let numero = getRandomNum(1, 60); 
        aposta.push(numero);
    }
    apostas.push(aposta);
}


apostas.forEach((aposta, index) => {
    console.log(`\nAposta ${index + 1}:`);
    console.log(aposta.join(', '));
    let ganhou = aposta.every((num, i) => num === resultadoOficial[i]);
    if (ganhou) {
        console.log("Ganhador");
    } else {
        console.log("Não foi dessa vez");
    }
    console.log("---");
});

