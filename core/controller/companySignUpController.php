<?php
include('../model/ModelUser.php');
$nombreEmpresa = $_POST['nombreEmpresa'];
$giro = $_POST['giroEmpresa'];
$rfc = $_POST['rfcEmpresa'];

$objE = new ModelUser();
$objE->companySignUp($nombreEmpresa,$giro,$rfc);

?>
