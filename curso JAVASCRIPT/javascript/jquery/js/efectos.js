$(document).ready(function(){
    //LAS VELOCIDADES SON FAST,NORMAL, Y LOS MS QUE TU QUIERAS SIN COMILLAS.
    //HIDE 
    $("#efectos").hide();
    $("#ocultar").hide();
    //1ªHIDE 
    $("#ocultar").click(function(){
        $("#mostrar").show();
        $("#ocultar").hide();
       $("#efectos").hide(1000);
    })
    //2ªSHOW
    $("#mostrar").click(function(){
        $("#mostrar").hide();
        $("#ocultar").show();
        $("#efectos").show('fast'); 
    })

    //3ªfadeIn :hacen los mismo pero con un efecto de fundido.
    $("#ocultar").click(function(){
        
       $("#efectos").fadeOut("slow");
    })
    //4ªfadeOut
    $("#mostrar").click(function(){
        $("#efectos").fadeIn('slow'); 
    })
    //5ªfadeTo
    $("#mostrar").click(function(){
        $("#efectos").fadeTo('slow',0.5); //El segundo parametro es la opacidad 
    })
    $("#ocultar").click(function(){
        $("#efectos").fadeTo('slow',0.1); //El segundo parametro es la opacidad 
    })
    //6ªtoggle, fadeToggle, slideToggle
    $("#todoenuno").click(function(){
        $("#efectos").slideToggle("fast");
    })
    var div_efectos = $("#efectos");
    $("#animar").click(function(){
        div_efectos.animate({marginLeft: "30%",
                            fontSize:"50px",
                            height:"110px", 
                            },'slow')
                    .animate({
                        borderRadius:'900px',
                        marginTop:"300px"
                    },'slow')
                    .animate({
                        borderRadius:'0px',
                        marginLeft:"0px" 
                    },'slow')
                    .animate({
                        borderRadius:'900px',
                        marginTop:"0px" 
                    },'slow')
                    .animate({marginLeft: "30%",
                            fontSize:"50px",
                            height:"110px", 
                            },'slow')
    })
})
