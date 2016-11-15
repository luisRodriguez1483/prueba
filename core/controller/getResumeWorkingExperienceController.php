<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once('../model/WorkingExperience.php');

    $objWorkingExperience = new WorkingExperience();
    $objWorkingExperience -> getWorkingExperience();
}else{
    echo 2;
}

?>
