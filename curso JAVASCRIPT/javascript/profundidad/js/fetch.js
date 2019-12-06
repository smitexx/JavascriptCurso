'use strict'

//FETCH (ajax) y peticiones a servicios /apis rest
window.addEventListener("load", function () {

    var div_usuarios = document.querySelector("#usuarios");

    get_usuarios()
        .then(data => data.json()) //primero pasamos el contenido del archivo a json 
        .then(users => { // segundo hacemos lo que queramos con el contenido del archivo(en este caso hemos filtrado el fichero para que solo salgan los datos de los usuarios.)
            listado_usuarios(users.data);
            return get_user_specific();
        })
        .then(data => data.json())
        .then(usuario => {
            mostrar_user_specific(usuario.data)
            return getInfo();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error =>{
            alert("error en el acceso al servidor");
        });

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
        
        return new Promise((resolve,reject) => {
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

})