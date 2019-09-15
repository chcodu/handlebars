const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//Permite hacer la dirección localhost:puerto/public como el contenido estatico y publico del servidor
//Es decir si se entra a la url localhost:puerto buscará la carpeta index de la carpeta public
app.use(express.static(__dirname + '/public'));

//El registerPartials permite agregar porciones de codigo dentro de otra página. Esto se llaman partials con la sintaxis {{> partials }}
hbs.registerPartials(__dirname + '/views/parciales');

//Express con HBS(handlebars)
app.set('view engine', 'hbs');

//Renderiza la página home como página principal
app.get('/', (req, res) => {

    res.render('home', {
        anio: new Date().getFullYear()
    });
})

app.get('/about', (req, res) => {

    res.render('about');
})

app.listen(8080, () => {
    console.log('Escuchando desde el puerto 8080');
});