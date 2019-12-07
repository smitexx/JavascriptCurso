import { Component } from '@angular/core';
import {Configuracion } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string ;
  public descripcion : string;
  public config : any;

  
  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }



  public mostrarVideojuegos: boolean = true;
  hideShowVideojuegos(){
    this.mostrarVideojuegos = !this.mostrarVideojuegos;
  }
}
