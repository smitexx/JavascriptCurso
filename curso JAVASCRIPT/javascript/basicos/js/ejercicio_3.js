'use strict'



var numero_1 = parseInt(prompt("Di el primer numero"));
var numero_2 = parseInt(prompt("Di el segundo nombre "));
document.write("<h2>Los numeros entre "+ numero_1+ " y el numero "+numero_2+" son: </h2>")
numero_1 += 1;
 
for (numero_1; numero_1 < numero_2; numero_1++) {
    console.log(numero_1);
    document.write(numero_1+"<br>");
}