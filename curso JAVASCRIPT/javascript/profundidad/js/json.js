'use strict'


/// JSON
window.addEventListener("load", function () {

    var pelicula = {
        titulo: "batman vs superman",
        year: 2017,
        pais: "Estados unidos"
    };

    var peliculas = [
        {titulo: "paradise", year : 2017, pais: "españa"},
        pelicula
    ]

    var div = document.querySelector("#peliculas");
    var indice;
    for (indice in peliculas){
        var parrafo = document.createElement("p");
        parrafo.append(peliculas[indice].titulo + "-"+ peliculas[indice].year + "-" + peliculas[indice].pais);
        div.append(parrafo);
    }
    console.log(peliculas);
    console.log(pelicula.titulo);
    console.log(pelicula.titulo);

 pelicula.titulo = "superman begins"; // asi ha cambiado el nombre de la pelicula

})
