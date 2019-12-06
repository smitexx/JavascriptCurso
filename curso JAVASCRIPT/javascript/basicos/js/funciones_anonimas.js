'use strict'


//Funciones anonimas...


/*var pelicula = function(pelicula){
    return("la pelicula es: "+ pelicula);
}

*/

// funciones de callback

function sumame(numero1, numero2, sumaymuestra, sumapordos) {
    var sumar = numero1 + numero2;
    sumaymuestra(sumar);
    sumapordos(sumar);
    return sumar;
}

sumame(5, 7, function (dato) { // se le pasan como parametro dos funciones que creamos en el momento
    console.log(dato);
}, function (dato) {
    console.log(dato * 2);
})
