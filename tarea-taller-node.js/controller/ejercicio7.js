const express = require('express');

const router = express.Router();

router.get('/ejercicioSiete', (req,res) =>{
    res.render('ejercicio7');
});

router.post('/ejercicioSiete', (req,res) =>{

    var n1,n2,n3,n4,n5,n6,n7,n8
    var numeros = [];
    var suma = 0;

    n1 = parseInt(req.body.num1);
    n2 = parseInt(req.body.num2);
    n3 = parseInt(req.body.num3);
    n4 = parseInt(req.body.num4);
    n5 = parseInt(req.body.num5);
    n6 = parseInt(req.body.num6);
    n7 = parseInt(req.body.num7);
    n8 = parseInt(req.body.num8);

    numeros.push(n1,n2,n3,n4,n5,n6,n7,n8);
    
    for(var i = 0; i <= numeros.length-1; i++){
        suma = suma + numeros[i];
    };

    res.render('ejercicio7',{
        suma:suma
    });

});

module.exports = router;