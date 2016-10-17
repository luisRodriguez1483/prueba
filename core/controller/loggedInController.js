$(document).on('click', '#closeSession', function() {
    //alert("ok 2");
    var flag = "true";
    $.ajax({
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
    var flag = "true";
    $.ajax({
        url: "core/controller/userTypeController.php",
        type: "POST",
        data: {
            flg: flag
        },
        success: function(msg) {
            if (msg == 1) {
                $('#panelContent').html("<p id='postVacancy'class='btn btn-white'>Publicar Vacante</p>" + "<p id='reviewPost'class='btn btn-white'>Revisar Publicaciones</p>" + "<p id='companyMessage'class='btn btn-white'>Mensajes</p>" + "<p id='scheduleInterview'class='btn btn-white'>Agendar Cita Entrevista</p>" + "<p id='makeCall'class='btn btn-white'>Realizar Videollamada</p>");
            } else if (msg == 2) {
                $('#panelContent').html("<p id='aplications' class='btn btn-white'>Mis Postulaciones</p>" + "<p id='curriculum' class='btn btn-white'>Actualizar Curriculum</p>" + "<p id='personMessage' class='btn btn-white'>Mensajes</p>" + "<p id='' class='btn btn-white'>Ver mis citas de entrevista</p>");
            }
        },
        error: function(textStatus) {
            alert("aqui " + textStatus.responseText);
        }
    });
});

$(document).on('click', '#postVacancy', function() {
    $('#panelMiddle').fadeIn();
    $('#panelMiddle').html("<div class='form-group'>" + "<label for='txtTitle'>Título</label>" + "<input type='text' placeholder='Título' id='txtTitle'>" + "</div>" + "<div class='form-group'>" + "<label for='txtVacancies'>No. Vacantes</label>" + "<input type='number' placeholder='No. vacantes' id='txtVacancies'>" + " </div>" + "<div class='form-group'>" + "<label for='cmbWage'>Salario</label>" + "<select name='cmbWage' id='cmbWage'>" + "<option value='0'>Seleccione Salario</option>" + "<option value='1'>$1,000.00-$5,000.00</option>" + "<option value='2'>$5,001.00-$9,000.00</option>" + "<option value='3'>$9,001.00-$13,000.00</option>" + "<option value='4'>más de $13,000.00</option>" + "</select>" + "</div>" + "<div class='form-group'>" + "<label for='txtRole'>Funciones</label>" + "<input type='text' placeholder='Funciones' id='txtRole'>" + "</div>" + "<div class='form-group'>" + "<label for='txtRequirements'>Requisitos</label>" + "<input type='text' placeholder='Requisitos' id='txtRequirements'>" + "</div>" + "<div class='form-group'>" + "<label for='txtAcoments'>Comentarios</label>" + "<textArea cols='55' rows='3' placeholder='Prestaciones/Beneficios' id='txtAcoments'></textArea>" + "</div>" + "<div class='form-group'>" + "<label for=''>Fecha expiración</label>" + "<input type='calendar' placeholder='Termina el día' id='txtExpirationDate'>" + "</div>" + "<input type='submit' value='enviar' class='btn btn-black' id='savePost'>");
});

$(document).on('click', '#savePost', function() {
    alert("ok save");
});

$(document).on('click', '#reviewPost', function() {
    alert("ok reviews");
});
