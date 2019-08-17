const express = require('express');

const router = express.Router();

var cantTextBox;

router.get('/ejercicioNueve', (req,res) =>{
    res.render('ejercicio9');
});

router.post('/ejercicioNueve_cantTextBox', (req,res) =>{

    cantTextBox = req.body.cantTextoBox;

    res.render('ejercicio9',{
        cantTextBox:cantTextBox
    });
});

router.post('/ejercicioNueve_numeros', (req,res) =>{

    var numeros = [];
    var sumaPares = 0;
    var sumaImpares = 0;
    var cantPares = 0;
    var cantImpares = 0;

    for(i = 1; i <= cantTextBox; i++){
        var no = req.body.num;
        numeros.push(no);
    }

    var listarNumeros = numeros[0];

    for(o = 0; o <= cantTextBox-1; o++){
        if(numeros[0][o] % 2 == 0){
            sumaPares = sumaPares + parseInt(numeros[0][o]);
            cantPares++
        }else{
            sumaImpares = sumaImpares + parseInt(numeros[0][o]);
            cantImpares++
        }
    }

    res.render('ejercicio9',{
        numeros: listarNumeros,
        sumaPares:sumaPares,
        sumaImpares:sumaImpares,
        cantPares:cantPares,
        cantImpares:cantImpares
    })

});

module.exports = router;