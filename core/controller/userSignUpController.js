$(document).ready(function(){
    //$("#secondLog").children().attr("disabled","disabled");
    //$("#lastLog").children().attr("disabled","disabled");
    $('#txtNumTel').numeric();

});

$(document).on('click','#fistLog',function(){

    var email = $('#txtMail').val();
    var repEmail = $('#txtRepMail').val();
    var tel = $('#txtNumTel').val();
    //alert(email+" "+repEmail+" "+tel);

    if(email.length == 0 || $('#txtMail').val().trim() == ''){
         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtMail').focus();
        $('#txtMail').css('border-color','#ed0c0c');

    }else if(repEmail.length == 0 || $('#txtRepMail').val().trim() == ''){
         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtRepMail').focus();
        $('#txtRepMail').css('border-color','#ed0c0c');
    }else if(tel.length == 0 || $('#txtNumTel').val().trim() == ''){

         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtNumTel').focus();
        $('#txtNumTel').css('border-color','#ed0c0c');

    }else if(email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1){

        $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correo incorrecto!</strong> <a href='#' class='alert-link'>Por favor, ingrese su correo nuevamente.</a></div>");
            $('#txtMail').focus();
        $('#txtMail').css('border-color','#ed0c0c');

    }else if(repEmail.indexOf('@', 0) == -1 || repEmail.indexOf('.', 0) == -1){

         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correo incorrecto!</strong> <a href='#' class='alert-link'>Por favor, ingrese su correo nuevamente.</a></div>");
            $('#txtRepMail').focus();
        $('#txtRepMail').css('border-color','#ed0c0c');

    }else if(email!=repEmail || repEmail!=email){

        $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Los correos no son iguales!</strong> <a href='#' class='alert-link'>Por favor, verifique que sus correos coincidan.</a></div>");

                $('#txtMail').focus();
                $('#txtRepMail').focus();

                $('#txtMail').css('border-color','#ed0c0c');
                 $('#txtRepMail').css('border-color','#ed0c0c');

    }else{
    $.ajax({
        url:"core/controller/contactSignUpController.php",
        type:'POST',
        data:{correo:email,tel:tel},
        success:function(data){
            if(data == 1){
                $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correo Existente!</strong> <a href='#' class='alert-link'>Por favor, ingresa otro correo.</a></div>");
                $('#txtMail').val("");
                $('#txtRepMail').val("");

                $('#txtMail').focus();
                $('#txtRepMail').focus();

                $('#txtMail').css('border-color','#ed0c0c');
                 $('#txtRepMail').css('border-color','#ed0c0c');

            }else if(data == 2){
                $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Numero Telefonico Existente!</strong> <a href='#' class='alert-link'>Por favor, ingresa otro numero.</a></div>");
                $('#txtNumTel').val("");
                $('#txtNumTel').focus();
                $('#txtNumTel').css('border-color','#ed0c0c');

            }else if(data == 3){
                $("#secondLog").children().removeAttr('disabled');
                $('#txtMail').val("");
                $('#txtRepMail').val("");
                $('#txtNumTel').val("");
                $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correcto!</strong> <a href='#' class='alert-link'>Tus datos han sido enviados correctamente</a></div>");
                $("#divPrimeraParte").children().attr("disabled","disabled");
            }
        }
    });
    }
});


/*Controla la segunda parte de el registro de usuarios direccion*/
$(document).on('click','#secondLogBtn',function(){

    var estado = $('#txtState').val();
    var municipio = $('#txtMunicipio').val();
    var colonia = $('#txtColonia').val();
    var calle = $('#txtCalle').val();
    var numInte = $('#txtNumInt').val();
    var numExt = $('#txtNumExt').val();

    if(estado.length == 0 || $('#txtState').val().trim == ''){

        $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtState').focus();
        $('#txtState').css('border-color','#ed0c0c');

    }else if(municipio.length == 0 || $('#txtMunicipio').val().trim() == ''){

        $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtMunicipio').focus();
        $('#txtMunicipio').css('border-color','#ed0c0c');

    }else if(colonia.length == 0 || $('#txtColonia').val().trim() == ''){

        $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtColonia').focus();
        $('#txtColonia').css('border-color','#ed0c0c');

    }else if(calle.length == 0 || $('#txtCalle').val().trim() == ''){

         $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtCalle').focus();
        $('#txtCalle').css('border-color','#ed0c0c');

    }else if(numInte.length == 0 || $('#txtNumInt').val().trim() == ''){

         $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtNumInt').focus();
        $('#txtNumInt').css('border-color','#ed0c0c');

    }else if(numExt.length == 0 || $('#txtNumExt').val().trim() == ''){

        $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtNumExt').focus();
        $('#txtNumExt').css('border-color','#ed0c0c');

    }else{
    $.ajax({
     url:"core/controller/addressSignUpController.php",
        type:"POST",
        data:{estado:estado,
              municipio:municipio,
              colonia:colonia,
              calle:calle,
              numInte:numInte,
              numExt:numExt},

        success:function(data){
                if(data == 1){
    $('#txtState').val("");
    $('#txtMunicipio').val("");
    $('#txtColonia').val("");
    $('#txtCalle').val("");
    $('#txtNumInt').val("");
    $('#txtNumExt').val("");
                     $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correcto!</strong> <a href='#' class='alert-link'>Tus datos han sido enviados correctamente</a></div>");
                $("#secondLog").children().attr("disabled","disabled");

                }
        }
    });
    }
    });



$(document).on('click','#lastLogBtn',function(){
    var user = $('#txtUserReg').val();
    var password = $('#txtPassword').val();
    var repPassword = $('#txtRepPassword').val();
    var type = $('#type').val();
    $.ajax({
        url:"core/controller/userSignUpController.php",
        type:'POST',
        data:{
            user:user,
            password:password
        },
        success:function(data){

        }


    });
    /*Para poder serializar los datos de un formulario es necesario poner en los inputs el name*/
    if(type == 1){
        var datosEmpresa = $('#formCompany').serialize();
        /*var nombreEmpresa = $('#txtNomCompany').val();
        var giro = $('#txtGiro').val();
        var rfc = $().val;*/

       $.ajax({
           url:'core/controller/companySignUpController.php',
           type:'POST',
           data:{
               datosEmpresa:datosEmpresa
           },
              success:function(data){
           alert(data);
       }

       });


    }if(type == 2){

        var datosPersona = $('#formPerson').serialize();
        alert(datosPersona);
    }


});

/*var datos =$("#formularioUsuario").serialize();
*/



