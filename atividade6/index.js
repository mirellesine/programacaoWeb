/// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Configurar o bodyParser para lidar com dados de formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta 'views'
app.use(express.static(path.join(__dirname, 'views')));

// Rota para renderizar o formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para lidar com os dados do formulário
app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    const dataFormatada = data.toISOString();
    res.render('dados', { nome, endereco, telefone, dataFormatada }); // Aqui passamos os dados para renderizar a visualização
});

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Configurar o Express para usar EJS como mecanismo de visualização
app.set('view engine', 'ejs');