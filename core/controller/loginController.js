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
            //url: "index.php?view=loggedIn",
            url: "core/controller/loggedInController.php",
            type:"POST",
            data:{
                userName:user,
                pass:password
            },
            success: function(data,status,xhr){
                alert("sucess "+data+" "+status +" "+ xhr);

            },error: function(jqXHR,textstatus,errorThrown){
               // console.error(xhr.status +": "+ xhr.statusText);
                alert("Error: "+jqXHR +" "+textstatus+ " " +errorThrown);
            }

        });

    }
}
