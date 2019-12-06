'use strict'




//BROWSER OBJECT MODEL 
function getBom(){
console.log(window.innerHeight); 
console.log(window.innerWidth);
}
function getBom_pPC(){
    console.log(screen.height); 
    console.log(screen.width);
    }

function datos_navegador(dato){
    console.log(window.location.dato);
}

getBom();
getBom_pPC();
var datos = window.location;
console.log(datos);
var i ;
for (i in datos){
document.write(window.location[i]);
}

function abrirventana(url){
    window.open(url);
}

function redirect (url){
	window.location.href = url;
}