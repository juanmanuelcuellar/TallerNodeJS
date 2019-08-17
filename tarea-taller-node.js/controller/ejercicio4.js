const express = require('express');

const router = express.Router();

router.get('/ejercicioCuatro', (req,res) =>{
    res.render('ejercicio4');
});

router.post('/ejercicioCuatro', (req,res) =>{
    var numero = req.body.numero;
    var r_numero;
    if(numero % 2 == 0){
        r_numero = 'Es par';
    }else{
        r_numero = 'Es impar';
    }

    res.render('ejercicio4',{
        r_numero:r_numero
    });
});

module.exports = router;