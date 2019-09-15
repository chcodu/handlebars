const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    let nombre = '';

    palabras.forEach((palabras, idx) => {
        nombre = nombre + palabras.charAt(0).toUpperCase() + palabras.slice(1).toLowerCase() + ' ';
    });

    return nombre;
});