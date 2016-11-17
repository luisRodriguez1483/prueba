<?php
require_once('../model/Course.php');

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    $objResume = new Course();
    $objResume -> getCourses();
}else{
    $objResume = new Course();
    $objResume -> addCourse();
}

?>
