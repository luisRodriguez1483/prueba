$(document).ready(function(){
    var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/loadVacanciesController.php",
       type:"POST",
       data:{flg:flag},
        success: function (msg){
            if(msg == 2){
                $('#middleTitle').text("Algunos empleos para ti");
                $('#stateMessage').html("<div class='alert alert-dismissible alert-info'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡No se han encontrado vacantes!</strong> <a href='#' class='alert-link'>Pero no te precupes seguiremos buscando la mejor opcion para ti</a></div>");
            }else{
                $('#middleTitle').text("Algunos empleos para ti");
                $('#middlePanel').html(msg);
            }
        },
        error: function (jqXHR,status,error) {
            alert(jqXHR+status+error);
        },complete: function (jqXHR,status){
            $('#postulateToVacancy').on({
                mouseenter: function(){
                    $('#postulateMsg').fadeIn(500).html("Postularme");
                },
                mouseleave: function(){
                    $('#postulateMsg').fadeOut(100).html("");
                }
            });
        }
   });

});



$(document).on('click','#postulateToVacancy',function(){
    var flag="true";
    var vacancyId=$('#txtIdVacancy').val();
    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/vacancyPostulateController.php",
        type:"POST",
        data: {flg:flag,vId:vacancyId},
        success: function(msg){
            $('#stateMessage').html("<div class='alert alert-dismissible alert-success'>"
                                       +"<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Se ha postulado</strong>"
                                       +"<a href='#' class='alert-link'>correctamente a la vacante.</a></div>");
        },
        error: function (jqXHR,status,error){
            alert(jqXHR+status+error);
        }
    });
});

   $(document).on('click','#updateResume',function(){
       $('#stateMessage').html("");
       $('#middlePanel').html("");
       $('#middleTitle').html("");
       $('#middleTitle').html("Actualiza tus Datos");
       $('#middlePanel').html("<div class='list-group'>"
                                        +"<a href='#' id='schoolingInformation' class='list-group-item active' role='button' data-toggle='modal' data-target='#modalUpdate'>Información Académica </a>"
                                        +"<a href='#' id='professionalInformation' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Información Profesional</a>"
                                          +"<a href='#' id='courses' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Cursos</a>"
                                          +"<a href='#' id='workingExperience' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Experiencia Laboral</a>"
                                          +"<a href='#' id='languages' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Idiomas</a>"
                                          +"<a href='#' id='otherInformation' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Otros Datos</a>"
                                +"</div>");
   });

$(document).on('click','#schoolingInformation',function(){
    var flag="true";
    $.ajax({
        beforeSend:function(){
            $('#spinner').attr('class','loader');
            $('#button1').show();
            $('#button2').hide();
            $('#button3').hide();
            $('#button4').hide();
            $('#button5').hide();
            $('#button6').hide();
        },
        url: "core/controller/getResumeAcademicDataController.php",
        type: "POST",
        data: {flg:flag},
        success: function(msg){
            $('#modalUpdateTitle').html("Formación Académica");
            $('#modalBodyUpdate').html(msg);
            var radBtn=$('#txtIsStudying').val();
            if(radBtn==0){
                $('#radIsStudyingN').attr('checked',true);
            }else{
                $('#radIsStudyingY').attr('checked',true);
            }
        },
        error: function(jqXHR,error,status){

        },
        complete: function(jqXHR){
            $('#spinner').attr('class','');
        }
    });
});

$(document).on('click','#saveChangesBtn',function(){
    var flag="true";
    var cv=$('#txtAcadDat').val();
    var actualGrade=$('#txtActualGrade').val();
    var school=$('#txtSchoolName').val();
    var schoolStart=$('#txtSchoolStart').val();
    var schoolFinish=$('#txtSchoolEnd').val();
    var lastGrade=$('#txtMaxGrade').val();
    var study=$('input:radio[name=radIsStudying]:checked').val();
    var flag2="false";

    $('#modalMessage').html("");
    $('#txtActualGrade').focus().css('border-color','');
    $('#txtSchoolName').css('border-color','');
    $('#txtSchoolStart').css('border-color','');
    $('#txtSchoolEnd').css('border-color','');
    $('#txtMaxGrade').css('border-color','');

    if($('#txtActualGrade').val().trim()==''){
        $('#txtActualGrade').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }else if($('#txtSchoolName').val().trim()==''){
        $('#txtSchoolName').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }else if($('#txtSchoolStart').val().trim()==''){
        $('#txtSchoolStart').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }else if($('#txtSchoolEnd').val().trim()==''){
        $('#txtSchoolEnd').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }else if($('#txtMaxGrade').val().trim()==''){
        $('#txtMaxGrade').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }else{
     $.ajax({
           beforeSend: function(){
               $('#spinner').attr('class','loader');
           },
            url:"core/controller/updateResumeAcademicDataController.php",
            type:"POST",
            data:{flg:flag,resume:cv,nowGrade:actualGrade,schoolName:school,beginSchool:schoolStart,
                  endSchool:schoolFinish,laGrade:lastGrade,nowStudy:study},

            success: function(msg){
                $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Información almacenada!</strong> <a href='#' class='alert-link'>Tus informacón académica ha sido actualizada de manera exitosa.</a></div>");
                $('#modalUpdate').attr('class','modal fade out');
            },
            error: function(jqXHR,status,error){

            },
            complete: function(jqXHR){
                $('#spinner').attr('class','');
            }
        });
    }
});

