/*
Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function organizarTransacoes(transacoes) {
    return transacoes.reduce((resultado, transacao) => {
      const { categoria, valor } = transacao;
  
      if (!resultado[categoria]) {
        resultado[categoria] = {
          transacoes: [],
          subtotal: 0
        };
      }
  
      resultado[categoria].transacoes.push(transacao);
      resultado[categoria].subtotal += valor;
  
      return resultado;
    }, {});
  }

  const transacoesFinanceiras = [
    { id: 1, valor: 100, data: '01/01/2024', categoria: 'alimentacao' },
    { id: 2, valor: 50, data: '23/05/2024', categoria: 'transporte' },
    { id: 3, valor: 20, data: '13/02/2024', categoria: 'alimentacao' },
    { id: 4, valor: 80, data: '24/01/2024', categoria: 'lazer' },
    { id: 5, valor: 30, data: '18/03/2024', categoria: 'transporte' },
  ];
  
  const resultado = organizarTransacoes(transacoesFinanceiras);

  for (const categoria in resultado) {
    console.log(`Categoria: ${categoria}`);
    console.log('Transações:');
    resultado[categoria].transacoes.forEach(transacao => {
        console.log(`  ID: ${transacao.id}, Valor: ${transacao.valor}, Data: ${transacao.data}`);
    });
    console.log(`Subtotal: ${resultado[categoria].subtotal}`);
    console.log('---')
}
  