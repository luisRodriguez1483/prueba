<?php

include ('../model/ModelUser.php');
    $correo = $_POST['correo'];
    $tel = $_POST['tel'];

    $objContact = new ModelUser();
    $objContact->contactLog($correo,$tel);





?>
