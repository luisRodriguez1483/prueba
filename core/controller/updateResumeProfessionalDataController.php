<?php
if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once('../model/ProfessionalData.php');
    $objProfessionalData = new ProfessionalData();
    $objProfessionalData -> getProfessionalData();
}else{
    echo 1;
}
?>
