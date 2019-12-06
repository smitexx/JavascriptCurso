'use strict'


// metodos de busqueda en strings


var texto1 = "bienvenido al curso de  curso javascript";

var busqueda = texto1.match(/curso/g); // busqueda global
busqueda = texto1.charAt(44); // busca las palabras que haya desde la letra 14 + 5 en adelante.
busqueda= texto1.replace("javascript", "laravel");

console.log(busqueda);












