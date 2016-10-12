$(document).ready(function(){


    $("#secondLog").children().attr("disabled","disabled");
    $("#lastLog").children().attr("disabled","disabled");
});

$(document).on('click','#fistLog',function(){

    var email = $('#txtMail').val();
    var repEmail = $('#txtRepMail').val();
    var tel = $('#txtNumTel').val();


    alert(email+" "+repEmail+" "+tel);

    $.ajax({
        url:"core/controller/contactController.php",
        type:'POST',
        data:{correo:email,tel:tel},
        success:function(data){
            alert(data);
        }
    });

   //$("#secondLog").children().removeAttr('disabled');
});
