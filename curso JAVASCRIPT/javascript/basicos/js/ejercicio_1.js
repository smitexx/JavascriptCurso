'use strict'

// si el numero pedido es menor o igual que 0 y no es un numero te sigue preguntando..

while(numero_0 <= 0 || numero_1 <= 0 || isNaN(numero_1) || isNaN(numero_0)){
var numero_0 = prompt("Di el primer numero",0 );
var numero_1 = prompt("Di el segundo numero",0);
}

if (Number(numero_0) > Number(numero_1)){
    console.log("el numero uno es mayor que el numero 2 ");
}else{
    console.log("el segundo numero es mayor o igual que el primero");
}