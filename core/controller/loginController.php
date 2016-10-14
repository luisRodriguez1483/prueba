<?php
    if(isset($_POST["userName"]) and isset($_POST["pass"])){
    include ('../model/ModelUser.php');
    $user=$_POST["userName"];
    $password=$_POST["pass"];

    $objUser = new ModelUser();
    $objUser->userLogin($user,$password);
    }else{
        session_start();
        if(!isset($_SESSION["session_user"])){
            header("Location:index.php");
        }else{
                include ('view/loggedIn.php');
        }
    }
?>
