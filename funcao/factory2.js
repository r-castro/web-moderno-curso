function Produto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(Produto('Notebook', 2345.0));
console.log(Produto('Ipad', 2333.0));