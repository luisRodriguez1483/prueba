<?php
if(isset($_POST["vacancyName"]) and isset($_POST["vacancyPost"]) and isset($_POST["typeWorking"]) and isset($_POST["numberVacancies"]) and isset($_POST["experience"]) and isset($_POST["workingPlace"]) and isset($_POST["wage"]) and isset($_POST["comments"]) and isset($_POST["expirationDate"])){
    require_once ("../model/Vacancy.php");

    $vacancyName=$_POST["vacancyName"];
    $vacancyPost=$_POST["vacancyPost"];
    $typeWorking=$_POST["typeWorking"];
    $numberVacancies=$_POST["numberVacancies"];
    $experience=$_POST["experience"];
    $workingPlace=$_POST["workingPlace"];
    $wage=$_POST["wage"];
    $comments=$_POST["comments"];
    $expirationDate=$_POST["expirationDate"];
   /* foreach($_POST as $key => $value){
        echo "<tr>";
        echo "<td>";
        echo $key;
        echo "</td>";
        echo "<td>";
        echo $value;
        echo "</td>";
        echo "</tr>";
    }*/
    $objVacancy = new Vacancy($vacancyName,$vacancyPost,$typeWorking,$numberVacancies,$experience,$workingPlace,$wage,$comments,$expirationDate);
}
echo 2;
?>
