'use strict'

window.addEventListener("load",function(){
    if(typeof(Storage) !== 'undefined'){
        console.log("el local storage esta disponible");
    }else{
        console.log("local sotrage no disponible");
    }


    // Guardar datos ---> se ve en application
    
    localStorage.setItem("titulo", "Arturo Lorenzo Hernandez");
    // Recoger elementos del localstorage
    document.querySelector("#memoria").innerHTML = localStorage.getItem("titulo");

    //Guardar objetos en el local storage --> para guardar en el local storage objetos hay que pasarlo a string.

    var usuario = {
        nombre: "Arturo Lorenzo",
        web: "univmur.es",
        email: "arturo.lorenzo.h@hotmail.com"
    };
    localStorage.setItem("mi_usuario",JSON.stringify(usuario));
    // Recuperar objeto 
    var usuario_json = JSON.parse(localStorage.getItem("mi_usuario")); //--> decodifica la informacion de string a objeto JSON.
    console.log(usuario_json); // muestra por consola el objeto ya definido en json

    localStorage.removeItem("mi_usuario"); // esto quita un dato especifico del local storage.
    localStorage.clear(); // esto limpia todo el localstorage
    
});


 