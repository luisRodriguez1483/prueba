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
        url:"core/controller/contactController.php",
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
     url:"core/controller/addressController.php",
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



/*var datos =$("#formularioUsuario").serialize();
*/



