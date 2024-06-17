const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

// Rota para renderizar a página inicial
router.get('/', (req, res) => {
    res.render('index.html');
});

// Rota para realizar o cálculo
router.post('/calcular', calculadoraController.calcular);

module.exports = router;
