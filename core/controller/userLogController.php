<?php
include('../model/ModelUser.php');
$user = $_POST['user'];
$password = $_POST['password'];

$objU = new ModelUser();
$objU->userLog($user,$password);
?>
