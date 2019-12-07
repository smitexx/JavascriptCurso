# curso-js 

Estructuras de sintaxis :
														 <h1>REPASO DE HTML</h1>

 1. <p></p> --> parrafos

2. <blockquote></blockquote> --> esto es para escribir citas con sangrado 

3. <table border= "1" > --> matriz 2x3, el borde es necesario para la estetica
	<tr> --> pone una fila
		<th></th> -> pone las columnas en negrita
		<th></th> -> pone las columnas en negrita
		<th></th> -> pone las columnas en negrita
	</tr>
	<tr>--> pone una fila
		<td></td> -> pone columnas en arial.
		<td></td> -> pone columnas en arial.
		<td></td> -> pone columnas en arial.
	</tr>
</table>

4. <nav></nav> Dentro se introduce el menu de navegacion

5. <ul> -> esto hace una lista desordenada(unorder list)
	<li></li>
	<li></li>
  </ul>

6. <ol> -> esto hace una lista ordenada (order list)
	<li></li>
	<li></li>
</ol>

7. Formularios : 

<label for="Nombre">Nombre: </label> --> etiqueta para el formulario
<input type="text" name="Nombre" placeholder="Nombre..."> --> input para meter el nombre

<textarea name="" cols="10" rows="20"></textarea> --> hace un input gigante de texto 20x10

<input type="radio" name="genero">Hombre --> esto es el formulario tipo circulo

<select name="Nombre del select"> -->select para formulario
	<option value="Nombre de opcion"></option>
	<option value="Nombre de opcion"></option>
	<option value="Nombre de opcion"></option>
</select>

<button type= "submit" value="Nombre del boton">Nombre del boton</button> -->boton

8. <a href="link de la pagina" target="_blank">nombre del link</a> --> links hacia paginas, blank te abre el link en otra pagina

9. <img src="ubicacion de la imagen" alt="nombre cuando se le pone el puntero encima"> --> imagenes en html



 													<h1>JAVASCRIPT BÁSICOS</h1>


1. --FUNCIONES BASICAS:--

1. alert("hola mundo");
2. document.write("hola mundo desde un fichero externo");--> escribe en el fichero html texto.
3. <script type="text/javascript" src="js/variables.js"></script> --> sirve para introducir ficheros js en documentos html.
4. 'use strict' --> esto es el modo estricto de js y sirve para no realizar malas practicas a la hora de programar, (por ejemplo no definir variables sin el var delante);

--CONSOLA:--
1. console.log("texto que se muestra en la consola");

2. --SINTAXIS DEL LENGUAJE:--

1. Definir variables :

1. var nombre_variable = ""--> string / 2000 -->integer; -->definir variables globales.
2. let prueba = "hola" -->sirve para definir variables tambien la diferencia es que actua a nivel de bloque y si dos variables tienen el mismo nombre let lo que hace es hacerlas independiente una de la otra si let esta en una estructura de control (mirar archivo variables del curso). variable local.

2. Operadores:

var numero1 = 1;
var numero2 = 1;
var operacion = numero1+numero2;
operacion = numero1 * numero2 ;
operacion = numero1 / numero2;
operacion = numero1 % numero2;

var verdadero = true; -->operadores booleanos.
var falso = false; -->op booleanos.

---FUNCIONES IMPORTANTES!!!--

*Funcion Number(): var numero_falso = "33" --> se convierte en numero con las funcion-- > var numero_real = Number(numero_falso);
*Funcion parseInt() -->convierte a numero entero;
*Funcion parseFloat()--> convierte a numero flotante;
*Funcion String() --> convierte a texto un numero;
*Funcion typeof() --> dice que tipo de operador estas tratando;*
*Funcion isNaN() --> isNaN(variable), esto comprueba que no es un numero.*

--TEXTOS--

