const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    let dataFormatada;
    
    if (typeof data === 'string' && !isNaN(Date.parse(data))) {
        dataFormatada = new Date(data);
    } else {
        console.error('Erro: A data recebida não está em um formato válido.');
        
        dataFormatada = new Date();
    }
    res.render('dados', { nome, endereco, telefone, data: dataFormatada });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App na porta ${PORT}`);
});