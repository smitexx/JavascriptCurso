'use strict'

//FECHAS
window.addEventListener("load",function(){

    var fecha = new Date(); //Hay que crear el objeto fecha
    var year = fecha.getFullYear();
    var month = fecha.getMonth(); //Empieza a contar en el 0
    var day = fecha.getDay();

    var textoHora = `

    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}

    `;

    console.log(textoHora);
})

//MATEMATICAS  --> mirar pagina MATH OBJECT METHODS
var uno = Math.random();
var dos = Math.random();
console.log(dos);
console.log(uno);
console.log("un numero aleatorio: "+ parseInt(Math.random()));