*Funcion numero.toLowercase() -->texto a minisculas
*Funcion numero.toUppercase() --> texto a mayusculas
*Funcion texto.length() --> numero de letras de una variable o numero de elementos en un array.*
*var textoTotal = texto1+texto2; --> concatenar dos textos.*
*Funcion texto1.concat(aqui puedo poner lo que quiera para concatenar);--> concatenar textos.*
*Funcion texto1.IndexOf("palabra buscada") --> lo que hace es buscar la primera aparicion de una palabra en el texto.
*Funcion texto1.lastIndexOf("palabra buscada") --> lo que hace es buscar la ultima aparicion de una palabra en el texto.*
*Funcion texto1.match(/palabra_buscada/g) --> esto hace una busqueda global y nos devuelve un array con el numero de apariciones de una palabra en un texto-* MUY IMPORTANTE!
*Funcion texto1.substr(14,5); --> Esta funcion te devuelve los 5 caracteres que hay a partir del caracter 14 de un texto, (se pueden poner los que quieras);*
*Funcion texto1.charAt(numero_de_Caracter)--> te devuelve el caracter indicado en el parametro.
*Funcion texto1.startsWith("principio de texto") - devuelve false si al principio de texto no esta lo indicado en el parametro y true si se encuentra al principio del texto.
*Funcion texto1.endWith("final de texto") - devuelve false si al final de texto no esta lo indicado en el parametro y true si se encuentra al final del texto.
*Funcion texto1.includes("palabra_deseada"); --> devuelve true si esta la palabra introducida por parametro en el texto y false si no esta.*
*Funcion texto1.replace("palabra_que_desea_reemplazar","palabra_que_se_introduce_en_texto"); --> reemplaza una palabra del texto por otra introducida por parametro.*
*Funcion texto1.slide(14,22)--> se recorta un texto a partir del numero de un caracter hasta otro.
*Funcion texto1.split(" ") --> te separa todas las palabras de un texto y las introduce en un array. Importante-
*Funcion texto1.trim() --> elimina todos los espacios en blanco por delante y por detras.*

---PLANTILLAS DE TEXTO ---
Las plantillas de texto sirven para combinar html5 y javascript con variables funciones etc...

EJEMPLO:
var aceptar = confirm("quieres desarrollar esta web?"); --> devuelve un valor booleano.
var nombre = prompt("mete tu nombre");
var apellidos = prompt("mete tus apellidos");



 // var texto = "mi nombre es "+ nombre+ " mis apellidos son "+apellidos;

var texto = `
       <h1>hola que tal</h1>
       <h3>Mi nombre es: ${nombre}</h3>  --> el simbolo $ sirve para definir variables.
       <h3>Mi apellido es: ${apellidos}</h3>
`;

3. Condicionales: 

El if es el de toda la vida.

switch (variable){
	case variable: lo que tiene que hacer;
	break;
	case variable: lo que tiene que hacer;
	break;
	default: 
		lo que tiene que hacer;
}

 
4. Operadores Logicos: 
 
 and : &&;
 or : ||;
 negacion : !


3. ---ALERTAS Y VENTANAS---

A)alert("");

B)confirm("Texto"); --> esto devuelve un valor booleano que debemos almacenar en una variable.
ejemplo: var resultado = confirm ("Estas seguro que desea continuar?");

C) var resultado = prompt("Que edad tienes?", 18); //18 es el valor por defecto (mirar ejercicio 1)


4. ----FUNCIONES-----

-Las funciones en javascript se definen como:

 function nombre_funcion(param1,param2){
		
}
-Tambien se le pueden pasar parametros opcionales pero ya definidos, ejemplo...

function prueba(param1,param2, opcional = false){
	Y con opcional ya tenemos una variables definida. Pero si se puede modificar opcionalmente en la invocacion de la funcion.
}

---PARAMETROS REST Y SPREAD---

REST--> sirve para definir parametros indefinidos los cuales se introduciran en un array en caso de usarlo.
Ejemplo... function listado_frutas(fruta1,fruta2, ...restodefrutas){
    console.log("Fruta 1 : ",fruta1);
    console.log("Fruta 2 : ",fruta2);
    console.log(restodefrutas);
}

listado_frutas("manzana","pera","coco","kiwi","naranja"); --> coco,kiwi y naranja se introduciran en un array de 3 elementos.

