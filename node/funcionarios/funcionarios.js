const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtrarFeminino = f => f.genero === 'F'
const filtrarPais = f => f.pais === 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const filter = funcionarios.filter(filtrarPais).filter(filtrarFeminino).reduce(menorSalario)
    console.log(filter)
})
