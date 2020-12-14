let p = new Promise(function (cumpriPromessa) {
    cumpriPromessa({
        x: 3,
        y: 4,
    })
})

p.then((valor) => console.log(valor.x)).then()
