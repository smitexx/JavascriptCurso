'use strict'





var aux = parseInt(prompt("di el primer numero",0));
var aux_1= parseInt(prompt("di el segundo numero",0));

for(aux; aux <= aux_1; aux++){
    if (aux % 2 != 0){
        document.write("Este numero es impar: "+aux+"<br>");
    }
}
