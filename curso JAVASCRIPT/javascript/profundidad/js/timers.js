'use strict'


window.addEventListener("load", function () {

    //Timers --> cada 50 ms ejecuta ese codigo en bucle
       function intervalo(){
            var titulo = document.querySelector("h2");
            var tiempo = setInterval(function () {
                if (titulo.style.fontSize == "50px") {
                    titulo.style.fontSize = "30px";
                } else {
                    titulo.style.fontSize = "50px";
                }
            }, 1000);
            return tiempo;
           
        }
        // esta funcion hace parar un intervalo de tiempo en un tiempo dado y una varible tiempo valida para clearInterval()
        function parar_intervalo (parar,tiempo){
            var parado = setTimeout(function(){
                clearInterval(parar)
            },tiempo)

        }
    
        var tiempo  = intervalo();

        // esto lo que hace es quitar el intervalo de tiempo de una variable.
        var stop = document.querySelector("#stop");
        var parar_bucle = stop.addEventListener("click", function () {
            alert("has parado el intervalo en bucle");
            clearInterval(tiempo);
        })

        var inicio = document.querySelector("#inicio");
        var empezar_bucle = inicio.addEventListener("click",function(){
            alert("Que empiece el bucle");
           var tiempo2 = intervalo();
            parar_intervalo(tiempo2,5000);
        })

    })