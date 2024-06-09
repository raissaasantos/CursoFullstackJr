/*
Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

function transformObject(obj, transform) {
    return Object.keys(obj).reduce((result, key) => {
        result[key] = transform(obj[key]);
        return result;
    }, {});
}


const originalObj = {
    a: 21,
    b: 11,
    c: 15
};


function double(x) {
    return x * 2;
}

const output = transformObject(originalObj, double);
console.log(output);
