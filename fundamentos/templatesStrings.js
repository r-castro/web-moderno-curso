const nome = 'Rebeca';
const conctenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`

console.log(conctenacao, template);

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase()

console.log(`Ei ... ${up('cuidado')}!`);