const prompt = require("prompt-sync")();

let celsius = parseInt(prompt("Digite a temperatura em graus Celsius: "));
let fahrenheit = (celsius * 9/5) + 32;

console.log(`Essa temperatura corresponde a ${fahrenheit} graus Fahrenheit.`);