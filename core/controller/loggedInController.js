
$(document).on('click','#closeSession',function(){
   //alert("ok 2");
    var flag="true";
    $.ajax({
       url: "core/controller/logoutController.php",
        type: "POST",
        data:{action:flag},
        success: function(msg){
            alert(msg);
            window.location="?view=logout";
        }
    });
});
