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