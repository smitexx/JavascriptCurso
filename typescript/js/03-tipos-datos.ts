
let cadena : string = "hola marico";
let edad : number = 12;
let condicion : boolean = true;


let cualquiera :any = 12 ;
cualquiera = "hola"; //WTF any deja meter cualquier tipo de datos.

//Variables mutabels xd 
let cadenaMutable : string | number = "hola";
cadenaMutable = 2;


//Definir tipos de datos
type alfanumerico = string | number;

//Arrays
var lenguajes : Array<string> = ["PHP", "js", "CSS"];
let years : number[] = [12,1,19,18]; // otra forma de definir el array

for (var i: number = 0 ; i < years.length; i++){
    console.log(years[i]);
}

console.log(cadena,edad);