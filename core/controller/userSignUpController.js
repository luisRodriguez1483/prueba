$(document).ready(function(){


   // $("#secondLog").children().attr("disabled","disabled");
    //$("#lastLog").children().attr("disabled","disabled");
});

$(document).on('click','#fistLog',function(){

    var email = $('#txtMail').val();
    var repEmail = $('#txtRepMail').val();
    var tel = $('#txtNumTel').val();
    //alert(email+" "+repEmail+" "+tel);

    if(email.length == 0){
         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtMail').focus();
        $('#txtMail').css('border-color','#ed0c0c')

    }else if(repEmail.length == 0){
         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtRepMail').focus();
        $('#txtRepMail').css('border-color','#ed0c0c')
    }else if(tel.length == 0){

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

    }else if(tel.length <=6 || tel.length >=11){

        $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Numero telefonico incorrecto!</strong> <a href='#' class='alert-link'>Por favor, verifique que sea correcto.</a></div>");

         $('#txtNumTel').focus();
        $('#txtNumTel').css('border-color','#ed0c0c');

    }else{
/*
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
                alert("Registrado");
                //$("#secondLog").children().removeAttr('disabled');
            }
        }
    });*/
    }
});

$(document).on('click','#secondLogBtn',function(){

    var estado = $('#txtState').val();
    var colonia = $('#txtColonia').val();
    var calle = $('#txtCalle').val();
    var numInte = $('#txtNumInt').val();
    var numExt = $('#txtNumExt').val();

    alert(estado+" "+colonia+" "+calle+" "+numInte+" "+numExt);

    /*Pendiente poner datos que faltan*/
    $.ajax({
     url:"core/controller/addressSignUpController.php",
        type:"POST",
        data:{estado:estado,
              colonia:colonia,
              calle:calle,
              numInte:numInte,
              numExt:numExt},

        success:function(data){
                if(data == 1){
                    alert("Registrado");
                }
        }
    });

    });

$(document).on('click','#lastLogBtn',function(){
    var user = $('#txtUserReg').val();
    var password = $('#txtPassword').val();
    var repPassword = $('#txtRepPassword').val();
    var type = $('#type').val();

    //alert(user+" "+password+" "+repPassword+" "+type);

    $.ajax({
        url:"core/controller/userSignUpController.php",
        type:'POST',
        data:{
            user:user,
            password:password
        },
        success:function(data){
           // alert(data);
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



