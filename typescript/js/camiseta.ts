
interface CamisetaBase {
    setColor(color:string):void;
    getColor():string;
}

//Decorador
function estampar (logo:string){
    return function(target: Function) {
        target.prototype.estampacion = function():void{
            console.log("camiseta estampada con el logo "+ logo);
        }   
    }
}

//Clases
@estampar('Gucci')

class Camiseta implements CamisetaBase {
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
    
    constructor(color:string,modelo:string,marca:string,talla:string,precio:number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public setColor(color: string):void {
        this.color = color;
    }
    public getColor(): string {
        return this.color;
    }
}

var camiseta = new Camiseta("rojo","picuda","nike","XL",12);

camiseta.estampacion();

console.log(camiseta);