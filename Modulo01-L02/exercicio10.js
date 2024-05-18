/*
Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/

const prompt = require('prompt-sync')();

function valueReader(){
    let sum = 0;
    let smallestNum = null;
    let times = 0;
    let evenNum = 0;
    let addition = 's';

    do {
        let number = parseInt(prompt("Digite um número: "));
        
        sum += number;
        times ++;

        if(smallestNum === null || number < smallestNum){
            smallestNum = number;
        }
        
        if(number % 2 == 0){
            evenNum ++;
        }
 
        addition = prompt("Deseja adicionar mais um número? (s/n): ")
    }
    while(addition == 's');

    let average = sum / times;

    console.log(`A somatória entre todos os valores foi ${sum}, o menor valor digitado foi ${smallestNum}, a média entre todos os valores é ${average.toFixed(1)}, ${evenNum} valores são pares.`)

}

valueReader();
