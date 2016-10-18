<?php
require_once 'Connection.php';

class Vacancy extends Connection{

    public function addVacancy($vacancyName,$vacancyPost,$typeWorking,$numberVacancies,$experience,$workingPlace,$wage,$comments,$expirationDate){
        $query="select empresa.idUsuario,usuario.idUsuario,empresa.nombre from empresa INNER JOIN usuario on empresa.idUsuario = usuario.idUsuario where usuario.idUsuario= '".$_SESSION["session_id"]."' ";

        $executeQuery=mysqli_query($this->getConnection,$query) or die ("Error en verif id ".mysqli_error($this->getConnection()));
        /*$id=$_SESSION["session_id"];

        */
        if(mysqli_num_rows($executeQuery)!=0){
               $row=mysqli_fetch_array($executeQuery);
                $company= $row["idUsuario"];
                    $query2="INSERT INTO convocatoria values (null,'".$company."','".$vacancyName."','".$vacancyPost."','".$typeWorking."',"
                            ." '".$experience."','".$numberVacancies."','".$workingPlace."','".$wage."','".$expirationDate."','".$comments."')";
                    $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error vacancy ".mysqli_error($this->getConnection()));
            echo 1;
        }
        //echo "Registro exitoso";

    }
}
?>
