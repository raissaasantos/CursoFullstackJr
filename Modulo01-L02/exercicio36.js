/*
Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/

const prompt = require('prompt-sync')();

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function verificarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}


function lerVetor() {
    let vetor = [];

    for (let i = 0; i < 13; i++) {
        let elemento = parseInt(prompt("Digite o elemento " + (i + 1) + " do gabarito: "));
        vetor.push(elemento);
    }
    return vetor;
}


let gabarito = lerVetor();
let resultados = [];


for (let apostador = 1; apostador <= 100; apostador++) {
    let card = apostador;
    let respostas = [];

    for (let j = 0; j < 13; j++) {
        respostas.push(randomNum(0, 25));
    }

    let numAcertos = verificarAcertos(gabarito, respostas);
    let resultado = {
        ID: card,
        Respostas: respostas,
        Acertos: numAcertos
    };
    resultados.push(resultado);


    if (numAcertos === 13) {
        console.log(`Apostador ID: ${card} \nRespostas: ${respostas} \nAcertos: ${numAcertos}. \nParabéns, você é o GANHADOR!`)
        console.log('\n---')
    } 
    else {
        console.log(`Apostador ID: ${card} \nRespostas: ${respostas} \nAcertos: ${numAcertos}`)
        console.log('\n---')
    }
}
