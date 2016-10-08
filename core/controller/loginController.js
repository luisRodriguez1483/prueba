function enterLogin(e){

    if(e.keyCode==13){
        login();
    }

}

function login(){
    var user=$('#txtUserLogin').val();
    var password=$('#txtPasswordLogin').val();
    if(user.length === 0){
        $('#loginError').html("<div class='alert alert-dismissible alert-warning'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Hay algo vacío!</strong> <a href='#' class='alert-link'>Ingresa tu usuario.</a></div>");
        $('#txtUserLogin').css('border-color','#ed620c');
        $('#txtUserLogin').focus();
        alert("vacio 1");
    }if(password.length === 0){
        $('#loginError').html("<div class='alert alert-dismissible alert-warning'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Hay algo vacío!</strong> <a href='#' class='alert-link'>Ingresa tu contraseña.</a></div>");
        $('#txtUserLogin').css('border-color','#ed620c');
        $('#txtPasswordLogin').focus();
        alert("vacio 2");
    }if(password.length != 0 && user.length != 0){

        $.ajax({
            url: "core/controller/loginController.php",
            type:"POST",
            data:{
                userName:user,
                pass:password
            },
            success: function(msg){
                if(msg == 1){
                    window.location="?view=login";
                }else if(msg == 2){
                    $('#loginError').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Usuario incorrecto!</strong> <a href='#' class='alert-link'>Intenta de nuevo.</a></div>");
                    $('#txtUserLogin').focus();
                    $('#txtUserLogin').val("");
                    $('#txtUserLogin').css('border-color','#ed0c0c');
                    if(user.length!=0){
                        $('#loginError').fadeOut();
                    }
                }else if(msg == 3){
                    $('#loginError').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Contraseña incorrecta!</strong> <a href='#' class='alert-link'>Intenta de nuevo.</a></div>");
                    $('#txtPasswordLogin').focus();
                    $('#txtPasswordLogin').val("");
                    $('#txtPasswordLogin').css('border-color','#ed0c0c');
                }

            },error: function(jqXHR,textstatus,errorThrown){
               // console.error(xhr.status +": "+ xhr.statusText);
                alert("Error: "+jqXHR.resoponseText +" "+textstatus.resoponseText+ " " +errorThrown.resoponseText);
            }

        });

    }
}
