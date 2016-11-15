<?php
require_once('Connection.php');

class Language extends Connection{

    public function getLanguage(){
        $query=" SELECT idioma.idCurriculum FROM idioma "
                ." INNER JOIN curriculum ON idioma.idCurriculum=curriculum.idCurriculum "
                ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
                ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error obtaining languages ".mysqli_error($this->getConnection()));

        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);

            $query2=" SELECT idioma.idCurriculum,idioma.nombre,idioma.nivel,idioma.certificado FROM idioma "
            ." INNER JOIN curriculum ON idioma.idCurriculum=curriculum.idCurriculum "
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and idioma.idCurriculum= '".$row[0]."' ";

            $executeQuery2=mysqli_query($this->getConnection(),$query2) or
                die("Error obtaining language data ".mysqli_error($this->getConnection()));

            if($executeQuery2){
                $row2=mysqli_fetch_array($executeQuery2);

                echo $row2[0].$row2[1].$row2[2];
            }
        }
    }

}

?>
