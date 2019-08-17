const express = require('express');

const router = express.Router();

router.get('/ejercicioSeis', (req,res) =>{
    res.render('ejercicio6')
});

router.post('/ejercicioSeis', (req,res) =>{

    var nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota12,nota13,nota14,nota15,nota16,nota17,nota18,nota19,nota20,nota21,nota22,nota23,nota24,nota25;
    var sumaNota = 0;
    var o = 0;
    var p = 0;

    nota1 = parseInt(req.body.nota1);
    nota2 = parseInt(req.body.nota2);
    nota3 = parseInt(req.body.nota3);
    nota4 = parseInt(req.body.nota4);
    nota5 = parseInt(req.body.nota5);
    nota6 = parseInt(req.body.nota6);
    nota7 = parseInt(req.body.nota7);
    nota8 = parseInt(req.body.nota8);
    nota9 = parseInt(req.body.nota9);
    nota10 = parseInt(req.body.nota10);
    nota11 = parseInt(req.body.nota11);
    nota12 = parseInt(req.body.nota12);
    nota13 = parseInt(req.body.nota13);
    nota14 = parseInt(req.body.nota14);
    nota15 = parseInt(req.body.nota15);
    nota16 = parseInt(req.body.nota16);
    nota17 = parseInt(req.body.nota17);
    nota18 = parseInt(req.body.nota18);
    nota19 = parseInt(req.body.nota19);
    nota20 = parseInt(req.body.nota20);
    nota21 = parseInt(req.body.nota21);
    nota22 = parseInt(req.body.nota22);
    nota23 = parseInt(req.body.nota23);
    nota24 = parseInt(req.body.nota24);
    nota25 = parseInt(req.body.nota25);

    var notas = [nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota13,nota14,nota15,nota16,nota17,nota18,nota19,nota20,nota21,nota22,nota23,nota24,nota25];

    //for(var i = 0; i <= notas.length-1; i++){
    //    sumaNota = sumaNota + notas[i];
    //}

    //while (o <= notas.length-1){
    //    sumaNota = sumaNota + notas[o];
    //    o++;
    //}

    do{
        sumaNota = sumaNota + notas[p];
        console.log(p + " " + sumaNota);
        p++;
    }while (p < notas.length) 

    var promedio = parseFloat(sumaNota / notas.length);

    res.render('ejercicio6',{
        promedio: promedio
    });

});

module.exports = router;