SPREAD--> Es lo contrario que rest, te permite introducir un array como parametro de una funcion y que los elementos de este sean los parametros correspondientes de la funcion. ejemplo: 

var frutas = ["naranja","manzana"];
listado_frutas(...frutas,"sandia","manzana");--> lo que se hace aqui es pasarle como primer parametro "naranja", y como segundo parametro "manzana". Esto es MUY INTERESANTE!

---FUNCIONES ANONIMAS---
Son aquellas que no tienes nombre y se pueden almacenar en variables.
 //Ejemplo:

var pelicula = function(pelicula){
    return("la pelicula es: "+ pelicula);
}

--CALLBACKS---

Son funciones "a" que se le pasan como parametro a otras invocaciones "b" y "a" se definen en la misma invocacion de "b".

Ejemplo:

// funciones de callback

function sumame(numero1, numero2, sumaymuestra, sumapordos) {  --> sumaymuetra y sumapordos son funciones de callback
    var sumar = numero1 + numero2;
    sumaymuestra(sumar);
    sumapordos(sumar);
    return sumar;
}

sumame(5, 7, function (dato) { ---> se le pasan como parametro dos funciones que creamos en el momento, se definen las funciones.
    console.log(dato);
}, function (dato) {
    console.log(dato * 2);
})

Funciones de flecha : ES una manera DISTINTA de definir las  funciones de callback, ejemplo:

function sumame(numero1, numero2, sumaymuestra, sumapordos) {  --> sumaymuetra y sumapordos son funciones de callback
    var sumar = numero1 + numero2;
    sumaymuestra(sumar);
    sumapordos(sumar);
    return sumar;
}

sumame(5, 7,  (dato) => { ---> se utilizan flechas para definir las funciones.
    console.log(dato);
},  (dato) => {
    console.log(dato * 2);
})



---ARRAYS---

Básicos : -Se pueden mezclar tipos de datos.

var nombres = ["arturo","lorenzo",true,54];

Objetos: 

var lenguajes = new Array("php","js","go","java");

--FOREACH --> se basa en una funcion (forEach) que tiene como parametro una funcion de callback la cual tiene como parametros elemento, index y data.

*index te muestra el indice del elemento que toque, elemento te muestra lo que contiene cada elemento del array y data contiene el array entero(limpio);*

lenguajes.forEach((elemento,index,data)=>{
    document.write("<li>"+index+elemento+data+"</li>"); -->  
})
document.write("</ul>");

--FORIN--> nos da la opcion de meter una variable en la que nos enseñe su indice.

var i ; -> indice.
Ejemplo:

for (i in numeros){
     document.write("<li>"+i+"<li>");
}

--AÑADIR Y QUITAR ELEMENTOS AL ARRAY--

// Añadir elementos al array ;

numeros.push("donete"); --> Lo añade por el final.

//quitar elementos del array

numeros.pop(); //quito el ultimo elemento.

//borrar el elemento concreto 

var indice = peliculas.indexOf('2.01');

if (indice > -1){
    peliculas.splice(indice,1); --> este 1 nos dice cuantos en adelante quieres borrar.
}

//convertir array a string

var prueba = numeros.join(); !importante almacenar en una variable.

ORDENAR ARRAYS :

*orden alfabetico --> prueba.sort(); 
*orden del reves --> prueba.reverse(); -->le da la vuelta al array poniendo el primer elemento en el final y sucesivos...*

BUSQUEDAS EN ARRAYS

METODO 1): Te dice el nombre del elemento si lo encuentra y "undefined" en caso contrario.

var lenguaje = new Array("php", "css3", "javascript","c++"); 

var comprobacion = lenguaje.find(function(lenguaje){
    return lenguaje == "php";
});

console.log(comprobacion);

METODO 2): Te da el indice donde esta el elemento 

var comprobacion = lenguaje.findIndex(function(lenguaje){
    return lenguaje == "php";
});

console.log(comprobacion);

METODO 3): Te dice si hay algun numero que cumple la condicion, es una funcion booleana de callback.

var numeros = [20,10,40,50];

var comprobacion = numeros.some(function(precio){
    return precio > 50;
})

