<?php
include ('../model/Address.php');

$estado = $_POST['estado'];
$colonia = $_POST['colonia'];
$calle = $_POST['calle'];
$numeroInt = $_POST['numInte'];
$numeroExt = $_POST['numExt'];

$objD = new Address();
$objD->addressSignUp($estado,$colonia,$calle,$numeroInt,$numeroExt);


?>
