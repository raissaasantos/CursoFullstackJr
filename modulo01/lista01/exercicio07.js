const prompt = require("prompt-sync")();

let apples = parseInt(prompt("Número de maçãs: "));
let compra;

if(apples >= 12){
    console.log("O valor total da compra é "+ apples * 0.25 +" reais.")
}
else {
    console.log("O valor total da compra é "+ apples * 0.30 +" reais.")
}