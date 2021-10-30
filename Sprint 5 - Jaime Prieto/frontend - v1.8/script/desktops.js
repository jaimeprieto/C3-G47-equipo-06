$(function(){
    $("#actualizar-computador").hide();
    $("#cancelar-actualizar-computador").hide();

    $("#cargar-computadores").click(function(){
        $.get("http://127.0.0.1:8080/computador", function(datac){
            
            $("#cuerpo-tb-computadores").html("");
            for(let i=0; i<datac.length; i++){
                let tr=`<tr id="tr_computador_${datac[i].id}">
                    <td>`+datac[i].id+`</td>
                    <td>`+datac[i].referencia+`</td>
                    <td>`+datac[i].marca+`</td>
                    <td>`+datac[i].dduro+`</td>
                    <td>`+datac[i].mram+`</td>
                    <td>`+datac[i].procesador+`</td>
                    <td>`+datac[i].pantalla+`</td>
                    <td>`+datac[i].precio+`</td>
                    <td>`+datac[i].categoria+`</td>
                    <td><input type="button" id="eliminar" value="Eliminar"  onclick="eliminarComputador(${datac[i].id})"></td>
                    <td><input type="button" id="actualizar" value="Actualizar"  onclick="actualizarComputador(${datac[i].id})"></td>
                        </tr>`;
                $("#cuerpo-tb-computadores").append(tr)
            }
        })
    });

    $("#guardar-computador").on("click", function(e){
        e.preventDefault();
        let referencia = document.getElementById("referencia").value;
        let marca = $("#marca").val();
        let dduro = $("#dduro").val();
        let mram = $("#mram").val();
        let procesador = $("#procesador").val();
        let pantalla = $("#pantalla").val();
        let precio = $("#precio").val();
        let categoria = $("#categoria").val();


        fetch("http://127.0.0.1:8080/computador" , {
            method:"POST",
            mode:"cors",
            cache:"no-cache",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({referencia,marca,dduro,mram,procesador,pantalla,precio,categoria})

        }).then(function(response){
            response
            .json()
            .then(function(data){
                let mensaje = "Se guardó exitosamente el computador:\n\n";
                mensaje += "Id: "+data.id+"\n";
                mensaje += "Referencia: "+data.referencia+"\n";
                mensaje += "Marca: "+data.marca+"\n";
                mensaje += "Disco duro: "+data.dduro+"\n";
                mensaje += "Memoria ram: "+data.mram+"\n";
                mensaje += "Procesador: "+data.procesador+"\n";
                mensaje += "Pantalla: "+data.pantalla+"\n";
                mensaje += "Precio: "+data.precio+"\n";
                mensaje += "Categoría: "+data.categoria;

                alert(mensaje);
                document.getElementById("referencia").value = "";
                $("#marca").val("");
                $("#dduro").val("");
                $("#mram").val("");
                $("#procesador").val("");
                $("#pantalla").val("");
                $("#precio").val("");
                $("#categoria").val("");
            });
        });
    });

    $("#actualizar-computador").on("click", function(e){
        e.preventDefault();
        let id = $("#id").val();
        let referencia = $("#referencia").val();
        let marca = $("#marca").val();
        let dduro = $("#dduro").val();
        let mram = $("#mram").val();
        let procesador = $("#procesador").val();
        let pantalla = $("#pantalla").val();
        let precio = $("#precio").val();
        let categoria = $("#categoria").val();


        fetch("http://127.0.0.1:8080/computador" , {
            method:"PUT",
            mode:"cors",
            cache:"no-cache",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({id,referencia,marca,dduro,mram,procesador,pantalla,precio,categoria})

        })
        .then(function(response){
            response
            .json()
            .then(function(datac){
                $("#actualizar-computador").hide();
                $("#cancelar-actualizar-computador").hide();
                $("#guardar-computador").show();
                let mensaje = "Se actualizó exitosamente el computador:\n\n";
                mensaje += "Id: "+datac.id+"\n";
                mensaje += "Referencia: "+datac.referencia+"\n";
                mensaje += "Marca: "+datac.marca+"\n";
                mensaje += "Disco duro: "+datac.dduro+"\n";
                mensaje += "Memoria ram: "+datac.mram+"\n";
                mensaje += "Procesador: "+datac.procesador+"\n";
                mensaje += "Pantalla: "+datac.pantalla+"\n";
                mensaje += "Precio: "+datac.precio+"\n";
                mensaje += "Categoría: "+datac.categoria;

                alert(mensaje);
                $("#id").val("");
                $("#referencia").val("");
                $("#marca").val("");
                $("#dduro").val("");
                $("#mram").val("");
                $("#procesador").val("");
                $("#pantalla").val("");
                $("#precio").val("");
                $("#categoria").val("");

                let tr=`<td>`+datac.id+`</td>
                <td>`+datac.referencia+`</td>
                <td>`+datac.marca+`</td>
                <td>`+datac.dduro+`</td>
                <td>`+datac.mram+`</td>
                <td>`+datac.procesador+`</td>
                <td>`+datac.pantalla+`</td>
                <td>`+datac.precio+`</td>
                <td>`+datac.categoria+`</td>
                <td><input type="button" id="eliminar" value="Eliminar"  onclick="eliminarComputador(${datac.id})"></td>
                <td><input type="button" id="actualizar" value="Actualizar"  onclick="actualizarComputador(${datac.id})"></td>`;
                $("#tr_computador_"+datac.id).html(tr);
            });

        });
    });

    $("#cancelar-actualizar-computador").on("click", function(e){
        $("#actualizar-computador").hide();
        $("#cancelar-actualizar-computador").hide();
        $("#guardar-computador").show();
        
        $("#id").val("");
        $("#referencia").val("");
        $("#marca").val("");
        $("#dduro").val("");
        $("#mram").val("");
        $("#procesador").val("");
        $("#pantalla").val("");
        $("#precio").val("");
        $("#categoria").val("");
    });

    $("#buscar-categoria").click(function(){
        let categoria = document.getElementById("buscar-cat").value;

        let url="http://127.0.0.1:8080/computador/query?categoria=";

        $.get(url+categoria, function(datac){

            $("#cuerpo-tb-computadores").html("");
            for(let i=0; i<datac.length; i++){
                let tr=`<tr id="tr_computador_${datac[i].id}">
                    <td>`+datac[i].id+`</td>
                    <td>`+datac[i].referencia+`</td>
                    <td>`+datac[i].marca+`</td>
                    <td>`+datac[i].dduro+`</td>
                    <td>`+datac[i].mram+`</td>
                    <td>`+datac[i].procesador+`</td>
                    <td>`+datac[i].pantalla+`</td>
                    <td>`+datac[i].precio+`</td>
                    <td>`+datac[i].categoria+`</td>
                    <td><input type="button" id="eliminar" value="Eliminar"  onclick="eliminarComputador(${datac[i].id})"></td>
                    <td><input type="button" id="actualizar" value="Actualizar"  onclick="actualizarComputador(${datac[i].id})"></td>
                        </tr>`;
                $("#cuerpo-tb-computadores").append(tr);
                $("#buscar-cat").val("");
            }

        })
    });

    $("#buscar-id").click(function(){
        let id = document.getElementById("buscar").value;

        let url="http://127.0.0.1:8080/computador/";

        $.get(url+id, function(datac){

            $("#cuerpo-tb-computadores").html("");
                let tr=`<tr id="tr_computador_${datac.id}">
                    <td>`+datac.id+`</td>
                    <td>`+datac.referencia+`</td>
                    <td>`+datac.marca+`</td>
                    <td>`+datac.dduro+`</td>
                    <td>`+datac.mram+`</td>
                    <td>`+datac.procesador+`</td>
                    <td>`+datac.pantalla+`</td>
                    <td>`+datac.precio+`</td>
                    <td>`+datac.categoria+`</td>
                    <td><input type="button" id="eliminar" value="Eliminar"  onclick="eliminarComputador(${datac.id})"></td>
                    <td><input type="button" id="actualizar" value="Actualizar"  onclick="actualizarComputador(${datac.id})"></td>
                        </tr>`;
                $("#cuerpo-tb-computadores").append(tr);
                $("#buscar").val("");
        })
    })
})

function eliminarComputador(id){
    let url="http://127.0.0.1:8080/computador/"+id;
    fetch(url, {
        method:"DELETE",
        mode:"cors",
        cache:"no-cache"
    })
    .then(function(datac){
        console.log(datac)
        alert("Se ha eliminado el usuario con Id: "+id);
        $( "#tr_computador_"+id ).remove();
    });
}

function actualizarComputador(id){
    let url="http://127.0.0.1:8080/computador/"+id;
    fetch(url, {
        method:"GET",
        mode:"cors",
        cache:"no-cache"
    })
    .then(function(response){
        console.log(response);
        response
        .json()
        .then(function(datac){
            console.log(datac);
            $("#actualizar-computador").show();
            $("#cancelar-actualizar-computador").show();
            $("#guardar-computador").hide();

            $("#id").val(datac.id);
            $("#referencia").val(datac.referencia);
            $("#marca").val(datac.marca);
            $("#dduro").val(datac.dduro);
            $("#mram").val(datac.mram);
            $("#procesador").val(datac.procesador);
            $("#pantalla").val(datac.pantalla);
            $("#precio").val(datac.precio);
            $("#categoria").val(datac.categoria);
        });
    });
}
