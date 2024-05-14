/*
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

const prompt = require('prompt-sync')();

function totalSalaryPerGender(){
    let womenSalary = 0;
    let menSalary = 0;
    let addition = 'S';

    while(addition == 'S'){
        let salary = parseFloat(prompt("Digite o salário do funcionário(a): "));
        let sex = prompt("Digite o sexo do funcionário (F para feminino, M para masculino): ")
        
        if(sex == 'F'){
            womenSalary += salary;
        }
        else{
            menSalary += salary;
        }

        addition = prompt("Deseja adicionar mais funcionários? (S para sim, N para não): ")
    }

    console.log(`O total de salário pago as mulheres foi R$ ${womenSalary.toFixed(2)}, para os homens foi de R$ ${menSalary.toFixed(2)}.`)
}

totalSalaryPerGender();


