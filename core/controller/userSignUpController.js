$(document).ready(function(){


   // $("#secondLog").children().attr("disabled","disabled");
    //$("#lastLog").children().attr("disabled","disabled");
});

$(document).on('click','#fistLog',function(){

    var email = $('#txtMail').val();
    var repEmail = $('#txtRepMail').val();
    var tel = $('#txtNumTel').val();
    //alert(email+" "+repEmail+" "+tel);

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
            }else if(data == 3){
                alert("Registrado");
                //$("#secondLog").children().removeAttr('disabled');
            }
        }
    });
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



