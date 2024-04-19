const express = require('express');
const estoque = require('./Produto');
const app = express();

const PORT = 8080;
app.listen(PORT)

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let product = estoque.createProduct(id, nome, qtd);
    estoque.addProduct(product);
    res.send(product.nome);
});

app.get('/listar', function (req, res) {
    res.send(estoque.listProducts());
})

app.get('/remover/:id', function (req, res) {
    let id = req.params.id;
    estoque.removeProduct(id);
    res.send(id);
});

app.get('/editar/:id/:qtd', function (req, res) {
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.editProdut(id, qtd);
    res.send(qtd);
});