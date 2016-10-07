<?php
    if($_POST){
        if(isset($_POST["userName"]) && isset($_POST["pass"])){
            require_once 'core/model/userModel.php';
            $objUser=new ModelUser();
            $objUser->userLogin($_POST["userName"],$_POST["pass"]);
    }else{
            echo 'Error sin datos';
        }
    }
?>
