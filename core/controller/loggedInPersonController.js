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
                $('#stateMessage').html("<div class='alert alert-dismissible alert-info'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡No se han encontrado vacantes de acuerdo a tu perfil!</strong> <a href='#' class='alert-link'>Pero no te precupes seguiremos buscando la mejor opcion para ti</a></div>");
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
      /* $('#middlePanel').html("<div class='list-group'>"
                                        +"<a href='#' id='schoolingInformation' class='list-group-item active' role='button' data-toggle='modal' data-target='#modalUpdate'>Información Académica </a>"
                                        +"<a href='#' id='professionalInformation' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Información Profesional</a>"
                                          +"<a href='#' id='courses' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Cursos</a>"
                                          +"<a href='#' id='workingExperience' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Experiencia Laboral</a>"
                                          +"<a href='#' id='languages' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Idiomas</a>"
                                          +"<a href='#' id='otherInformation' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Otros Datos</a>"
                                +"</div>");*/

       $('#middlePanel').html("<div class='list-group'>"
                                        +"<a href='#' id='schoolingInformation' class='list-group-item active' role='button'>Información Académica </a>"
                                        +"<div id='displaySchool'></div>"
                                        +"<a href='#' id='professionalInformation' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Información Profesional</a>"
                                          +"<a href='#' id='courses' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Cursos</a>"
                                          +"<a href='#' id='workingExperience' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Experiencia Laboral</a>"
                                          +"<a href='#' id='languages' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Idiomas</a>"
                                          +"<a href='#' id='otherInformation' class='list-group-item' role='button' data-toggle='modal' data-target='#modalUpdate'>Otros Datos</a>"
                                +"</div>");


                              /*$('#middlePanel').html("<div class='dropdown'>"
  +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>Dropdown<span class='caret'></span></button>"
  +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'>"
    +"<li><a href='#' id='schoolingInformation' data-toggle='modal' data-target='#modalUpdate'>Información Académica</a></li>"
    +"<li><a href='#' id='professionalInformation' data-toggle='modal' data-target='#modalUpdate'>Información Profesional</a></li>"
    +"<li><a href='#' id='courses' data-toggle='modal' data-target='#modalUpdate'>Cursos</a></li>"
    +"<li><a href='#' id='workingExperience' data-toggle='modal' data-target='#modalUpdate'>Experiencia Laboral</a></li>"
    +"<li><a href='#' id='languages' data-toggle='modal' data-target='#modalUpdate'>Idiomas</a></li>"
    +"<li role='separator' class='divider'></li>"
    +"<li><a href='#' data-toggle='modal' data-target='#modalUpdate' id='otherInformation'>Otra información</a></li>"
  +"</ul>"
+"</div>");*/

   });
///*********ESCUELA************////
$(document).on('click','#schoolingInformation',function(){
    var flag="true";
    $.ajax({
        beforeSend:function(){
            $('#spinner').attr('class','loader');

        },
        url: "core/controller/getAcademicDataController.php",
        type: "POST",
        data: {flg:flag},
        success: function(msg){
            $('#displaySchool').html(msg);
            $('#displaySchool').append("</br><button class='btn-xs btn-black'>Nuevo<i class='fa fa-plus-square fa-fw'></i></button>");
        },
        error: function(jqXHR,error,status){

        },
        complete: function(jqXHR){
            $('#spinner').attr('class','');
        }
    });
});

$(document).on('click','#updateAcademicBtn',function(){
   var key=$('#txtResumeAcademic').val();

    alert("id "+key);
    var flag="true";
    $.ajax({
           beforeSend: function(){
               $('#spinner').attr('class','loader');
           },
            url:"core/controller/updateAcademicDataController.php",
            type:"POST",
            data:{flg:flag,key:key},

            success: function(msg){
                alert(msg);
                  /*$('#modalUpdateTitle').html("Formación Académica");
            $('#modalBodyUpdate').html(msg);
            var radBtn=$('#txtIsStudying').val();
            if(radBtn=='No'){
                $('#radIsStudyingN').attr('checked',true);
            }else{
                $('#radIsStudyingY').attr('checked',true);
            }*/
            },
            error: function(jqXHR,status,error){

            },
            complete: function(jqXHR){
                $('#spinner').attr('class','');
            }
        });
});

