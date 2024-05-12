/*
Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. 
O sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

function calculatingHours(myHours){
    let points;

    if (myHours <= 10){
        points = myHours * 2;
    }
    else if (myHours > 10 && myHours <= 20){
        points = myHours * 5;
    }
    else{
        points = myHours * 10;
    }

    let money = points * 0.05;

    console.log(`Você obteve ${points} pontos e conseguiu ganhar R$ ${money.toFixed(2)}. Parabéns!`)
}

const prompt = require('prompt-sync')();

const myHours = prompt("Horas de atividade física: ");
const myResult = calculatingHours(myHours);
