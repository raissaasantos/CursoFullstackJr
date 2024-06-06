/*
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

const prompt = require('prompt-sync')();

function gerarGabarito() {
    const letras = ['A', 'B', 'C', 'D', 'E'];
    let gabarito = [];
    for (let i = 0; i < 20; i++) {
        gabarito.push(letras[Math.floor(Math.random() * letras.length)]);
    }
    return gabarito;
}

function gerarRespostas() {
    const letras = ['A', 'B', 'C', 'D', 'E'];
    let respostas = [];
    for (let i = 0; i < 20; i++) {
        respostas.push(letras[Math.floor(Math.random() * letras.length)]);
    }
    return respostas;
}

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

function avaliarAlunos() {
    const gabarito = gerarGabarito();
    const numeroDeAlunos = 50;

    console.log(`Gabarito: \n${gabarito}`)

    for (let i = 0; i < numeroDeAlunos; i++) {
        const respostas = gerarRespostas();
        const numeroDeAcertos = contarAcertos(gabarito, respostas);
        let statusDoAluno;
        
        if (numeroDeAcertos >= 12) {
            statusDoAluno = "APROVADO";
        } else {
            statusDoAluno = "REPROVADO";
        }

        console.log('---');
        console.log(`Aluno ${i + 1}`);
        console.log(`Número de acertos: ${numeroDeAcertos}`);
        console.log(statusDoAluno);
        console.log('---');
    }

}

avaliarAlunos();
