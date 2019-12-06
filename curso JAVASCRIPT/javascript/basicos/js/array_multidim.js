'use strict'





var nombres = ["numero real","entero","flotante"];
var numeros= ["2.01","2","2.4"];


//var total = [nombres,numeros];

//console.log(total[0][2]);
 
// Añadir elementos al array ;
/*
numeros.push("donete");

//quitar elementos del array

numeros.pop(); //quito el ultimo elemento.*/

var indice = numeros.indexOf('2.01');

if (indice > -1){
    numeros.splice(indice,1);
}

var prueba = numeros.join();
var i ;
for (i in numeros){
     document.write("<li>"+i+"<li>");
}
numeros.sort();

numeros.reverse();

