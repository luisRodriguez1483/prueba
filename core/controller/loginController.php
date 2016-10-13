<?php
    if(isset($_POST["userName"]) and isset($_POST["pass"])){
    include ('../model/ModelUser.php');
    $user=$_POST["userName"];
    $password=$_POST["pass"];

    $objUser = new ModelUser();
    $objUser->userLogin($user,$password);
    }else{
        session_start();
        include ('view/loggedIn.php');
    }
?>
