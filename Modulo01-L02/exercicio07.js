/*
Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

function rentingCars(carType){
    let result;

    if (carType == 'popular'){
        if (distance <= 100){
            result = (90.00 * rent) + (distance * 0.20);
        }
        else{
            result = (90.00 * rent) + (distance * 0.10);
        }
    }
    else if(carType == 'luxo'){
        if (distance <= 200){
            result = (150.00 * rent) + (distance * 0.30);
        }
        else{
            result = (150.00 * rent) + (distance * 0.25);
        }
    }

    console.log(`O seu preço final é de R$ ${result.toFixed(2)}`)

}

const prompt = require('prompt-sync')();

const carType = prompt("Tipo do carro(popular ou luxo): ");
const rent = prompt("Dias de aluguel: ");
const distance = prompt("Km percorridos: ")
const finalPrice = rentingCars(carType);