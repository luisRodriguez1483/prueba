<?php
include ('../model/ModelUser.php');

$estado = $_POST['estado'];
$colonia = $_POST['colonia'];
$calle = $_POST['calle'];
$numeroInt = $_POST['numInte'];
$numeroExt = $_POST['numExt'];

$objD = new ModelUser();
$objD->addressLog($estado,$colonia,$calle,$numeroInt,$numeroExt);


?>
