/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

function contarVezes(array) {
    let resultado = {};

    array.forEach(chave => {
        if (resultado[chave]) {
            resultado[chave]++;
        } else {
            resultado[chave] = 1;
        }
    });

    return resultado;
}


let arrayDeStrings = ['morango', 'uva', 'banana', 'uva', 'laranja', 'banana', 'uva', 'morango', 'melancia'];

let contagem = contarVezes(arrayDeStrings);
console.log(contagem); 
