'use strict'

    //Ejercicio de localstorage
    /

    window.addEventListener("load", function () {
        
        var boton_enviar = document.querySelector("#form_meter");
        boton_enviar.addEventListener("submit", function () {
            var respuesta = document.querySelector("#respuesta_meter").value;
            if (respuesta.length >= 1) {
                localStorage.setItem(respuesta,respuesta);
            }
        });
        var lista = document.querySelector("#lista");
        for (var i in localStorage) {

            console.log(localStorage[i]);

            if (typeof localStorage[i] == "string") {
                var li = document.createElement("li");
                li.append(localStorage[i]);
                lista.append(li);
            }

            var boton_enviar = document.querySelector("#form_borrar");
            boton_enviar.addEventListener("submit", function () {
                var respuesta = document.querySelector("#respuesta_borrar").value;
                if (respuesta.length >= 1) {
                    localStorage.removeItem(respuesta,respuesta);
                }
            });
        }
    })