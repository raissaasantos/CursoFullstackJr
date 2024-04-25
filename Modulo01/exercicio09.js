const prompt = require("prompt-sync")();

let code = parseInt(prompt("Insira o código: "));

switch(code){
    case 1:
        console.log("Região do produto: Sul");
    break;
    case 2:
        console.log("Região do produto: Norte");
    break;
    case 3:
        console.log("Região do produto: Leste");
    break;
    case 4:
        console.log("Região do produto: Oeste");
    break;
    case 5:
    case 6:
        console.log("Região do produto: Nordeste");
    break;
    case 7:
    case 8:
    case 9:
        console.log("Região do produto: Sudeste");
    break;
}

if(code >= 10 && code <= 20){
    console.log("Região do produto: Centro-Oeste");
}
else if(code >= 25 && code <= 50){
    console.log("Região do produto: Nordeste");
}
else if (code > 20 && code < 25 || code > 50){
    console.log("Produto importado")
}
