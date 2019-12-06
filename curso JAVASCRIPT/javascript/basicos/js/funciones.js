'use strict'

// Parametros rest y spread.

//REST

function listado_frutas(fruta1,fruta2, ...restodefrutas){
    console.log("Fruta 1 : ",fruta1);
    console.log("Fruta 2 : ",fruta2);
    console.log(restodefrutas);
}

listado_frutas("manzana","pera","coco","kiwi","naranja");


//SPREAD 

var frutas = ["naranja","manzana"];
listado_frutas(...frutas,"sandia","manzana");