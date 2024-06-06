/*
Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

const prompt = require('prompt-sync')();


function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 6; i++) {
        let elemento = parseFloat(prompt(`Digite o elemento ${i + 1}: `));
        vetor.push(elemento);
    }
    return vetor;
}


function realizarOperacao(vetor, operacao) {
    switch (operacao) {
        case 1:
            let soma = vetor.reduce((acc, val) => acc + val, 0);
            console.log(`Soma dos elementos: ${soma}`);
            break;

        case 2:
            let produto = vetor.reduce((acc, val) => acc * val, 1);
            console.log(`Produto dos elementos: ${produto}`);
            break;

        case 3:
            let media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
            console.log(`Média dos elementos: ${media}`);
            break;

        case 4:
            let vetorOrdenado = [...vetor].sort((a, b) => a - b);
            console.log(`Vetor ordenado em ordem crescente: ${vetorOrdenado.join(', ')}`);
            break;

        case 5:
            console.log(`Vetor: ${vetor.join(', ')}`);
            break;
        default:
            console.log('Operação inválida');
    }
}


let vetor = lerVetor();
let operacao = parseInt(prompt('Digite a operação (1- Soma, 2- Produto, 3- Média, 4- Ordenar, 5- Mostrar): '));

realizarOperacao(vetor, operacao);
