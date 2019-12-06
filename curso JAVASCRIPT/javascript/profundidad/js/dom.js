'use strict'

//-DOM Document Object Model


var caja = document.getElementById("micaja");
console.log(caja);
function cambiacolor(color){
    caja.style.backgroundColor = color;
}
caja.innerHTML = "vete a la mierda";

 // Conseguir elementos por su etiqueta.

 var todoslosdivs = document.getElementsByTagName("div");

var i ;
for (i in todoslosdivs){
    if(typeof todoslosdivs[i].textContent == "string"){
     var parrafo = document.createElement("p");
     var texto = document.createTextNode(todoslosdivs[i].textContent);
     parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
    }
};
