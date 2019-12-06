'use strict'



var nombre = "victor";
var nombres = ["arturo", "lorenzo", "hernandez"];


var lenguajes = new Array("php", "js", "go", "java");
document.write("<ul>");
/*
for (var i = 0; i < lenguajes.length; i++) {

    document.write("<li>"+lenguajes[i]+"</li>");
}
*/


// FOREACH --> se basa en una funcion forEach que tiene como parametro una funcion de callback la cual tiene como parametros elemento, index y data.
lenguajes.forEach((elemento,index,data)=>{
    document.write("<li>"+index+elemento+data+"</li>");
})
document.write("</ul>");

