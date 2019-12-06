'use strict'




var suma = 0;
var contador = 0;
var resultado = 0;

while (resultado >= 0) {
    resultado = parseInt(prompt("Di numeros hasta uno negativo", 0));
    if (isNaN(resultado)) {
        resultado = 0;
    }
    if (resultado < 0){
        break;
    }
    suma = suma + resultado;
    contador += 1;
    console.log( suma);
    console.log( (suma / contador));
}



alert("la suma de todos los numeros es: " +suma);
alert("la media de todos los numeros es: " + (suma / contador));