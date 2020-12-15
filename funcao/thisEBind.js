const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()
