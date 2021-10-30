$(function(){
    $("#actualizar-usuario").hide();
    $("#cancelar-actualizar-usuario").hide();
    
    $("#cargar-usuarios").click(function(){

        $.get("http://127.0.0.1:8080/usuario", function(data){
            
            $("#cuerpo-tb-usuarios").html("");
            for(let i=0; i<data.length; i++){
                let tr=`<tr id="tr_usuario_${data[i].id}">
                    <td>`+data[i].id+`</td>
                    <td>`+data[i].nombre+`</td>
                    <td>`+data[i].apellido+`</td>
                    <td>`+data[i].email+`</td>
                    <td>`+data[i].categoria+`</td>
                    <td><input type="button" id="eliminar" value="Eliminar"  onclick="eliminarUsuario(${data[i].id})"></td>
                    <td><input type="button" id="actualizar" value="Actualizar"  onclick="actualizarUsuario(${data[i].id})"></td>
                        </tr>`;
                $("#cuerpo-tb-usuarios").append(tr)
            }
        })
    });

    $("#guardar-usuario").on("click", function(e){
        e.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let apellido = $("#apellido").val();
        let email = $("#email").val();
        let categoria = $("#categoria").val();


        fetch("http://127.0.0.1:8080/usuario" , {
            method:"POST",
            mode:"cors",
            cache:"no-cache",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({nombre,apellido,email,categoria})

        })//.then(response => response.json().then(()=>alert("Guardado")));
        .then(function(response){
            response
            .json()
            .then(function(data){
                let mensaje = "Se guardó exitosamente el usuario:\n\n";
                mensaje += "Id: "+data.id+"\n";
                mensaje += "Nombre: "+data.nombre+"\n";
                mensaje += "Apellido: "+data.apellido+"\n";
                mensaje += "Email: "+data.email+"\n";
                mensaje += "Categoría: "+data.categoria;

                alert(mensaje);
                document.getElementById("nombre").value = "";
                $("#apellido").val("");
                $("#email").val("");
                $("#categoria").val("");
            });

        });
    });

    $("#actualizar-usuario").on("click", function(e){
        e.preventDefault();
        let id = $("#id").val();
        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let email = $("#email").val();
        let categoria = $("#categoria").val();


        fetch("http://127.0.0.1:8080/usuario" , {
            method:"PUT",
            mode:"cors",
            cache:"no-cache",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({id,nombre,apellido,email,categoria})

        })
        .then(function(response){
            response
            .json()
            .then(function(data){
                $("#actualizar-usuario").hide();
                $("#cancelar-actualizar-usuario").hide();
                $("#guardar-usuario").show();
                let mensaje = "Se actualizó exitosamente el usuario:\n\n";
                mensaje += "Id: "+data.id+"\n";
                mensaje += "Nombre: "+data.nombre+"\n";
                mensaje += "Apellido: "+data.apellido+"\n";
                mensaje += "Email: "+data.email+"\n";
                mensaje += "Categoría: "+data.categoria;

                alert(mensaje);
                $("#id").val("");
                $("#nombre").val("");
                $("#apellido").val("");
                $("#email").val("");
                $("#categoria").val("");

                let tr=`<td>`+data.id+`</td>
                    <td>`+data.nombre+`</td>
                    <td>`+data.apellido+`</td>
                    <td>`+data.email+`</td>
                    <td>`+data.categoria+`</td>
                    <td><input type="button" id="eliminar" value="Eliminar"  onclick="eliminarUsuario(${data.id})"></td>
                    <td><input type="button" id="actualizar" value="Actualizar"  onclick="actualizarUsuario(${data.id})"></td>`;
                $("#tr_usuario_"+data.id).html(tr);
            });

        });
    });

    $("#cancelar-actualizar-usuario").on("click", function(e){
        $("#actualizar-usuario").hide();
        $("#cancelar-actualizar-usuario").hide();
        $("#guardar-usuario").show();
        
        $("#id").val("");
        $("#nombre").val("");
        $("#apellido").val("");
        $("#email").val("");
        $("#categoria").val("");
    });

    $("#buscar-categoria").click(function(){
        let categoria = document.getElementById("buscar-cat").value;

        let url="http://127.0.0.1:8080/usuario/query?categoria=";

        $.get(url+categoria, function(data){

            $("#cuerpo-tb-usuarios").html("");
            for(let i=0; i<data.length; i++){
                let tr=`<tr id="tr_usuario_${data[i].id}">
                    <td>`+data[i].id+`</td>
                    <td>`+data[i].nombre+`</td>
                    <td>`+data[i].apellido+`</td>
                    <td>`+data[i].email+`</td>
                    <td>`+data[i].categoria+`</td>
                    <td><input type="button" id="eliminar" value="Eliminar"  onclick="eliminarUsuario(${data[i].id})"></td>
                    <td><input type="button" id="actualizar" value="Actualizar"  onclick="actualizarUsuario(${data[i].id})"></td>
                        </tr>`;
                $("#cuerpo-tb-usuarios").append(tr);
            }

            $("#buscar-cat").val("");

        });
    });

    $("#buscar-id").click(function(){
        let id = document.getElementById("buscar").value;

        let url="http://127.0.0.1:8080/usuario/";

        $.get(url+id, function(data){

            $("#cuerpo-tb-usuarios").html("");
                let tr=`<tr id="tr_usuario_${data.id}">
                    <td>`+data.id+`</td>
                    <td>`+data.nombre+`</td>
                    <td>`+data.apellido+`</td>
                    <td>`+data.email+`</td>
                    <td>`+data.categoria+`</td>
                    <td><input type="button" id="eliminar" value="Eliminar"  onclick="eliminarUsuario(${data.id})"></td>
                    <td><input type="button" id="actualizar" value="Actualizar"  onclick="actualizarUsuario(${data.id})"></td>
                        </tr>`;
                $("#cuerpo-tb-usuarios").append(tr);

                //Limpia el campo buscar por ID
                $("#buscar").val(""); 
        });
    });

});

function eliminarUsuario(id){
    let url="http://127.0.0.1:8080/usuario/"+id;
    fetch(url, {
        method:"DELETE",
        mode:"cors",
        cache:"no-cache"
    })//.then(data => console.log(data));
    .then(function(data){
        console.log(data);
        alert("Se ha eliminado el usuario con Id: "+id);
        $( "#tr_usuario_"+id ).remove();
    });
}

function actualizarUsuario(id){
    let url="http://127.0.0.1:8080/usuario/"+id;
    fetch(url, {
        method:"GET",
        mode:"cors",
        cache:"no-cache"
    })
    .then(function(response){
        console.log(response);
        response
        .json()
        .then(function(data){
            console.log(data);
            $("#actualizar-usuario").show();
            $("#cancelar-actualizar-usuario").show();
            $("#guardar-usuario").hide();
            $("#id").val(data.id);
            $("#nombre").val(data.nombre);
            $("#apellido").val(data.apellido);
            $("#email").val(data.email);
            $("#categoria").val(data.categoria);
        });
    });
}