console.log(comprobacion);



---ARRAYS MULTIDIMENSIONALES---

EJEMPLO: 

var nombres = ["numero real","entero","flotante"];
var numeros= ["2.01","2","2.4"];

var total = [nombres,numeros];

console.log(total[0][2]); --> muestra flotante.






										<h1>JAVASCRIPT EN PROFUNDIDAD</h1>


---DOCUMENT OBJECT MODEL---

*var hola = document.getElementById("id_buscado"); -->importante tener la linea de script por debajo del id ....
EJEMPLO:
var caja = document.getElementById("micaja");*
*var caja = document.getElementById("micaja").innerHTML; --> te coge el html que haya dentro de la estructura de ese id.*

--ESTILOS CON CSS--
function cambiacolor(color){
    caja.style.backgroundColor = color; -- ESTO ES IMPORTANTE
}

FUNCIONES IMPORTANTES:

*var caja = document.getElementById("micaja");* --> selecionar ids
var caja = document.getElementByClassName("micaja");* --> selecionar clases
*caja.style.estilorequerido = "propiedad"; --> estilos en css con js
*caja.ClassName = "clase"; --> colocar clases con js.
*var caja = document.querySelector(.clase) / (#id); ->selecciones ids y clases.
*var todoslosdivs = document.getElementsByTagName("div"); -->Conseguir elementos por su etiqueta.
*parrafo.appendchild("parrafo")--> le añade elementos html a otra estructura 
Ejemeplo: 
var todoslosdivs = document.getElementsByTagName("div"); -->cogemos todos los divs de la pagina
var i ;
for (i in todoslosdivs){ --> los recorremos
     var parrafo = document.createElement("p"); -->creamos un parrafo por cada div
     var texto = document.createTextNode(todoslosdivs[i].textContent); --> cogemos el contenido de los divs
     parrafo.appendChild(texto); --> le añadimos a cada parrafo el texto de cada div
    document.querySelector("#miseccion").appendChild(parrafo); -->cogemos el id de section y le añadimos cada parrafo con el contenido de cada div.
};*

---BROWSER OBJECT MODEL---

METODOS:
1)
*Metodo anchura pantalla = console.log(window.innerWidth);  // Estos metodos te dan datos del momento actual.
*Metodo altura pantalla = console.log(window.innerHeight);
2)
*Metodo anchura pantalla = console.log(screen.width);  // Estos metodos te dan datos de propiedades del pc.
*Metodo altura pantalla = console.log(screen.height);
*Metodo localizacion del archivo =  console.log(window.location);
3) function redirect (url){
	window.location.href = url;  --> esto sirve para cambiar la url del navegador.
}
function abrirventana(url){
    window.open(url);  -->abre una pestaña nueva del navegador.
}*


---EVENTOS---

*Evento onclick: Ejemplo de uso con un boton que cambia el fondo de color :*

METODO 1):

 <button id="boton" onclick="cambiacolor()">Dame cariño</button> //html --> con ondblclik hace 2cliks
 <script type="text/javascript"> //javascript
 var boton = document.getElementById("boton");

function cambiacolor(){
    console.log("me has dado click");
    var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }

}
</script>

METODO 2):

 solo javascript:
<script type="text/javascript">
var boton = document.getElementById("boton");
function cambiacolor(){
    console.log("me has dado click");
    var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
}

boton.addEventListener("click",cambiacolor);
</script>

*mouse over 
boton.addEventListener("mouseover",function(){
    boton.style.background = "#ccc";
});*

*mouse out 
boton.addEventListener("mouseout",function(){
    boton.style.background = "white";
    console.log("he salido del boton");
});*

Evento foco y teclado: 


// EVENTOS DEL TECLADO 

//FOCUS --> cada vez que se ponga el usuario dentro del input

var input = document.querySelector("#campo_nombre");
input.addEventListener("focus",function(){
    console.log("Estas dentro del input");
})

//BLUR cada vez que se ponga el usuario dentro del input y luego salga


var input = document.querySelector("#campo_nombre");
input.addEventListener("blur",function(){
    console.log("Estas fuera del input");
})

