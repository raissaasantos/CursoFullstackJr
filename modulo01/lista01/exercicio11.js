const prompt = require("prompt-sync")();

let value = prompt("Digite um valor: ");

while (value != 0 && value > 0){

    if(value % 2 == 0){
        console.log("O valor é par.")
    }
    else{
        console.log("O valor é ímpar.")
    }
    
    value = prompt("Digite um valor: ");
}