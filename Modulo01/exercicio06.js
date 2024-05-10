/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require('prompt-sync')();

let A = parseInt(prompt("Insira o valor do primeiro lado: "));
let B = parseInt(prompt("Insira o valor do segundo lado: "));
let C = parseInt(prompt("Insira o valor do terceiro lado: "));

if (A < B + C && B < A + C && C < A + B){
    console.log("Os lados fornecidos formam um triângulo.")
    
    if(A == B && B == C && C == A){
        console.log("TIPO: Equilátero")
    } 
    else if(A == B || A == C || B == C){
        console.log("TIPO: Isósceles")
    }
    else if(A != B && B != C && C != A){
        console.log("TIPO: Escaleno")
    }
}
else {
    console.log("Os lados fornecidos não formam um triângulo.")
}
