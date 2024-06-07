const express = require('express');
const app = express();
const operacoes = require('./operacoes');
const port = 8081;

// Rota para somar
app.get('/somar/:a/:b', function(req, res) {
    let primeiroNumero = parseInt(req.params.a);
    let segundoNumero = parseInt(req.params.b);
    res.send('Soma: ' + operacoes.somar(primeiroNumero, segundoNumero));
});

// Rota para subtrair
app.get('/subtrair/:a/:b', function(req, res) {
    let primeiroNumero = parseInt(req.params.a);
    let segundoNumero = parseInt(req.params.b);
    res.send('Subtração: ' + operacoes.subtrair(primeiroNumero, segundoNumero));
});

// Rota para multiplicar
app.get('/multiplicar/:a/:b', function(req, res) {
    let primeiroNumero = parseInt(req.params.a);
    let segundoNumero = parseInt(req.params.b);
    res.send('Multiplicação: ' + operacoes.multiplicar(primeiroNumero, segundoNumero));
});

// Rota para dividir
app.get('/dividir/:a/:b', function(req, res) {
    let primeiroNumero = parseInt(req.params.a);
    let segundoNumero = parseInt(req.params.b);
    res.send('Divisão: ' + operacoes.dividir(primeiroNumero, segundoNumero));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
