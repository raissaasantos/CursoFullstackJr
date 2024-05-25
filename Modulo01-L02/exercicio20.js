/* 
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/


function calcularDescontoINSS(salarioBruto) {
    return salarioBruto * 0.12; // Desconto de 12%
}

function calcularSalarioLiquido(salarioBruto, descontoINSS) {
    return salarioBruto - descontoINSS;
}


const funcionarios = [
    { matricula: 101, nome: "James", salarioBruto: 3000 },
    { matricula: 102, nome: "Malu", salarioBruto: 4000 },
  
];


funcionarios.forEach(funcionario => {
    const descontoINSS = calcularDescontoINSS(funcionario.salarioBruto);
    const salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, descontoINSS);
    
    console.log("Matrícula: " + funcionario.matricula);
    console.log("Nome: " + funcionario.nome);
    console.log("Salário bruto: R$ " + funcionario.salarioBruto.toFixed(2));
    console.log("Dedução INSS: R$ " + descontoINSS.toFixed(2));
    console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));
    console.log("--------------------------------------");
});
