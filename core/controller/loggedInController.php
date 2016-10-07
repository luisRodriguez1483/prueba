<?php
        if(isset($_POST["userName"]) && isset($_POST["pass"])){
            echo getcwd();
            require_once 'core/model/userModel.php';
            $objUser=new ModelUser();
            $objUser->userLogin($_POST["userName"],$_POST["pass"]);
    }else{
            echo 'Error sin datos';
        }
?>
