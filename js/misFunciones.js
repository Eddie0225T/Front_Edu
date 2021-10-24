//Funciones tabla Categorías//

function traerInformacionCategorias(){
    $.ajax({
        url:"http://150.230.78.68:8080/api/Category/all", //150.230.78.68
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });    
}

function pintarRespuesta(respuesta){         

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
    
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=uft-8",
        dataType:'JSON',
        data: JSON.stringify(var2),

        url:"http://150.230.78.68:8080/api/Category/save", //150.230.78.68


        success: function(response){
                console.log(response);
                console.log("Se guardó correctamente");
                alert("Se guardó correctamente");
                window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se pudo guardar registro");
        

        }        
    });

}

// Funciones tabla Motorbikes // 

function traerInformacionMotorbikes(){
    $.ajax({
        url:"http://150.230.78.68:8080/api/Motorbike/all", //150.230.78.68
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMotorbikes(respuesta);
        }
    });    
}

function pintarRespuestaMotorbikes(respuesta){         

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionMotorbikes(){
    let var3 = {
        name:$("#Mname").val(),
        brand:$("#Mbrand").val(),
        year:$("#Myear").val(),
        description:$("#Mdescription").val()
    };
    
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=uft-8",
        dataType:'JSON',
        data: JSON.stringify(var3),

        url:"http://150.230.78.68:8080/api/Motorbike/save", //150.230.78.68


        success: function(response){
                console.log(response);
                console.log("Se guardó correctamente");
                alert("Se guardó correctamente");
                window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se pudo guardar registro");
        

        }        
    });

}

function pintarSelect(){
    $.ajax({
    url: "http://150.230.78.68:8080/api/Category/all",
    type: "GET",
    dataType:"JSON",
    contentType: "application/json; charset=uft-8",

    success: function(respuesta){
        console.log(respuesta);
        $("#Mcat").empty();
        miSelect="";
        for (i=0;i<respuesta.items.length; i++){
            miSelect += '<option value='+respuesta[i].id+ '>'+respuesta[i].name+'</option>';
        }
        $("#cat").html(miSelect);
    },
    error: function(xhr, status){
        alert('ha sucedido un problema:'+status);
    }
    });
}

// Funciones tabla Clientes // 

function traerInformacionClientes(){
    $.ajax({
        url:"http://150.230.78.68:8080/api/Client/all", //150.230.78.68
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });    
}

function pintarRespuestaClientes(respuesta){         

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val()
    };
    
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=uft-8",
        dataType:'JSON',
        data: JSON.stringify(var4),

        url:"http://150.230.78.68:8080/api/Client/save", //150.230.78.68


        success: function(response){
                console.log(response);
                console.log("Se guardó correctamente");
                alert("Se guardó correctamente");
                window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se pudo guardar registro");
        

        }        
    });

}

// Funciones tabla Mensajes // 

function traerInformacionMensajes(){
    $.ajax({
        url:"http://150.230.78.68:8080/api/Message/all", //150.230.78.68
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });    
}

function pintarRespuestaMensajes(respuesta){         

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var5 = {
        messageText:$("#MEmessageText").val()
    };
    
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=uft-8",
        dataType:'JSON',
        data: JSON.stringify(var5),

        url:"http://150.230.78.68:8080/api/Message/save", //150.230.78.68


        success: function(response){
                console.log(response);
                console.log("Se guardó correctamente");
                alert("Se guardó correctamente");
                window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se pudo guardar registro");
        

        }        
    });

}

// Funciones tabla Reservaciones // 

function traerInformacionReservaciones(){
    $.ajax({
        url:"http://150.230.78.68:8080/api/Reservation/all", //150.230.78.68
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });    
}

function pintarRespuestaReservaciones(respuesta){         

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservaciones(){
    let var6 = {
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        status:$("#status").val()
    };
    
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=uft-8",
        dataType:'JSON',
        data: JSON.stringify(var6),

        url:"http://150.230.78.68:8080/api/Reservation/save", //150.230.78.68


        success: function(response){
                console.log(response);
                console.log("Se guardó correctamente");
                alert("Se guardó correctamente");
                window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se pudo guardar registro");
        

        }        
    });

}