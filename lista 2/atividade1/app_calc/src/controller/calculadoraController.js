const calculadora = require('../calculadora/calculadora');

exports.renderIndex = (req, res) => {
    res.render('index.html');
};

exports.calcular = (req, res) => {
    const { firstNumber, secondNumber, operacao } = req.body;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        res.render('index.html', { errorMessage: 'Valores inválidos.' });
    } else {
        const resultado = calculadora.calcular(Number(firstNumber), Number(secondNumber), operacao);
        res.render('resultado.html', { firstNumber, secondNumber, result: resultado });
    }
};