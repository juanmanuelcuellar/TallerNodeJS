const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const alert = require('alert-node');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// configurar las vistas

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// bootstrap

app.use(express.static(path.join(__dirname,'public')));

// routes

app.use(require('./controller/ejercicio1'));
app.use(require('./controller/ejercicio2'));
app.use(require('./controller/ejercicio3'));
app.use(require('./controller/ejercicio4'));
app.use(require('./controller/ejercicio5'));
app.use(require('./controller/ejercicio6'));
app.use(require('./controller/ejercicio7'));
app.use(require('./controller/ejercicio8'));
app.use(require('./controller/ejercicio9'));

app.use(require('./controller/menu'));

// escuchando el puerto

app.listen(3000, () =>{
    console.log('escuchando puerto 3000');
})


