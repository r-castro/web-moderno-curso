Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, Fragil: true},
    {nome: 'iPad Pro', preco: 4199, Fragil: false},
    {nome: 'Copo de Vidro', preco: 12.49, Fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, Fragil: false},
]

// console.log(produtos.filter(function(p) {
//     return p.preco > 10
// }));

const fragil = e => e.Fragil
const precoMenor = e => e.preco >= 500

console.log(produtos.filter2(precoMenor).filter2(fragil))