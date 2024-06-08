/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

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


function apenasArrays(obj) {
    let resultado = {};
    for (let item in obj) {
        if (Array.isArray(obj[item])) {
            resultado[item] = obj[item];
        }
    }
    return resultado;
}


let arraysApenas = apenasArrays(dados);
console.log(arraysApenas);
