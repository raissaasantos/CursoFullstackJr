/*
Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

function juntarInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = {};

    for (const item in inventarioLojaA) {
        
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += inventarioLojaA[item];
        } 
        else {
            inventarioCombinado[item] = inventarioLojaA[item];
        }
    }


    for (const item in inventarioLojaB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += inventarioLojaB[item];
        } 
        else {
            inventarioCombinado[item] = inventarioLojaB[item];
        }
    }

    return inventarioCombinado;
}


const inventarioLojaA = {
    vestidos: 10,
    camisetas: 5,
    regata: 7
};

const inventarioLojaB = {
    sapato: 8,
    regata: 3,
    camisetas: 2,
    bermuda: 4,
    vestidos: 1
};

const inventarioCombinado = juntarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioCombinado); 

