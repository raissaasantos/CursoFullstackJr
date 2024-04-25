const prompt = require("prompt-sync")();

let eleitores = parseInt(prompt("Insira a quantidade de eleitores: "));
let vBranco = parseInt(prompt("Insira a quantidade de votos em branco: "));
let vNulo = parseInt(prompt("Insira a quantidade de votos nulos: "));
let vValido = parseInt(prompt("Insira a quantidade de votos válidos: "));

let pBranco = (vBranco / eleitores) * 100;
let pNulo = (vNulo / eleitores) * 100;
let pValido = (vValido / eleitores) * 100;

console.log("O percentual de votos brancos é ", pBranco);
console.log("O percentual de votos nulos é ", pNulo);
console.log("O percentual de votos válidos é ", pValido);