//KEYDOWN  --> recoge las teclas que esta pulsando el usuario y la muestra por consola.
input.addEventListener('keydown',function(event){
    console.log("pulsando una tecla", String.fromCharCode(event.keyCode));
})

//KEYPRESS --> te enseña la tecla presionada
input.addEventListener('keypress',function(event){
    console.log("presionando una tecla", String.fromCharCode(event.keyCode));
})

//KEYUP --> nos dice la tecla soltada.

input.addEventListener('keypress',function(event){
    console.log("soltando una tecla", String.fromCharCode(event.keyCode));
})


*Evento para cargar el fichero javascript donde queramos en el fichero html*Preliminares.

window.addEventListener("load", function () {

todo el codigo de js 

})

//INTERVALOS DE TIEMPO 

//Timers --> cada 1000 ms ejecuta ese codigo en bucle
       function intervalo(){
            var titulo = document.querySelector("h2");
            var tiempo = setInterval(function () {
                if (titulo.style.fontSize == "50px") {
                    titulo.style.fontSize = "30px";
                } else {
                    titulo.style.fontSize = "50px";
                }
            }, 1000);
            return tiempo;
           
        }

// este solo se ejecuta una vez.

        var titulo = document.querySelector("h2");
        console.log(titulo);
        var tiempo = setTimeout(function(){
            if(titulo.style.fontSize == "50px"){
                titulo.style.fontSize = "30px";
            }else{
                titulo.style.fontSize = "50px";
            }
        }, 50);
        

// esto lo que hace es quitar el intervalo de tiempo de una variable.
        var stop = document.querySelector("#stop");

        stop.addEventListener("click", function () {
            alert("has parado el intervalo en bucle");
            clearInterval(tiempo2);
        })


// EJERCICIO PRACTICO DEL DOM.

SUBMIT:
parte html: 
<!--enunciado:
1.Formulario campos: Nombres, apellidos y edad 
2.Boton de enviar el formulario : eventos submit
3.Mostrar esos datos por pantalla.
4.Tener un boton que al darle click nos muestra los datos actuales del formulario.

-->

<body>
    <h1>Vamos a hacer un bonito formulario</h1>
   <div class="box">
    <form action="#" onsubmit="return false;" method="POST" id="form_1">

        <label for="nombre">Nombre:</label>
        <input type="text" placeholder="nombre" name="nombre" id="nombre">
        <br>
        <label for="apellidos">Apellidos:</label>
        <input type="text" placeholder="apellidos" name="apellidos" id="apellidos">
        <br>
        <label for="edad">Edad:</label>
        <input type="number" placeholder="edad" name="edad" id="edad">
        <br>
        <input type="submit" value ="enviar" id="submit">

    </form>
   </div>

   <div class="box dashed">
        <h3>Informacion del usuario</h3>
        <hr>
        
   </div>
</body>
parte js: 
 window.addEventListener("load",function(){
     console.log("Dom cargado");
       var formulario = document.querySelector("#form_1");
       var dashed = document.querySelector(".dashed");
        dashed.style.display = "none";
       formulario.addEventListener('submit',function(){
           console.log("Evento submit activado");
           var nombre = document.querySelector("#nombre").value;
           var apellidos = document.querySelector("#apellidos").value;
           var edad = document.querySelector("#edad").value;
           var datos_usuario = [nombre,apellidos,edad];
           dashed.style.display = "block";
           var indice;
           for (indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            dashed.append(parrafo);
        }
       });



})

VALIDACION DE FORMULARIOS:

if (nombre.trim() == null || nombre.trim().length == 0){
            alert("Introduce un nombre correcto");
            return false;
        }
if (apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Introduce un apellido correcto");
            return false;
        }
if (edad == null || edad <= 0 || isNaN(edad)){
            alert("Introduce una edad correcta");
            return false;
        }





OPERADOR THIS: Lo que hace el this es referenciar a la variable sobre la que se le esta aplicando el evento, en el ejemplo de abajo la variable boton esta capturando un Id llamado boton y esa estructura html es la que se muestra en el console.log(this).
 
