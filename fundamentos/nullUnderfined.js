let valor; // não incializada
console.log(valor);

valor = null;
console.log(valor);
//console.log(valor.toString());

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined;
console.log(!!produto.preco);
produto.preco = null;
console.log(!!produto.preco);

console.log(produto);