$(document).ready(function () {

    reloadLinks();
    console.log("hay este numero de letras en tu input: " + $("#add_link").val().trim().length);
    $("#add_link").blur(function(){
        console.log("has hecho blur");
        if($(this).val().trim().length > 0){
            $("#add_button").prop('disabled', false);
        }else{
            alert("Debes completar el campo para añadir nuevos enlaces");
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