var boton = document.getElementById("boton");

boton.addEventListener("mouseover", function () {
        boton.style.background = "#ccc";
        console.log(this);

    });


----JSON (JAVASCRIPT OBJECT NOTATION)--> OBJETOS EN JAVASCRIPT----

EJEMPLO: Aqui se crea un objeto llamado pelicula, y luego se crea otro objeto que contiene otra pelicula definida y el objeto definido previamente, posteriormente lo que se hace es meter en un div las propiedades de los objetos definidos y mostrarlos por pantalla. 

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

---LOCAL STORAGE--- (Revisar ejercicio de localstorage);
Se trata de un almacenamiento local que nos permite guardar distinta informacion que el usuario crea mientras navega por la web, para poder acceder a ella de forma visual tenemos que dar f12 e irnos a application y donde pone localstorage ver las claves y los valores guardados.

EJEMPLO:

'use strict'

window.addEventListener("load",function(){
    if(typeof(Storage) !== 'undefined'){  -->comprobacion de que nuestro navegador soporta este almacenamiento.
        console.log("el local storage esta disponible");
    }else{
        console.log("local sotrage no disponible");
    }

    // Guardar datos ---> se ve en application
    
    localStorage.setItem("titulo", "Arturo Lorenzo Hernandez");
    // Recoger elementos del localstorage
    document.querySelector("#memoria").innerHTML = localStorage.getItem("titulo");

    //Guardar objetos en el local storage --> para guardar en el local storage objetos hay que pasarlo a string.

    var usuario = {
        nombre: "Arturo Lorenzo",
        web: "univmur.es",
        email: "arturo.lorenzo.h@hotmail.com"
    };
    localStorage.setItem("mi_usuario",JSON.stringify(usuario));
    // Recuperar objeto 
    var usuario_json = JSON.parse(localStorage.getItem("mi_usuario")); //--> decodifica la informacion de string a objeto JSON.
    console.log(usuario_json); // muestra por consola el objeto ya definido en json

    localStorage.removeItem("mi_usuario"); // esto quita un dato especifico del local storage.
    localStorage.clear(); // esto limpia todo el localstorage
    ;
});


--- FETCH PETICIONES AJAX ASINCRONAS ---

1ºPETICIONES AL SERVIDOR 
2ºTRANSFORMAMOS LOS DATOS AL FORMATO CONVENIENTE
3ºTRATAMOS LOS DATOS
4ºTRATAMOS LOS ERRORES

EJEMPLO: 
De lo que trata es de pedir peticiones asincronas de informacion a servicios backend, y hacer peticiones de tipo ajax(asincronas js).

//FETCH (ajax) y peticiones a servicios /apis rest

---PROMESAS---
las promesas son instrucciones que se le encargan al back-end de manera encadenada una detras de otra y de forma dependiente, la informacion que retorna la primera se le pasa por parametro a la segunda y asi sucesivamente.
Ejemplo:

        .then(data => data.json()) //primero pasamos el contenido del archivo a json 
        .then(users => { // segundo hacemos lo que queramos con el contenido del archivo(en este caso hemos filtrado el fichero para que solo salgan los datos de los usuarios.)
            listado_usuarios(users.data);
            return get_user_specific();
        })
        .then(data => data.json())
        .then(usuario => mostrar_user_specific(usuario.data));

        
 //Funciones:

    function get_usuarios(url) {
        return fetch("https://reqres.in/api/users") ; //con esta linea pedimos un archivo de una api (backend), esto se llama promesa
    }
    function get_user_specific(url){
        return fetch("https://reqres.in/api/users/2") ;
    }
    function getInfo(){
         
        var profesor = {
            nombre:'Arturo',
            apellidos:"lorenzo",
            url: "udemy.com"
        }
        
        return new Promise((resolve,project) => {
           var profesor_string = JSON.stringify(profesor); // Aqui se intenta convertir 
           if (typeof profesor_string != 'string' ) {
               return  reject("error"); // Este metodo deniega la promesa y es un parametro de la funcion callback (funcion opcional)
           }
               return resolve(profesor_string);
        })

    }
    function mostrar_user_specific(user){
        console.log(user);
        let nombre = document.createElement("h4");
        let imagen = document.createElement("img");
        imagen.src = user.avatar;
        imagen.height = "100";
        nombre.innerHTML = user.first_name + " " + user.last_name;
        var div_user = document.querySelector(".janet"); 
        div_user.appendChild(nombre);
        div_user.appendChild(imagen);

        document.querySelector(".janet .loading").style.display = "none";
        
         
        
    }
    function listado_usuarios(usuarios) {
        usuarios.map(function (user, i) {
            let nombre = document.createElement('h2');
            nombre.innerHTML = i + user.first_name + " " + user.last_name
            div_usuarios.appendChild(nombre);
        })
        document.querySelector(".loading").style.display = "none";
    }

