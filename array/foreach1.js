const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(value, index) {
    console.log(`${index + 1}) ${value}`)
})

aprovados.forEach(nome => console.log(nome))
aprovados.forEach((nome, indice) => console.log(`${indice}) ${nome}`))