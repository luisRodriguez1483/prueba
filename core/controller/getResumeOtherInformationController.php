<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once('../model/OtherInformation.php');

    $objOtherInformation = new OtherInformation();
    $objOtherInformation->getOtherInformation();
}

?>
