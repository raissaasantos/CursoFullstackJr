const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));
let num4 = parseInt(prompt("Digite o quarto número: "));

console.log(num1 + 25);
console.log(num2 * 3);
console.log(num3 * 0.12);
console.log(num4 + num1 + num2 + num3);