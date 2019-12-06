'use strict'


//Eventos del raton 
window.addEventListener("load", function () {

    var boton = document.getElementById("boton");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    // click del evento
    function cambiacolor() {
        console.log("me has dado click");
        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
    }

    boton.addEventListener("click", cambiacolor);

    //mouse over 

    boton.addEventListener("mouseover", function () {
        boton.style.background = "#ccc";
        console.log(this);

    });

    //mouse out 

    boton.addEventListener("mouseout", function () {
        boton.style.background = "white";
        console.log("he salido del boton");
    });


    // EVENTOS DEL TECLADO 

    //FOCUS --> cada vez que se ponga el usuario dentro del input

    var input = document.querySelector("#campo_nombre");
    input.addEventListener("focus", function () {
        console.log("Estas dentro del input");
    })

    //BLUR cada vez que se ponga el usuario dentro del input y luego salga


    var input = document.querySelector("#campo_nombre");
    input.addEventListener("blur", function () {
        console.log("Estas fuera del input");
    })

    //KEYDOWN  --> recoge las teclas que esta pulsando el usuario y la muestra por consola.
    input.addEventListener('keydown', function (event) {
        console.log("pulsando una tecla", String.fromCharCode(event.keyCode));
    })

    //KEYPRESS --> te enseña la tecla presionada
    input.addEventListener('keypress', function (event) {
        console.log("presionando una tecla", String.fromCharCode(event.keyCode));
    })

    //KEYUP --> nos dice la tecla soltada.

    input.addEventListener('keypress', function (event) {
        console.log("soltando una tecla", String.fromCharCode(event.keyCode));
    })
    
})
