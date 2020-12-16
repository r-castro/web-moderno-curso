function tratarErrorLancar(erro) {
    //throw new Error('...');
    // throw 10;
    throw 'Mensagem';
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErrorLancar(e);
    } finally {
        console.log('Final')
    }
    
}

const obj = {name: 'Roberto'};
imprimirNomeGritado(obj);