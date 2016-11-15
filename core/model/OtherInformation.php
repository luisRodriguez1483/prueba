<?php
require_once('Connection.php');

class OtherInformation extends Connection{

    public function getOtherInformation(){
      $query=" SELECT otros_datos.idCurriculum FROM otros_datos "
                ." INNER JOIN curriculum ON otros_datos.idCurriculum=curriculum.idCurriculum "
                ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
                ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error obtaining others ".mysqli_error($this->getConnection()));

        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);

            $query2=" SELECT otros_datos.idCurriculum,otros_datos.aptitud,otros_datos.cualidad,otros_datos.valor FROM otros_datos "
            ." INNER JOIN curriculum ON otros_datos.idCurriculum=curriculum.idCurriculum "
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and otros_datos.idCurriculum= '".$row[0]."' ";

            $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error obtaining other ".mysqli_error($this->getConnection()));

            if($executeQuery2){
                $row2=mysqli_fetch_array($executeQuery2);

                echo $row2[0].$row2[1].$row2[2];
            }
        }
    }

}

?>
