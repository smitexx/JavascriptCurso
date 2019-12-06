$(document).ready(function () {  // El $ es un objeto que tambien se podria sustituir por jQuery, (document) es el selector que se le elige y ready es un evento con una funcion de callback;
    console.log("Estamos listos");

//SELECTOR DE ID

    var rojo = $("#rojo").css("background", "red")
        .css("color", "white"); // Primer parametro clave, el segundo el valor de la propiedad CSS.
    var verde = $("#verde").css("background", "green")
        .css("color", "white");

    var amarillo = $("#amarillo").css("background", "yellow")
        .css("color", "black");



//SELECTOR DE CLASES

    var zebra = $(".zebra");

    zebra.css("border", "5px dashed black")


//SELECTOR DE ETIQUETAS

    var parrafo = $("p");
    for (var i in parrafo) {
        if (i % 2 == 0) {
            parrafo[i].className = "zebra";
        }
    }
    console.log(parrafo);
    parrafo.click(function () {
        console.log("has hecho click");
        var that = $(this);
        if (!that.hasClass("zebra")) {
            that.addClass("zebra");
        } else {
            that.removeClass("zebra");
        }
    })

//SELECTORES DE ATRIBUTO 

$('[title="Google"]').css("background","green");
$('[title="facebook"]').css("background","#ccc");


// Otros (FIND Y PARENT)

$('p, a').addClass("margen-superior");

//Busqueda de etiquetas que no sabemos donde estan 2 formas:
var busqueda = $("#caja").find(".resaltado");
var busqueda = $("#caja .resaltado");
console.log(busqueda); //Nos devuelve un array con los elementos que cumplen esa propiedad

//Buscar en las etiquetas padres
var busqueda = $("#caja").eq(0).parent().parent().parent().find('[title="Google"]'); //Asi vas al body al elemento 0 del body.
console.log(busqueda);























});






