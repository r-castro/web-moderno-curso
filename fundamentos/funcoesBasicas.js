// Função sem retorno
function imprimitSoma(a, b) {
    console.log(a + b);
}

imprimitSoma(2, 3);
imprimitSoma(2);

// Funcão com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3));