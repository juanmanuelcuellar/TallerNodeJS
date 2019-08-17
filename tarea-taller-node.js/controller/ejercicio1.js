const express = require('express');

const router = express.Router();

router.get('/ejercicioUno', (req,res) => {
    res.render('ejercicio1');
})

router.post('/ejercicioUno', (req,res) => {

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

    res.render('ejercicio1',{
        numMayor: numMayor,
        numMenor: numMenor
    });
});

module.exports = router;