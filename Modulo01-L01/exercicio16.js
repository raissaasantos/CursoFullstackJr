/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

let contador = 0;
let num = 2;

while (contador < 50){
    let isPrimo = true;

    for(let i = 2; i < num; i++){
        if (num % i == 0){
            isPrimo = false;
        }
    }

    if (isPrimo){
        console.log(num);
        contador++;
    }

    num++;
}
