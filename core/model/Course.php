<?php
require_once('Connection.php');

class Course extends Connection{

    public function getCourses(){
        $query="SELECT curso.idCurriculum FROM curso"
        ." INNER JOIN curriculum ON curso.idCurriculum=curriculum.idCurriculum"
        ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
        ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error obtaining data courses ".mysqli_error($this->getConnection()));
        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);
            $query2="SELECT curso.idCurriculum,curso.nombre,curso.area,curso.fec_ini,curso.fec_fin,curso.constancia FROM curso"
            ." INNER JOIN curriculum ON curso.idCurriculum=curriculum.idCurriculum"
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and curso.idCurriculum= '".$row[0]."' ";

            $executeQuery2=mysqli_query($this->getConnection(),$query2) or die ("Error obtaining data ".mysqli_error($this->getConnection()));
            if($executeQuery2){
                $row2=mysqli_fetch_array($executeQuery2);
                echo "<div class='form-group'>
                        <input type='hidden' class='form-control' id='txtCourse' value='$row2[0]' name='txtAcadData' readonly>
                    </div>
                    <div class='form-group'>
                        <label for='txtCourseName' class='control-label'>Nombre del Curso: </label>
                        <input type='text' class='form-control' id='txtCourseName' value='$row2[1]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtCourseArea' class='control-label'>Área: </label>
                        <input type='text' class='form-control' id='txtCourseArea' value='$row2[2]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtCourseStart' class='control-label'>Fecha en que tomó el curso: </label>
                        <input type='text' class='form-control' id='txtCourseStart' value='$row2[3]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtCourseEnd' class='control-label'>Fecha de término de su curso: </label>
                        <input type='text' class='form-control' id='txtCourseEnd' value='$row2[4]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtDocument' class='control-label'>Constancia: </label>
                        <input type='text' class='form-control' id='txtDocument' value='$row2[5]'>
                    </div>";
            }
        }

    }

    public function addCourse(){
        /*$query="INSERT INTO";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die ("Error adding course ".mysqli_error($this->getConnection()));
        if($executeQuery){

        }*/
    }

}

?>
