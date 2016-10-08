<?php

    include '../model/ModelUser.php';
    $user=$_POST["userName"];
    $password=$_POST["pass"];

    $objUser = new ModelUser();
    $objUser->userLogin($user,$password);
?>
