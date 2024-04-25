const prompt = require("prompt-sync")();

let nota1 = parseInt(prompt("Digite a primeira nota: "));
let nota2 = parseInt(prompt("Digite a segunda nota: "));

let media = (nota1 + nota2) / 2;

console.log("Sua média semestral foi ", media)

if (media >= 6){
    console.log("PARABÉNS! Você foi aprovado.")
}
