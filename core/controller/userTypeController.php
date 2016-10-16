<?php
if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once '../model/ModelUser.php';
    $objUser = new ModelUser();
    $objUser->userType();
}
?>
