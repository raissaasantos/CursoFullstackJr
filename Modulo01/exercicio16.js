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
