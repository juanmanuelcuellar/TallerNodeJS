const express = require('express');

const router = express.Router();

router.get('/ejercicioDos', (req,res) => {
    res.render('ejercicio2');
});

router.post('/ejercicioDos', (req,res) => {
    var dia = req.body.dia;
    var result;
    switch(dia) {
        case '2':
        case '9':
        case '16':
        case '23':
        case '30':
            result = 'Domingo';
            break;
        case '3':
        case '10':
        case '17':
        case '24':
            result = 'Lunes';
            break;
        case '4':
        case '11':
        case '18':
        case '25':
            result = 'Martes';
            break;
        case '5':
        case '12':
        case '19':
        case '26':
            result = 'Miercoles';
            break;
        case '6':
        case '13':
        case '20':
        case '27':
            result = 'Jueves';
            break;
        case '7':
        case '14':
        case '21':
        case '28':
            result = 'Viernes';
            break;
        case '1':
        case '8':
        case '15':
        case '22':
        case '29':
            result = 'Sabado';
            break;
        default:
            result = 'fuera del rango';
            break;
    }

    res.render('ejercicio2',{
        result:result
    });

});

module.exports = router;