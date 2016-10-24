$(document).on('click', '#closeSession', function() {

    var flag = "true";
    $.ajax({
        beforeSend: function() {
            $('#loader').attr('class', 'loader');
        },
        url: "core/controller/logoutController.php",
        type: "POST",
        data: {
            action: flag
        },
        success: function(msg) {
            if (msg == 1) {
                window.location.reload();
            }
        }
    });
});

$(document).ready(function() {
    $('#loader').fadeOut();
    $('#titleMiddle').fadeOut();
    var flag = "true";
    $.ajax({
        url: "core/controller/userTypeController.php",
        type: "POST",
        data: {
            flg: flag
        },
        success: function(msg) {
            if (msg == 1) {
                $('#panelContent').html("<p id='postVacancy'class='btn btn-white'>Publicar Vacante</p>" + "<p id='reviewPost'class='btn btn-white'>Revisar Vacantes Publicadas</p>" + "<p id='companyMessage'class='btn btn-white'>Mensajes</p>" + "<p id='scheduleInterview'class='btn btn-white'>Agendar Cita Entrevista</p>" + "<p id='makeCall'class='btn btn-white'>Realizar Videollamada</p>");
                $.getScript( "core/controller/loggedInCompanyController.js", function( data, textStatus, jqxhr ) {
                    //console.log( data ); // Data returned
                    //console.log( textStatus ); // Success
                    //console.log( jqxhr.status ); // 200
                });
            } else if (msg == 2) {
                $('#panelContent').html("<p id='aplications' class='btn btn-white'>Mis Postulaciones</p>" + "<p id='curriculum' class='btn btn-white'>Actualizar Curriculum</p>" + "<p id='personMessage' class='btn btn-white'>Mensajes</p>" + "<p id='' class='btn btn-white'>Ver mis citas de entrevista</p>");
                $.getScript( "core/controller/loggedInPersonController.js", function( data, textStatus, jqxhr ) {
                    //console.log( data ); // Data returned
                    //console.log( textStatus ); // Success
                    //console.log( jqxhr.status ); // 200
                });
            }
        },
        error: function(textStatus) {
            alert("aqui " + textStatus.responseText);
        }
    });
});
