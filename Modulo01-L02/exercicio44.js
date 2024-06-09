/*
Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

function contarPropriedadesString(objeto) {
    let contador = 0;

    for (let propriedade in objeto) {
        if (typeof objeto[propriedade] === 'string') {
            contador++;
        }
    }

    return contador;
}


let dados = {
    nome: 'Jasmin',
    idade: 21,
    hobbies: ['ler', 'viajar', 'desenhar'],
    endereco: {
        rua: 'Rua Arnalda',
        numero: 100
    },
    notas: [10, 9, 8],
    ativo: true,
    profissao: 'Game developer',
    amigos: ['Julie', 'Peter', 'Anna']
};

let numeroDeStrings = contarPropriedadesString(dados);
console.log(numeroDeStrings);
