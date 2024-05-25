/*
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

function calculateIdealWeight(altura, sexo) {
    if (sexo === 'M' || sexo === 'm') {
        return 72.7 * altura - 58; 
    } else if (sexo === 'F' || sexo === 'f') {
        return 62.1 * altura - 44.7; 
    } else {
        return "Sexo inválido. Por favor, informe 'M' para masculino ou 'F' para feminino.";
    }
}

const alekHeight = 1.85;
const alekSex = 'M';
console.log("O peso ideal de Alek é: " + calculateIdealWeight(alekHeight, alekSex).toFixed(2) + " kg");

const karineHeight = 1.55;
const karineSex = 'F';
console.log("O peso ideal de Karine é: " + calculateIdealWeight(karineHeight, karineSex).toFixed(2) + " kg");
