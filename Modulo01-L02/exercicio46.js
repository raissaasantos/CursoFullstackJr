/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

function summarizeSales(sales) {
    return sales.reduce((summary, sale) => {
        
        if (summary[sale.vendedor]) {
            summary[sale.vendedor] += sale.valor;
        } 
        else {
            summary[sale.vendedor] = sale.valor;
        }

        return summary;
    }, {});
}


const sales = [
    { vendedor: 'Alice', valor: 200 },
    { vendedor: 'João', valor: 220 },
    { vendedor: 'Alice', valor: 150 },
    { vendedor: 'João', valor: 350 },
    { vendedor: 'Charlie', valor: 300 },
    { vendedor: 'Alice', valor: 250}
];

const resumo = summarizeSales(sales);
console.log(resumo); 
