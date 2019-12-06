$(document).ready(function () {

    var box = $("#box");
    var semaforo = 4;
    if (semaforo == 0) {
        //MOUSEOVER
        box.mouseover(function () {
            $(this).css("background", "red");
        });
        //MOUSEOUT
        box.mouseout(function () {
            $(this).css("background", "green");
        });
    }
    if (semaforo == 1) {
        //HOVER: Combinacion de los dos anteriores.
        function cambiaverde() {
            $(this).css("background", "green");
        }
        function cambiarojo() {
            $(this).css("background", "red");
        }
        box.hover(cambiaverde, cambiarojo); // El primer parametro es como mouseover y el segundo es como mouseout;
    }
    if(semaforo == 2){
        //CLICK 
        box.click(function(){
            $(this).css("background", "blue")
                   .css("color", "white");
        })
        //DOUBLE CLICK
        box.dblclick(function(){
            $(this).css("background", "pink")
                   .css("color", "green");
        })
    }
    if(semaforo == 3 || semaforo == 4){
        //FOCUS: Click en una parte de un formulario.
        var nombre = $("#nombre");
        $(nombre).focus(function(){
            $(this).css("border","2px solid green");
            $("#datos").hide();
        })
        //BLUR: Cuando sales de focus.
        $(nombre).blur(function(){
            $(this).css("border","1px solid grey");
            var datos = $(this).val(); //Coge el valor del campo del formulario
            $("#datos").text(datos).show(); //.text es como innerHTML le pone texto al div datos y lo muestra con show.
        })

    if (semaforo == 4){
        var datos = $("#datos");
        //MOUSEDOWN : cuando presionas el boton del click
        datos.mousedown(function(){
            $(this).css("border-color","grey");
        });
        //MOUSEUP: cuando sueltas el boton del click
        datos.mouseup(function(){
            $(this).css("border-color","purple");
        });
        //MOUSEMOVE: El mousemove evento se activa cuando se mueve un dispositivo señalador (generalmente un mouse) sobre un elemento.
        $(document).mousemove(function(event){
           
            console.log("En x: "+event.clientX);
            console.log("En y: "+event.clientY);
            var sigueme = $("#sigueme");
            $(sigueme).css("left",event.pageX)
                      .css("top",event.pageY);
            
        });

    }
    }
});