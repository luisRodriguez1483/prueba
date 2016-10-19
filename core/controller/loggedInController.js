$(document).on('click', '#closeSession', function() {
    //alert("ok 2");
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
    $('#middleTitle').text("Nueva Vacante");
    $('#panelMiddle').html("<div id='datos' class='control-form' role='form'>"
                                    +"<div class='form-group'>"
                                        +"<label for='txtName'>Nombre</label>"
                                        +"<input type='text' placeholder='Perfil para la vacante' name='txtName' id='txtName'>"
                                    +"</div>"
                                    +"<div class='form-group'>"
                                        +"<label for='txtVacancyPost'>Puesto</label>"
                                        +"<input type='text' placeholder='Cargo a desempeñar' id='txtVacancyPost' name='txtVacancyPost'>"
                                    +"</div>"
                                    +"<div class='form-group'>"
                                        +"<label for='txtTypeWorking'>Tipo de jornada</label>"
                                        +"<input type='text' placeholder='Jornada'id='txtTypeWorking' name='txtTypeWorking'>"
                                    +"</div>"
                                    +"<div class='form-group'>"
                                        +"<label for='txtVacancies'>No. Vacantes</label>"
                                        +"<input type='text' placeholder='No. vacantes' id='txtVacancies' name='txtVacancies'>"
                                    +"</div>"
                                    +"<div class='form-group'>"
                                        +"<label for='txtExperience'>Experiencia</label>"
                                        +"<input type='text'placeholder='Si(tiempo)/No' id='txtExperience' name='txtExperience'>"
                                    +"</div>"
                                    +"<div class='form-group'>"
                                        +"<label for='txtWorkingPlace'>Zona</label>"
                                        +"<input type='text' placeholder='Municipio/Estado' id='txtWorkingPlace' name='txtWorkingPlace'>"
                                    +"</div>"
                                    +"<div class='form-group'>"
                                        +"<label for='txtWage'>Salario</label>"
                                        +"<span class='input-group-addon'>$</span>"
                                        +"<input type='text' placeholder='Sueldo en pesos'id='txtWage' name='txtWage'>"
                                        +"<span class='input-group-addon'>.00</span>"
                                    +"</div>"
                                    +"<div class='form-group'>"
                                        +"<label for='txtAcoments'>Comentarios</label>"
                                        +"<textArea cols='55' rows='3' placeholder='Prestaciones/Beneficios/Horarios' id='txtAcoments' name='txtAcoments'></textArea>"
                                    +"</div>"
                                    +"<div class='form-group'>"
                                        +"<label for='txtExpirationDate'>Fecha expiración</label>"
                                        +"<input type='text' placeholder='Termina el día' id='txtExpirationDate' name='txtExpirationDate'>"
                                    +"</div>"
                                    +"<input type='submit' value='enviar' class='btn btn-black' id='savePost' name='savePost'> "
                                +"</div>");
});

$(document).on('click', '#savePost', function() {
    var vacancyName = $('#txtName').val();
    var vacancyPost = $('#txtVacancyPost').val();
    var typeWorking = $('#txtTypeWorking').val();
    var numberVacancies = $('#txtVacancies').val();
    var experience = $('#txtExperience').val();
    var workingPlace = $('#txtWorkingPlace').val();
    var wage = $('#txtWage').val();
    var comments = $('#txtAcoments').val();
    var expirationDate = $('#txtExpirationDate').val();

    var flag1 = (vacancyName === " " || vacancyName.length === 0) ? 0 : 1;
    var flag2 = (vacancyPost == " " || vacancyPost.length === 0) ? 0 : 1;
    var flag3 = (typeWorking == " " || typeWorking.length === 0) ? 0 : 1;
    var flag4 = (numberVacancies == " " || numberVacancies.length === 0) ? 0 : 1;
    var flag5 = (experience == " " || experience.length === 0) ? 0 : 1;
    var flag6 = (wage == 0) ? 0 : 1;
    var flag7 = (comments == " " || comments.length === 0) ? 0 : 1;
    var flag8 = (expirationDate == " " || expirationDate.length === 0) ? 0 : 1;
    var flag9 = (workingPlace == " " || workingPlace.length === 0) ? 0 : 1;
    var datos=$('#datos').serialize();
    if (flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1 && flag5 == 1 && flag6 == 1 && flag7 == 1 && flag8 == 1 && flag9 == 1) {
        var flag=true;
        $.ajax({
            beforeSend: function() {
                $('#loader').attr('class', 'loader');
            },
            url: "core/controller/addVacancyController.php",
            type: "POST",
            data: {
                f:flag,
                vacante: vacancyName,
                puesto: vacancyPost,
                jornada: typeWorking,
                vacantes: numberVacancies,
                experiencia: experience,
                zona: workingPlace,
                salario: wage,
                comentarios: comments,
                expira: expirationDate
            },
            success: function(msg) {
                alert(msg);
            },
            error: function(jqXHR, status, error) {
                alert("Error " + jqXHR + " " + status + " " + error);
            }
        });
    }else{
        alert("Campos vacios");
    }
});

$(document).on('click', '#reviewPost', function() {
    alert("ok reviews");
});
