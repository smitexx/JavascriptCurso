'use strict'


var numero = parseInt(prompt("Escribe un numero y te doy la tabla de multiplicacion"));

for (var i = 0; i < 11; i++){
    document.write(numero+" * "+ i +" = "+ (numero*i)+"<br>");   
}