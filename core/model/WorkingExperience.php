<?php
require_once('Connection.php');
class WorkingExperience extends Connection{

    public function getWorkingExperience(){
         $query="SELECT exp_laboral.idCurriculum FROM exp_laboral "
                ." INNER JOIN curriculum ON exp_laboral.idCurriculum=curriculum.idCurriculum "
                ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
                ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error obtaining working ".mysqli_error($this->getConnection()));

        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);

            $query2="SELECT exp_laboral.idCurriculum,exp_laboral.haTrabajado,exp_laboral.cargo_ultimo_puesto,"
                    ." exp_laboral.descripcion,exp_laboral.tiempo FROM exp_laboral "
                    ." INNER JOIN curriculum ON exp_laboral.idCurriculum=curriculum.idCurriculum "
                    ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
                    ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
                    ." and exp_laboral.idCurriculum= '".$row[0]."' ";

            $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error obtaining data experience ".mysqli_error($this->getConnection()));

            if($executeQuery2){
                $row2=mysqli_fetch_array($executeQuery2);

                echo $row2[0].$row2[1].$row2[2].$row2[3].$row2[4];
            }
        }
    }

}

?>
