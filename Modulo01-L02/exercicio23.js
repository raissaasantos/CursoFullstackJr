/*
Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

function matrizIdentity() {
    let matriz = [];

    
    for (let i = 0; i < 7; i++) {
        matriz[i] = [];
        for (let j = 0; j < 7; j++) {
            matriz[i][j] = 0;
        }
    }

  
    for (let i = 0; i < 7; i++) {
        matriz[i][i] = 1;
    }

    
    for (let i = 0; i < 7; i++) {
        let line = "";
        for (let j = 0; j < 7; j++) {
            line += matriz[i][j] + " ";
        }
        console.log(line);
    }
}


matrizIdentity();
