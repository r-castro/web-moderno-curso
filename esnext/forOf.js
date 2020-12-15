for (let letra of "Cod3r") {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i);
}

for (const assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (const assunto of assuntosMap) {
    console.log(assunto);
}

for (const chave of assuntosMap.keys()) {
    console.log(chave);
}

for (const value of assuntosMap.values()) {
    console.log(value.abordado);
}