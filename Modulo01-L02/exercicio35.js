/*
Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/


let evenArray = [];
let oddArray = [];


function processValues(values) {
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        
        if (value % 2 === 0) {
            evenArray.push(value);

            if (evenArray.length === 5) {
                console.log("Even array: [" + evenArray.join(', ') + "]");
                evenArray = [];
            }
        } 
        else {
            oddArray.push(value);
           
            if (oddArray.length === 5) {
                console.log("Odd array: [" + oddArray.join(', ') + "]");
                oddArray = [];
            }
        }
    }
  

    if (evenArray.length > 0) {
        console.log("Even array: [" + evenArray.join(', ') + "]");
    }
    if (oddArray.length > 0) {
        console.log("Odd array: [" + oddArray.join(', ') + "]");
    }
}


const values = [
    1, 2, 14, 4, 25, 6, 27, 48, 99, 10,
    11, 62, 13, 54, 15, 61, 17, 87, 19, 20,
    21, 22, 3, 24, 15, 16, 20, 21, 27, 32
];

processValues(values);
