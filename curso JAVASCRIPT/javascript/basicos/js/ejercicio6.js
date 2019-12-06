'use strict'



/* 
par o impar con ventana prompt 
*/
 

while (isNaN(resultado) ){
    var resultado = prompt("dime un numero y te dire si es par o impar ");
    
}

if (resultado %2 != 0){
    alert("el numero es impar");
}else{
    alert("el numero es par");
}