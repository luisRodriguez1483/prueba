<?php
include "Connection.php";

class Vacancy extends Connection{

    public function addVacancy($dato1,$dato2,$dato3,$dato4,$dato5,$dato6,$dato7,$dato8,$dato9){
       $query="select empresa.idUsuario,usuario.idUsuario,empresa.nombre from empresa INNER JOIN usuario on empresa.idUsuario = usuario.idUsuario where usuario.idUsuario= '".$_SESSION["session_id"]."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die ("Error en verif id ".mysqli_error($this->getConnection()));
        $id=$_SESSION["session_id"];

        if(mysqli_num_rows($executeQuery)!=0){
               $row=mysqli_fetch_array($executeQuery);
                $company= $row["idUsuario"];
                    $query2="INSERT INTO vacante values (null,'".$id."','".$dato1."','".$dato2."','".$dato3."',"
                            ." '".$dato5."','".$dato4."','".$dato6."','".$dato7."','".$dato9."','".$dato8."')";
                    $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error vacancy ".mysqli_error($this->getConnection()));
            echo 1;
        }

    }
}
?>
