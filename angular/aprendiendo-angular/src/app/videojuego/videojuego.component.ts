import { Component } from '@angular/core';

@Component({
    selector : 'videojuego', //Nombre de la etiqueta personalizada
    //Plantilla html de codigo
    template : `  
        <h2>Componente de videojuego </h2>
        <ul>
            <li>GTA</li>
            <li>prince of persia</li>
            <li>tekken</li>
            <li>mario</li>
        </ul>
    `
})
export class VideojuegoComponent {
    constructor(){
        console.log("Se ha cargado el componente del videojuego");
    }
}