---CREAR PROMESAS---
Para crear una promesa tenemos que definir una funcion que exactamente nos devuelva una promesa en formato JSON.

Ejemplo:

function getInfo(){
         
        var profesor = {   /* creamos el objeto*/
            nombre:'Arturo',
            apellidos:"lorenzo",
            url: "udemy.com"
        }
        
        return new Promise((resolve,project) => {  //devolvemos la promesa con su funcion de callback correspondiente
           var profesor_string = JSON.stringify(profesor); // Aqui se intenta convertir 
           if (typeof profesor_string != 'string' ) {
               return  reject("error"); // Este metodo deniega la promesa y es un parametro de la funcion callback (funcion opcional)
           }
               return resolve(profesor_string); // al final si todo funciona correctamente la promesa nos devolveria un objeto parseado a JSON, y listo para pasarlo como parametro a la siguiente promesa. (Mirar fichero fetch.js)
        })

    }

---CAPTURAR ERRORES EN LAS PROMESAS---
El objetivo de capturar los errores en las promesas es el de alertar al usuario de que los archivos pedidos en la pagina web a un servicio backend no han sido encontrados, debido a diversos motivos, (ejemplo: que la url pedida por fetch este mal escrita), de este modo en cuanto una promesa no se puede realizar salta el codigo introducido en el catch(error => {});

Ejemplo:

.catch(error =>{
            alert("error en el acceso al servidor"); // Esto saltaria si se produce algun error en la llamada al servidor.
        });

---CAPTURAR ERRORES EN CODIGO JS TRY-CATCH ---

Fácil y sencillo si piensas que en alguna parte del codigo puede ocurrir un error en un momento dado usas la estructura y te devolvera error en caso de que lo haya.

Ejemplo: 

try{
        var year = 2019;
        alert(yea);  // Al estar mal escrita la variable saltara el error escrito debajo.
 
    }catch(error){
        alert("Ha ocurrido un error en el codigo");
    }



----- FECHAS Y FUNCIONES MATEMATICAS ----

**Fechas**

window.addEventListener("load",function(){

    var fecha = new Date(); //Hay que crear el objeto fecha
    var year = fecha.getFullYear();
    var month = fecha.getMonth(); //Empieza a contar en el 0
    var day = fecha.getDay();

    var textoHora = `
    
    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}

    `;

    console.log(textoHora);
})

**Matematicas**

//MATEMATICAS  --> mirar pagina MATH OBJECT METHODS
var uno = Math.random();
var dos = Math.random();
console.log(dos);
console.log(uno);
console.log("un numero aleatorio: "+ parseInt(Math.random()));




                                                    <h1>JQUERY</h1>

**SELECTORES**

//IDS: 

$(document).ready(function(){  // El $ es un objeto que tambien se podria sustituir por jQuery, (document) es el selector que se le elige y ready es un evento con una funcion de callback;
 console.log("Estamos listos");

//SELECTOR DE ID

var rojo = $("#rojo").css("background","red")
                     .css("color","white"); // Primer parametro clave, el segundo el valor de la propiedad CSS.
var verde = $("#verde").css("background","green")
                       .css("color","white");

var amarillo = $("#amarillo").css("background","yellow")
                             .css("color","black");


});



//SELECTOR DE ETIQUETAS : Sirve para manejar elementos html y sus propiedades.

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

