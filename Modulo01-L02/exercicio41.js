/* 
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/


let pessoa = {
    nome: 'Jasmin',
    idade: 21
};

console.log(pessoa.idade); 

pessoa.email = 'jasmin@gmail.com';
console.log(pessoa);
