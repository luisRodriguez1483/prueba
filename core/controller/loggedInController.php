<?php

    include '../model/ModelUser.php';
    $password=$_POST["userName"];
    $user=$_POST["pass"];

    $objUser = new ModelUser();
    $objUser->userLogin();
?>