//SELECTORES DE ATRIBUTO : Sirve para manejar partes del DOM por medio de los atributos de los elementos html.IMPORTANTE!

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

//EVENTOS EN JQUERY: 

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
        //FOCUS: Click en una parte de un elemento html
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
            $("body").css("height","800px")
            console.log("En x: "+event.clientX);
            console.log("En y: "+event.clientY);
            var sigueme = $("#sigueme");
            $(sigueme).css("left",event.pageX)
                      .css("top",event.pageY);
            
        });

    }
    }
});

//INCISO DE RECOGER NUMERO DE PIXELES EN PANTALLA

pageX y pageY:
relativo a la parte superior izquierda del área de contenido completamente procesada en el navegador. Este punto de referencia está debajo de la barra de direcciones y el botón Atrás en la esquina superior izquierda. Este punto podría estar en cualquier lugar de la ventana del navegador y realmente puede cambiar la ubicación si hay páginas incrustadas desplazables incrustadas en las páginas y el usuario mueve una barra de desplazamiento.

screenX y screenY: en
relación con la parte superior izquierda de la pantalla / monitor físico, este punto de referencia solo se mueve si aumenta o disminuye el número de monitores o la resolución del monitor.

clientX y clientY:
relativo al borde superior izquierdo del área de contenido ( la ventana gráfica ) de la ventana del navegador. Este punto NO se mueve incluso si el usuario mueve una barra de desplazamiento desde el navegador.

//EFECTOS, ANIMACIONES Y MÁS: 

**TEXTOS Y USO DE ATRIBUTOS DE ELEMENTOS HTML**

$(document).ready(function () {

    reloadLinks();
    console.log("hay este numero de letras en tu input: " + $("#add_link").val().trim().length);
    $("#add_link").blur(function(){
        console.log("has hecho blur");
        if($(this).val().trim().length > 0){
            $("#add_button").prop('disabled', false);
        }else{
            $("#add_button").prop('disabled', true);
        }
    })
    
    $("#add_button").click(function () {
        var link = $("#add_link").val();
        var a = document.createElement("a");
        var li = document.createElement("li");
        a.href = link;
        a.text = link;
        a.className = "textos";
        $("#add_link").val('');
        li.appendChild(a);

        $("#lista_links").append(li);
    });

    function reloadLinks() {
        $("a.textos").each(function (indice) {
            var enlace = $(this).attr("href"); // Esto sirve para acceder a los atributos de los elementos html.
            var that = $(this);
            that.text(enlace);
        });
    }
});


***EFECTOS DE OCULTAR Y MOSTRAR DE TODA CLASE***
//A TODAS ESTAS ANIMACIONES SE LE PUEDE AÑADIR FUNCIONES DE CALLBACK
EJEMPLO:
$("#mostrar").hide(function(){
    console.log("el cartel se ha ocultado");
});


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
})


***ANIMACIONES PERSONALIZADAS CON JQUERY*** //Concatena estilos de css para darle mas flexibilidad.

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



TYPESCRIPT


1º instalar node.js 
2º instalar typescript npm install -g typescript
3º para usar ficheros ts hay que compilarlos 

tsc fichero.ts

4º esto nos genera un ficheros.js que añadiremos al proyecto

5º para compilar en modo observador y no tener que compilar a cada cambio tenemos el siguiente comando

tsc -w *.ts //este comando hay que hacerlo desde cygwin para que coja la expresion regular.


ANGULAR

INSTALACIÓN
npm install -g @angular/cli

DESINSTALACIÓN 
npm uninstall -g @angular/cli
npm cache verify
npm cache clear --force


GENERAR PROYECTO ANGULAR
ng new nombre-proyecto


LANZAR PROYECTO EN SERVER LOCAL
ng serve

GENERAR COMPONENTES (con cmd no con cygwin)
ng generate component nombre-componente


HOOKS 

INTERFAZ OnInit

metodo que se ejecuta nada más el componente;

INTERFAZ DoCheck

se ejecuta cada vez que se hace un cambio en el codigo

OnDestroy

Se ejecuta cuando se destruye un componente
