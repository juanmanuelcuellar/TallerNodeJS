const express = require('express');

const router = express.Router();

router.get('/ejercicioTres', (req,res) =>{
    res.render('ejercicio3');
});

router.post('/ejercicioTres', (req,res) =>{
    var num1,num2,num3;
    var re_num1,re_num2,re_num3;

    num1 = parseInt(req.body.num1);
    num2 = parseInt(req.body.num2);
    num3 = parseInt(req.body.num3);

    if(num1 > 50){
        re_num1 = 'es mayor a 50';
    }else if(num1 >= 0 && num1 <= 20){
        re_num1 = 'menor de 20';
    }else if(num1 < 0){
        re_num1 = 'es negativo';
    }else{
        re_num1 = 'no cumple con las condiciones';
    }

    if(num2 > 50){
        re_num2 = 'es mayor a 50';
    }else if(num2 >= 0 && num2 <= 20){
        re_num2 = 'menor de 20';
    }else if(num2 < 0){
        re_num2 = 'es negativo';
    }else{
        re_num2 = 'no cumple con las condiciones';
    }

    if(num3 > 50){
        re_num3 = 'es mayor a 50';
    }else if(num3 >= 0 && num3 <= 20){
        re_num3 = 'menor de 20';
    }else if(num3 < 0){
        re_num3 = 'es negativo';
    }else{
        re_num3 = 'no cumple con las condiciones';
    }

    res.render('ejercicio3',{
        re_num1:re_num1,
        re_num2:re_num2,
        re_num3:re_num3
    });
});

module.exports = router;