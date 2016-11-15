<?php

require_once ('Connection.php');
class AcademicData extends Connection{


    public function updateAcademicData($resume,$nowGrade,$schoolName,$beginSchool,$endSchool,$laGrade,$nowStudy){
        $query="UPDATE datos_acad SET estudia_actual='".$nowStudy."',grado_act='".$nowGrade."',nom_escuela='".$schoolName."',"
        ."fec_ini='".$beginSchool."',fec_fin='".$endSchool."',grado_maxim_estudios='".$laGrade."' WHERE  idCurriculum='".$resume."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die ("Error updating".mysqli_error($this->getConnection()));
        echo 1;
    }

    public function getAcademicData(){
        $query="SELECT datos_acad.idCurriculum FROM datos_acad "
        ." INNER JOIN curriculum ON datos_acad.idCurriculum=curriculum.idCurriculum "
        ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
        ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error academic data".mysqli_error($this->getConnection()));

        if($executeQuery){
        $row=mysqli_fetch_array($executeQuery);

        $query2=" SELECT datos_acad.idCurriculum,datos_acad.estudia_actual,datos_acad.grado_act,"
            ." datos_acad.nom_escuela,datos_acad.fec_ini,datos_acad.fec_fin,datos_acad.grado_maxim_estudios FROM datos_acad "
            ." INNER JOIN curriculum ON datos_acad.idCurriculum=curriculum.idCurriculum "
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and datos_acad.idCurriculum= '".$row[0]."' ";

        $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error academic information".mysqli_error($this->getConnection()));

            if($executeQuery2){
                $row2=mysqli_fetch_array($executeQuery2);
               echo "<div class='form-group'>
                        <input type='hidden' class='form-control' id='txtAcadDat' value='$row2[0]' name='txtAcadData' readonly>
                        <input type='hidden' class='form-control' id='txtIsStudying' value='$row2[1]' name='txtIsStudying' readonly>
                        <label for='radIsStudying' class='control-label'>¿Estudia actualmente?</label>
                        <label for='radIsStudying' class='radio-inline'>
                            <input type='radio' class='form-control' id='radIsStudyingY' value='1' name='radIsStudying'>Si
                        </label>
                        <label for='radIsStudying' class='radio-inline'>
                            <input type='radio' class='form-control' id='radIsStudyingN' value='0' name='radIsStudying'>No
                        </label>
                    </div>

                    <div class='form-group'>
                        <label for='txtActualGrade' class='control-label'>Grado actual que cursa: </label>
                        <input type='text' class='form-control' id='txtActualGrade' value='$row2[2]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtSchoolName' class='control-label'>Escuela: </label>
                        <input type='text' class='form-control' id='txtSchoolName' value='$row2[3]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtSchoolStart' class='control-label'>Inicio de estudios: </label>
                        <input type='text' class='form-control' id='txtSchoolStart' value='$row2[4]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtSchoolEnd' class='control-label'>Término de estudios: </label>
                        <input type='text' class='form-control' id='txtSchoolEnd' value='$row2[5]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtMaxGrade' class='control-label'>Grado máximo de estudios: </label>
                        <input type='text' class='form-control' id='txtMaxGrade' value='$row2[6]'>
                    </div>";
            }
        }

    }

}

?>
