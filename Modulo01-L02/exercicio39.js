/*
Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/


function gerarVetorAleatorio() {
    let vetor = [];
    for (let i = 0; i < 100; i++) {

        let elemento = Math.floor(Math.random() * 101) - 50;
        vetor.push(elemento);
    }
    return vetor;
}


function compactarVetor(vetor) {
    let vetorCompactado = vetor.filter(elemento => elemento > 0);
    return vetorCompactado;
}


let vetorA = gerarVetorAleatorio();
let vetorB = compactarVetor(vetorA);

console.log('Vetor A (original):', vetorA);
console.log('Vetor B (compactado):', vetorB);
