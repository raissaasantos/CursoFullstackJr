/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

function combinarObjetos(obj1, obj2) {
    let resultado = {};

    for (let item in obj1) {
        resultado[item] = obj1[item];
    }

    for (let item in obj2) {
        resultado[item] = obj2[item];
    }

    return resultado;
}

let obj1 = { fruta1: "morango", fruta2: "banana" };
let obj2 = { fruta2: "laranja", fruta3: "uva" };

let objetoCombinado = combinarObjetos(obj1, obj2);
console.log(objetoCombinado); 