$(document).on('click','#saveChangesBtn',function(){
   /* var cv=$('#txtAcadDat').val();
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
            url:"core/controller/updateAcademicDataController.php",
            type:"POST",
            data:{resume:cv,nowGrade:actualGrade,schoolName:school,beginSchool:schoolStart,
                  endSchool:schoolFinish,laGrade:lastGrade,nowStudy:study},

            success: function(msg){
                $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Información almacenada!</strong> <a href='#' class='alert-link'>Tus informacón académica ha sido actualizada de manera exitosa.</a></div>");
                $('#modalUpdate').attr('class','modal fade out');
                $('#close').trigger('click');
            },
            error: function(jqXHR,status,error){

            },
            complete: function(jqXHR){
                $('#spinner').attr('class','');
            }
        });
    }
});*/

/////////***********info profesional********////////
$(document).on('click','#professionalInformation',function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url:"core/controller/updateResumeProfessionalDataController.php",
       type:"POST",
       data:{flg:flag},
       success: function(msg){
           $('#modalUpdateTitle').html("Información profesional");
           $('#modalBodyUpdate').html(msg);
           $('#academicGroupBtn').hide();
           $('#profInfGroupBtn').show();
           $('#cancelProfInfBtn').hide();
           $('#coursesGroupBtn').hide();
           $('#labExpGroupBtn').hide();
           $('#langGroupBtn').hide();
           $('#otherDataGroupBtn').hide();
           $('#stateMessage').html("");
       },
       error: function(jqXHR,status,error){
           alert(jqXHR);
       },
       complete: function(jqXHR){
        $('#spinner').attr('class','');
       }
   });
});

$(document).on('click','#addProfInfBtn',function(){
    $('#newProfessionalInformation').toggle();
    $('#addProfInfBtn').hide();
    $('#cancelProfInfBtn').show();
});

$(document).on('click','#cancelProfInfBtn',function(){
    $('#newProfessionalInformation').hide();
    $('#addProfInfBtn').show();
    $(this).hide();
});

$(document).on('click','#saveChangesBtn2',function(){
   $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/updateResumeProfessionalDataController.php",
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

/////******CURSOS**********/////////
$(document).on('click','#courses' ,function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/updateResumeCoursesController.php",
       type: "POST",
       data: {flg:flag},
       success: function(msg){
           $('#modalBodyUpdate').html(msg);
           $('#modalUpdateTitle').html("Cursos");
           $('#academicGroupBtn').hide();
           $('#profInfGroupBtn').hide();
           $('#coursesGroupBtn').show();
           $('#labExpGroupBtn').hide();
           $('#langGroupBtn').hide();
           $('#otherDataGroupBtn').hide();
           $('#stateMessage').html("");
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
        url: "core/controller/updateResumeCoursesController.php",
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
/////********EXPERIENCIA LABORAL*******//////
$(document).on('click','#workingExperience',function(){
    var flag="true";
    $.ajax({
        beforeSend: function(){
            $('#spinner').attr('class','loader');
            $('#modalUpdateTitle').html("Información laboral");
       },
        url: "core/controller/updateResumeWorkingExperienceController.php",
        type: "POST",
        data:{flg:flag},
        success: function(msg){
            $('#modalBodyUpdate').html(msg);
            $('#academicGroupBtn').hide();
            $('#profInfGroupBtn').hide();
            $('#coursesGroupBtn').hide();
            $('#labExpGroupBtn').show();
            $('#langGroupBtn').hide();
            $('#otherDataGroupBtn').hide();
            $('#stateMessage').html("");
        },
        error: function(jqXHR){

        },
        complete: function(){
            $('#spinner').attr('class','');
        }

    });
});
/////*****IDIOMAS*****//////
$(document).on('click','#languages',function(){
     var flag="true";
    $.ajax({
        beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/updateResumeLanguageController.php",
        type: "POST",
        data:{flg:flag},
        success: function(msg){
            $('#modalUpdateTitle').html("Idiomas");
            $('#modalBodyUpdate').html(msg);
            $('#academicGroupBtn').hide();
            $('#profInfGroupBtn').hide();
            $('#coursesGroupBtn').hide();
            $('#labExpGroupBtn').hide();
            $('#langGroupBtn').show();
            $('#otherDataGroupBtn').hide();
            $('#stateMessage').html("");
        },
        error: function(jqXHR){

        },
        complete: function(){
            $('#spinner').attr('class','');
        }

    });
});
////******OTRA INFORMACION****////
$(document).on('click','#otherInformation',function(){
    var flag="true";
    $.ajax({
        beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/updateResumeOtherInformationController.php",
        type: "POST",
        data:{flg:flag},
        success: function(msg){
            $('#modalBodyUpdate').html(msg);
            $('#modalUpdateTitle').html("Otros datos de interés");
            $('#academicGroupBtn').hide();
            $('#profInfGroupBtn').hide();
            $('#coursesGroupBtn').hide();
            $('#labExpGroupBtn').hide();
            $('#langGroupBtn').hide();
            $('#otherDataGroupBtn').show();
            $('#stateMessage').html("");
        },
        error: function(jqXHR){

        },
        complete: function(){
            $('#spinner').attr('class','');
        }

    });
});
