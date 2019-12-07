import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector : 'videojuego', //Nombre de la etiqueta personalizada
    //Plantilla html de codigo
    templateUrl : "./videojuego.component.htm"
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo:string;
    public listado:string;

    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juego más populares";
        console.log("Se ha cargado el componente del videojuego");
    }
    ngOnInit(){
        console.log("On init ejecutado");
    }
    ngDoCheck(){
        console.log("Cambios realizados con exito");
    }
    ngOnDestroy(){
        console.log("Componente destruido");
    }
    cambiarTitulo(){
        this.titulo = "nuevo titulo del componente";
    }
}