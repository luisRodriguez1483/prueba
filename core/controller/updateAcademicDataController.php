<?php


require_once('../model/AcademicData.php');

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    $id_academic=$_POST["key"];
    $objResume=new AcademicData();
    $objResume->getIdAcademicData($id_academic);

}else{
    $resume=$_POST["resume"];
    $nowGrade=$_POST["nowGrade"];
    $schoolName=$_POST["schoolName"];
    $beginSchool=$_POST["beginSchool"];
    $endSchool=$_POST["endSchool"];
    $laGrade=$_POST["laGrade"];
    $nowStudy=$_POST["nowStudy"];

    $objAcademicData = new AcademicData();
    $objAcademicData -> updateAcademicData($resume,$nowGrade,$schoolName,$beginSchool,$endSchool,$laGrade,$nowStudy);
}


?>
