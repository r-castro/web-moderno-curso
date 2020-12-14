const port = 8080

const express = require('express')
const bd = require('./bd')
const bodyParser = require('body-parser')

const app = express()

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...'); //converter para json
//     next()
// })

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos()) //converter para json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bd.saveProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bd.saveProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})


app.delete('/produtos/:id', (req, res, next) => {
     const produto = bd.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}`);
})
