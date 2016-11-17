<?php
require_once('../model/AcademicData.php');

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    $objResume=new AcademicData();
    $objResume->getAcademicData();

}

?>
