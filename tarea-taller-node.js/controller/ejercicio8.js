const express = require('express');

const router = express.Router();

router.get('/ejercicioOcho', (req,res) =>{
    res.render('ejercicio8');
});

router.post('/ejercicioOcho', (req,res) =>{

    var numeros = [];
    var sumaPares = 0;
    var sumaImpares = 0;
    var cantPares = 0;
    var cantImpares = 0;

    var tamanoArray = parseInt(req.body.array);

    if(tamanoArray >= 0 && tamanoArray <= 20){
        for(var i = 1; i <= tamanoArray; i++){
            var numero = Math.floor(Math.random() * (1+100));
            numeros.push(numero);
        }
        for(var o = 0; o <= numeros.length-1; o++){
            if(numeros[o] % 2 == 0){
                sumaPares = sumaPares + numeros[o];
                cantPares++
            }else{
                sumaImpares = sumaImpares + numeros[o];
                cantImpares++
            }
        }
    }else{
        alert('El rango no es valido');
    }

    res.render('ejercicio8',{
        numeros:numeros,
        sumaPares:sumaPares,
        sumaImpares:sumaImpares,
        cantPares:cantPares,
        cantImpares:cantImpares
    });
    
});

module.exports = router;