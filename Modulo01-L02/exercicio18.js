/*
Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

const prompt = require('prompt-sync')();

function readEmployeeDetails() {
    const name = prompt("Nome do funcionário: ");
    const position = prompt("Cargo do funcionário: ");
    const salary = parseFloat(prompt("Salário do funcionário: "));

    return { name, position, salary };
}

function displayEmployeeDetails(employee) {
    console.log("\nDados do funcionário:");
    console.log(`Nome: ${employee.name}`);
    console.log(`Cargo: ${employee.position}`);
    console.log(`Salário: ${employee.salary}`);
}

const employee = readEmployeeDetails();
displayEmployeeDetails(employee);
