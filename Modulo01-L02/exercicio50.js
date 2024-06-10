/*
Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.
*/

const prompt = require('prompt-sync')();

let hoteis = [
    { id: 145, nome: 'Hotel Transilvânia', cidade: 'Alphaville', quartosTotais: 34, quartosDisponiveis: 10 },
    { id: 273, nome: 'Hotel Pipoca Doce', cidade: 'Barueri', quartosTotais: 25, quartosDisponiveis: 5 },
    { id: 322, nome: 'Hotel Noite Feliz', cidade: 'Montes Claros', quartosTotais: 21, quartosDisponiveis: 7 }
];
let reservas = [];

function adicionarHotel(nome, cidade, quartosTotais) {
    const id = hoteis.length + 1;
    const novoHotel = { id, nome, cidade, quartosTotais, quartosDisponiveis: quartosTotais };
    hoteis.push(novoHotel);
    console.log(`Hotel ${nome} adicionado com sucesso!`);
}

function buscarHoteisPorCidade(cidade) {
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
    if (hoteisNaCidade.length === 0) {
        console.log(`Nenhum hotel encontrado na cidade ${cidade}.`);
    } 
    else {
        console.log(`\nHotéis disponíveis em ${cidade}:`);
        hoteisNaCidade.forEach(hotel => {
            console.log(`ID: ${hotel.id} \nNome: ${hotel.nome} \nQuartos Disponíveis: ${hotel.quartosDisponiveis}`);
        });
    }
}

function fazerReserva(idHotel, nomeCliente) {
    const hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (!hotel) {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
        return;
    }
    if (hotel.quartosDisponiveis > 0) {
        const idReserva = reservas.length + 1;
        const novaReserva = { idReserva, idHotel, nomeCliente };
        reservas.push(novaReserva);
        hotel.quartosDisponiveis--;
        console.log(`Reserva feita com sucesso! \nCliente: ${nomeCliente} \nHotel: ${hotel.nome}.`);
    } 
    else {
        console.log(`Hotel ${hotel.nome} não tem quartos disponíveis.`);
    }
}

function cancelarReserva(idReserva) {
    const reserva = reservas.find(reserva => reserva.idReserva === idReserva);
    if (!reserva) {
        console.log(`Reserva com ID ${idReserva} não encontrada.`);
        return;
    }
    const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
    if (hotel) {
        hotel.quartosDisponiveis++;
    }
    reservas = reservas.filter(reserva => reserva.idReserva !== idReserva);
    console.log(`Reserva com ID ${idReserva} cancelada com sucesso.`);
}

function listarReservas() {
    if (reservas.length === 0) {
        console.log(`Nenhuma reserva encontrada.`);
    } 
    else {
        console.log(`Reservas:`);
        reservas.forEach(reserva => {
            const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
            console.log('---')
            console.log(`ID Reserva: ${reserva.idReserva} \nHotel: ${hotel.nome} \nCliente: ${reserva.nomeCliente}`);
        });
    }
}

function userControl() {
    while (true) {
        console.log('---')
        console.log("\nEscolha uma opção:");
        console.log("1. Adicionar Hotel");
        console.log("2. Buscar Hotéis por Cidade");
        console.log("3. Fazer Reserva");
        console.log("4. Cancelar Reserva");
        console.log("5. Listar Reservas");
        console.log("6. Sair\n");

        const option = prompt("Digite o número da sua opção: ");

        if (option === "1") {
            console.log('---')
            const nome = prompt("Digite o nome do hotel: ");
            const cidade = prompt("Digite a cidade do hotel: ");
            const quartosTotais = parseInt(prompt("Digite o número total de quartos: "));
            adicionarHotel(nome, cidade, quartosTotais);
        } 
        else if (option === "2") {
            console.log('---')
            const cidade = prompt("Digite a cidade para buscar hotéis: ");
            buscarHoteisPorCidade(cidade);
        } 
        else if (option === "3") {
            const idHotel = parseInt(prompt("Digite o ID do hotel: "));
            const nomeCliente = prompt("Digite o nome do cliente: ");
            fazerReserva(idHotel, nomeCliente);
        } 
        else if (option === "4") {
            const idReserva = parseInt(prompt("Digite o ID da reserva: "));
            cancelarReserva(idReserva);
        } 
        else if (option === "5") {
            listarReservas();
        } 
        else if (option === "6") {
            break;
        } 
        else {
            console.log("Opção inválida. Tente novamente.");
        }
    }
}


userControl();
