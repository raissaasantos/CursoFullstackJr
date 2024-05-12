/*
Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

const prompt = require('prompt-sync')();

let A = parseInt(prompt("Insira o valor do primeiro segmento de reta: "));
let B = parseInt(prompt("Insira o valor do segundo segmentpo de reta: "));
let C = parseInt(prompt("Insira o valor do terceiro segmento de reta: "));

if (A < B + C && B < A + C && C < A + B){
    console.log("Esses segmentos de reta formam um triângulo.")
}
else {
    console.log("Esses segmentos de reta não formam um triângulo.")
}