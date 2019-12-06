'use strict'


var lenguaje = new Array("php", "css3", "javascript","c++");

var comprobacion = lenguaje.find(function(lenguaje){
    return lenguaje == "php";
});


var comprobacion = lenguaje.findIndex(function(lenguaje){
    return lenguaje == "php";
});

var numeros = [20,10,40,50];

var comprobacion = numeros.some(function(precio){
    return precio > 50;
})
console.log(comprobacion);