import { Component } from '@angular/core';

@Component({
    selector : 'zapatillas', //nombre de la etiqueta
    templateUrl : './zapatillas.component.htm' //ruta donde esta el html que utiliza esta clase
})

export class ZapatillasComponent{
    public titulo : string = "Zapatillas del componente";
}