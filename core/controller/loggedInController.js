
$(document).on('click','#closeSession',function(){
   //alert("ok 2");
    var flag="true";
    $.ajax({
       url: "core/controller/logoutController.php",
        type: "POST",
        data:{action:flag},
        success: function(msg){
            if(msg==1){
                window.location.reload();
            }
        }
    });
});

$(document).ready(function(){
    var flag="true";
    $.ajax({
       url:"core/controller/userTypeController.php",
        type:"POST",
        data:{flg:flag},
        success: function (msg){
            if(msg==1){
                $('#panelContent').html("<p class='btn btn-white'>Publicar Vacante</p>"
                                +"<p class='btn btn-white'>Revisar Publicaciones</p>"
                                +"<p class='btn btn-white'>Responder Mensaje</p>"
                                +"<p class='btn btn-white'>Agendar Cita Entrevista</p>"
                                +"<p class='btn btn-white'>Realizar Videollamada</p>");
            }else if(msg==2){
                $('#panelContent').html("<p class='btn btn-white'>Mis Postulaciones</p>"
                                +"<p class='btn btn-white'>Actualizar Curriculum</p>"
                                +"<p class='btn btn-white'>Enviar Mensaje</p>"
                                +"<p class='btn btn-white'>Agendar Cita Entrevista</p>"
                                +"<p class='btn btn-white'>Contestar Videollamada</p>");
            }
        },
        error: function (textStatus){
            alert("aqui "+textStatus.responseText);
        }
    });
});
