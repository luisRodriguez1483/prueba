function enterLogin(e){

    if(e.keyCode==13){
        login();
    }

}

function login(){
    var user=$('#txtUserLogin').val();
    var password=$('#txtPasswordLogin').val();
    if(user.length === 0){
        $('#txtUserLogin').focus();
        alert("vacio 1");
    }if(password.length === 0){
        $('#txtPasswordLogin').focus();
        alert("vacio 2");
    }if(password.length != 0 && user.length != 0){

        $.ajax({
            url: "core/controller/loggedInController.php",
            type:"POST",
            data:{
                userName:user,
                pass:password
            },
            success: function(msg){
                if(msg == 1){
                    window.location="?view=login";
                }else if(msg == 2){
                    $('#loginError').html("<label class='label label-danger'>¡Usuario incorrecto!</label>");
                }else if(msg == 3){
                    $('#txtPasswordLogin').focus(function(){
                        $('#txtPasswordLogin').css('border-bottom-color','#ed0c0c');
                    });
                    $('#loginError').html("<div class='alert alert-dismissible alert-danger'><strong>!Contraseña incorrecta!</strong> <a href='#' class='alert-link'></a> Intenta de nuevo.</div>");
                }

            },error: function(jqXHR,textstatus,errorThrown){
               // console.error(xhr.status +": "+ xhr.statusText);
                alert("Error: "+jqXHR.resoponseText +" "+textstatus.resoponseText+ " " +errorThrown.resoponseText);
            }

        });

    }
}