$(document).on('click','#professionalInformation',function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url:"core/controller/getResumeProfessionalDataController.php",
       type:"POST",
       data:{flg:flag},
       success: function(msg){
           $('#modalUpdateTitle').html("Información profesional");
           $('#modalBodyUpdate').html(msg);
           $('#button1').hide();
           $('#button2').show();
           $('#button3').hide();
           $('#button4').hide();
           $('#button5').hide();
           $('#button6').hide();
       },
       error: function(jqXHR,status,error){
           alert(jqXHR);
       },
       complete: function(jqXHR){
        $('#spinner').attr('class','');
       }
   });
});

$(document).on('click','#addProfessionalInformationBtn',function(){
    $('#newProfessionalInformation').toggle();
    $('#addProfessionalInformationBtn').hide();
});

$(document).on('click','#hideProfessionalInformationBtn',function(){
    $('#newProfessionalInformation').hide();
    $('#addProfessionalInformationBtn').toggle();
});

$(document).on('click','#saveChangesBtn2',function(){
    //clic al añadir nueva info profesional  despliega campos y aqui el ajax toma esos campos y hace un insert
    $('#').
   $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/getResumeProfessionalDataController.php",
       type:"POST",
       data:{},
       success: function(msg){
           alert(msg);
       },
       error: function(jqXHR,status,error){
           alert("em"+jqXHR+status.responseText+error.responseText);
       },
       complete: function(jqXHR){
           $('#spinner').attr('class','');
       }
   });

});


$(document).on('click','#courses' ,function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/getResumeCoursesController.php",
       type: "POST",
       data: {flg:flag},
       success: function(msg){
           $('#modalBodyUpdate').html(msg);
           $('#modalUpdateTitle').html("Cursos");
           $('#button1').hide();
           $('#button2').hide();
           $('#button3').show();
           $('#button4').hide();
           $('#button5').hide();
           $('#button6').hide();
       },
       error: function(jqXHR,status,error){
           alert(jqXHR.responseXML+status+error);
       },
        complete: function(jqXHR){
            $('#spinner').attr('class','');
        }
   });
});

$(document).on('click','#button3',function(){

    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/getResumeCoursesController.php",
        type:"POST",
        data:{},
        success: function(msg){
            alert(msg);
        },
        error: function(jqXHR,status,error){

        },
        complete: function(){
            $('#spinner').attr('class','');
        }
    });

});

$(document).on('click','#workingExperience',function(){
    var flag="true";
    $.ajax({
        beforeSend: function(){
            $('#spinner').attr('class','loader');
            $('#modalUpdateTitle').html("Información laboral");
       },
        url: "core/controller/getResumeWorkingExperienceController.php",
        type: "POST",
        data:{flg:flag},
        success: function(msg){
            $('#modalBodyUpdate').html(msg);
            $('#button1').hide();
            $('#button2').hide();
            $('#button3').hide();
            $('#button4').show();
            $('#button5').hide();
            $('#button6').hide();
        },
        error: function(jqXHR){

        },
        complete: function(){
            $('#spinner').attr('class','');
        }

    });
});

$(document).on('click','#languages',function(){
     var flag="true";
    $.ajax({
        beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/getResumeLanguageController.php",
        type: "POST",
        data:{flg:flag},
        success: function(msg){
            $('#modalUpdateTitle').html("Idiomas");
            $('#modalBodyUpdate').html(msg);
            $('#button1').hide();
            $('#button2').hide();
            $('#button3').hide();
            $('#button4').hide();
            $('#button5').show();
            $('#button6').hide();
        },
        error: function(jqXHR){

        },
        complete: function(){
            $('#spinner').attr('class','');
        }

    });
});

$(document).on('click','#otherInformation',function(){
    var flag="true";
    $.ajax({
        beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/getResumeOtherInformationController.php",
        type: "POST",
        data:{flg:flag},
        success: function(msg){
            $('#modalBodyUpdate').html(msg);
            $('#modalUpdateTitle').html("Otros datos de interés");
            $('#button1').hide();
            $('#button2').hide();
            $('#button3').hide();
            $('#button4').hide();
            $('#button5').hide();
            $('#button6').show();
        },
        error: function(jqXHR){

        },
        complete: function(){
            $('#spinner').attr('class','');
        }

    });
});
