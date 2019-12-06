'use strict'


/*
1.Pida 6 numeros por pantalla y los meta en un array
2.Muestra todos sus elementos en el cuerpo de la pagina y en la consola.
3.Ordenarlo y mostrarlo.
4.Invertir su orden y mostrarlo.
5.Mostrar cuantos elementos tiene el array.
6.Busqueda de un valor introducido por el usuario y que nos diga si esta, y además su posicion.
*/


//1.

var numeros = [];

for (var i = 0; i < 3; i++){
    var pregunta = prompt("Introduce el numero "+i+ " hasta 4");
    numeros.push(pregunta);
}
//2.
document.write("<h2>Elementos del array del ejercicio 2: </h2>");

document.write("<ul>");
numeros.forEach(function(value,index,data){
    document.write("<li>"+index+" : "+value+"</li>");
});

document.write("</ul>");
//3.
var contador = 0;
for(var i = 0; i < numeros.length; i++){
    for (var j = i+1;j < numeros.length; j++){
        if (numeros[i]  > numeros[j]){
            contador = numeros[j];
            numeros[j] = numeros[i];
            numeros[i] = contador;
        }
    }
}
document.write("<h2>Elementos del array del ejercicio 3: </h2>");

document.write("<ul>");
numeros.forEach(function(value,index,data){
    document.write("<li>"+index+" : "+value+"</li>");
});
document.write("</ul>");
//4. 

numeros.reverse();
document.write("<h2>Elementos del array del ejercicio 4: </h2>");

document.write("<ul>");
numeros.forEach(function(value,index,data){
    document.write("<li>"+index+" : "+value+"</li>");
});
document.write("</ul>");

//5.

var longitud = numeros.length;

alert("Tu array tiene "+longitud+" elementos wey");

//6. 

var existe = prompt("Adivina si esta un numero del 1 al 10");
var comprobacion_numero = numeros.find(function(comprueba){
    return comprueba == existe;
});
console.log(comprobacion_numero);
if (existe == comprobacion_numero){
    var indice = numeros.findIndex(function(indice){
        return indice == existe;
    });
    alert("!ACERTASTE MAMAHUEVO QUE GENIO!, ademas te puedo decir su posicion en el array es: "+ indice);
     

}else{
    alert("Prueba otra vez si tienes huevos");
}