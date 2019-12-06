'use strict'



window.addEventListener("load", function () {
    console.log("Dom cargado");

        var formulario = document.querySelector("#form_1");
        var dashed = document.querySelector(".dashed");
        dashed.style.display = "none";
      
        formulario.addEventListener('submit', function () {
            console.log("Evento submit activado");
            
            var nombre = document.querySelector("#nombre").value;
            var apellidos = document.querySelector("#apellidos").value;
            var edad = document.querySelector("#edad").value;

            if (nombre.trim() == null || nombre.trim().length == 0) {
                alert("Introduce un nombre correcto");
                return false;
            }
            if (apellidos.trim() == null || apellidos.trim().length == 0) {
                alert("Introduce un apellido correcto");
                return false;
            }
            if (edad == null || edad <= 0 || isNaN(edad)) {
                alert("Introduce una edad correcta");
                return false;
            }
            var datos_usuario = [nombre, apellidos, edad];
            dashed.style.display = "block";
            var indice;
            

                for (indice in datos_usuario) {
                    var parrafo = document.createElement("p");
                    parrafo.append(datos_usuario[indice]);
                    dashed.append(parrafo);

                }
            

        });




})