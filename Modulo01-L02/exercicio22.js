/*
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a

média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/

const prompt = require('prompt-sync')();

function calculatePopulationStatistics() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = Number.NEGATIVE_INFINITY;
    let countSalario350 = 0;
    let totalPessoas = 0;

    while (true) {
        let salario = parseFloat(prompt("Digite o salário da pessoa (ou '0' para encerrar):"));
        if (salario === 0) {
            break;
        }
        
        totalSalario += salario;
        totalPessoas++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            countSalario350++;
        }

        let numFilhos = parseInt(prompt("Digite o número de filhos da pessoa:"));
        totalFilhos += numFilhos;
    }

    const mediaSalario = totalSalario / totalPessoas;
    const mediaFilhos = totalFilhos / totalPessoas;
    const percentualSalario350 = (countSalario350 / totalPessoas) * 100;

    return {
        mediaSalario: mediaSalario.toFixed(2),
        mediaFilhos: mediaFilhos.toFixed(2),
        maiorSalario: maiorSalario.toFixed(2),
        percentualSalario350: percentualSalario350.toFixed(2)
    };
}

const statistics = calculatePopulationStatistics();
console.log("\nMédia de salário da população: R$ " + statistics.mediaSalario);
console.log("Média do número de filhos: " + statistics.mediaFilhos);
console.log("Maior salário: R$ " + statistics.maiorSalario);
console.log("Percentual de pessoas com salário até R$ 350,00: " + statistics.percentualSalario350 + "%");
