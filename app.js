const express = require('express')
const app = express()

app.get('/', (req, res) => {

    let salida = {
        nombre: 'Christopher Coronado',
        edad: 25,
        url: req.url
    }


    res.send(salida);
})

app.get('/data', (req, res) => {

    let salida = {
        nombre: 'Christopher Coronado',
        edad: 25,
        url: req.url
    }


    res.send('Hola nodemon data');
})

app.listen(8080, () => {
    console.log('Escuchando desde el puerto 8080');

});