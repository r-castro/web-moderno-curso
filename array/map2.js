const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Carderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const preco = carrinho.map(function(e) {
    const preco = JSON.parse(e)
    return parseFloat(preco.preco).toFixed(2)
})

console.log(preco);

