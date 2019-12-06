'use strict'



//ALERT

alert("hola manes");

//Ventanas

var resultado = confirm("quiere continuar?");

if (resultado){
    console.log("quiere continuar");
}else{
    console.log("no quiere continuar");
}


// Ingreso de datos 

var mi_resultado = prompt("Que edad tienes?", 18); //18 es el valor por defecto
console.log(mi_resultado);