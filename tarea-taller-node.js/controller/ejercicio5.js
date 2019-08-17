const express = require('express');

const router = express.Router();

router.get('/ejercicioCinco', (req,res) =>{
    res.render('ejercicio5');
});

router.post('/ejercicioCinco', (req,res) =>{

    var pares = [];
    var impares = [];
    var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10;

    n1 = parseInt(req.body.num1);
    n2 = parseInt(req.body.num2);
    n3 = parseInt(req.body.num3);
    n4 = parseInt(req.body.num4);
    n5 = parseInt(req.body.num5);
    n6 = parseInt(req.body.num6);
    n7 = parseInt(req.body.num7);
    n8 = parseInt(req.body.num8);
    n9 = parseInt(req.body.num9);
    n10 = parseInt(req.body.num10);

    var numMayor = Math.max(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
    var numMenor = Math.min(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
    var numeros = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];

    for(var i = 0; i <= numeros.length; i++){
        if(numeros[i] % 2 == 0){
            pares.push(numeros[i]);
        }else{
            impares.push(numeros[i]);
        }
    }

    console.log(typeof(n1));

    res.render('ejercicio5',{
        numMayor: numMayor,
        numMenor: numMenor,
        pares: pares,
        impares: impares
    });
});

module.exports = router;