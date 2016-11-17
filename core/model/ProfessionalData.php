<?php

require_once('Connection.php');
class ProfessionalData extends Connection{

    public function getProfessionalData(){
        $query="SELECT datos_prof.idCurriculum FROM datos_prof "
        ." INNER JOIN curriculum ON datos_prof.idCurriculum=curriculum.idCurriculum "
        ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
        ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error obtaining data".mysqli_error($this->getConnection()));

        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);
            $query2="SELECT datos_prof.idCurriculum,datos_prof.titulo,datos_prof.cedula_prof FROM datos_prof"
            ." INNER JOIN curriculum ON datos_prof.idCurriculum=curriculum.idCurriculum"
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and datos_prof.idCurriculum = '".$row[0]."' ";

            $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error obtaining data ".mysqli_error($this->getConnection()));

            if($executeQuery2){
                $row2=mysqli_fetch_array($executeQuery2);
                echo "<div id='newProfessionalInformation' style='display:none;'>
                        <div class='form-group'>
                            <label for='txtNewDegree' class='control-label'>Titulado en: </label>
                            <input type='text' class='form-control' id='txtNewDegree' placeholder='Ing. en TIC'>
                        </div>
                        <div class='form-group'>
                            <label for='txtNewProfCed' class='control-label'>No. Cédula Profesional: </label>
                            <input type='text' class='form-control' id='txtProCed' placeholder='Si cuenta con ella especifique el motivo o si esta en trámite indíquelo'>
                        </div>
                        <hr>
                    </div>
                    <div class='form-group'>
                        <input type='hidden' class='form-control' id='txtProfData' value='$row2[0]' name='txtProfData' readonly>
                    </div>
                    <div class='form-group'>
                        <label for='txtDegree' class='control-label'>Titulado en: </label>
                        <input type='text' class='form-control' id='txtDegree' value='$row2[1]' disabled>
                    </div>
                    <div class='form-group'>
                        <label for='txtCedula' class='control-label'>No. Cédula profesional: </label>
                        <input type='text' class='form-control' id='txtCedula' value='$row2[2]' disabled>
                    </div>";
            }
        }


    }

}

?>
