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
            url: "",
            type:"",
            data:{
                userName:user,
                pass:password
            },
            success: function(result,status,xhr){

            },error: function(xhr){
                console.error(xhr.status": "+xhr.statusText);
                alert(xhr.status": "+xhr.statusText);
            }

        })

    }
}
