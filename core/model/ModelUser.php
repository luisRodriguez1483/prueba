<?php
include ("Connection.php");
class ModelUser extends Connection{


    public function userLogin($user,$password){
        $userName=$this->getConnection()->real_escape_string($user);
        $pass=$this->getConnection()->real_escape_string($password);

        $query="select nom_usuario from usuario where nom_usuario = '".$userName."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("ERROR ".mysqli_error($this->getConnection()));
        $row = mysqli_fetch_array($executeQuery);
        $userResult=$row["nom_usuario"];
        if($userResult == $userName){
            $query2 = "select contrasenia from usuario where contrasenia = '".$pass."' and nom_usuario = '".$userName."' ";
            $executeQuery2 = mysqli_query($this->getConnection(),$query2) or die ("ERROR ".mysqli_error($this->getConnection()));
            $row2 = mysqli_fetch_array($executeQuery2);
            $passResult = $row2["contrasenia"];
            if($pass == $passResult){
                //$query3="SELECT idUsuario FROM usuario WHERE nom_usuario= '".$userResult."' AND idUsuario in(SELECT idUsuario FROM empresa)"
                //verif. empresa o persona
                $query3="SELECT usuario.idUsuario FROM usuario INNER JOIN empresa on usuario.idUsuario=empresa.idUsuario"
                    ." WHERE usuario.nom_usuario='".$userResult."' ";
                $executeQuery3=mysqli_query($this->getConnection(),$query3) or die ("Error in query 3 ".mysqli_error($this->getConnection()));
                    if(mysqli_num_rows($executeQuery3) != 0){
                        //empresa
                     echo 1;
                    }else{
                        //persona
                        echo 11;
                    }
                $_SESSION["session_user"]=$row["nom_usuario"];
            }else{
                echo 3;
            }
        }else {
            echo 2;
        }

    }

    public function contactLog($email,$tel){
        $query = "SELECT * FROM contacto WHERE correo='".$email."'";
        $result = mysqli_query($this->getConnection(),$query) or die ("ERROR ".mysqli_error($this->getConnection()));
        if(mysqli_num_rows($result)!=0){
            echo 1;
        }else{

            $query2 = "SELECT * FROM contacto WHERE tel_cel='".$tel."'";
            $result2= mysqli_query($this->getConnection(),$query2) or die ("ERROR ".mysqli_error($this->getConnection()));

            if(mysqli_num_rows($result2)!=0){
                echo 2;
            }else{
                $insert = "INSERT INTO contacto VALUES(null,'".$email."','".$tel."')";
                mysqli_query($this->getConnection(),$insert) or die ("ERROR INSERT".mysqli_error($this->getConnection()));
                echo 3;
            }

        }

    }

    public function addressLog($estado,$col,$calle,$numInt,$numExt){
        $query = "INSERT INTO direccion VALUES(null,'".$estado."','".$col."','".$calle."','".$numInt."','".$numExt."')";
        mysqli_query($this->getConnection(),$query) or die ("ERROR ".mysqli_error($this->getConnection()));

        echo 1;

    }



    public function userLog($user,$password){
        $query = "SELECT * FROM usuario WHERE nom_usuario='".$user."'";
        $rs = mysqli_query($this->getConnection(),$query) or die ("ERROR ".mysqli_error($this->getConnection()));

        if(mysqli_num_rows($rs)!=0){
            echo 'Este usuario ya esta registrado';
        }else{
            $query2 = "SELECT MAX(idDireccion) as idDir FROM direccion";
            $rs2 = mysqli_query($this->getConnection(),$query2) or die ("ERROR ".mysqli_error($this->getConnection()));
            $row1 = mysqli_fetch_array($rs2);
            $idDir = $row1['idDir'];

            $query3 = "SELECT MAX(idContacto) as idCon FROM contacto";
            $rs3 = mysqli_query($this->getConnection(),$query3);
            $row2 = mysqli_fetch_array($rs3);

            $idContact = $row2['idCon'];


            $query4 = "INSERT INTO usuario VALUES(null,'".$user."','".$password."',".$idDir.",".$idContact.")";
            mysqli_query($this->getConnection(),$query4) or die ("ERROR ".mysqli_error($this->getConnection()));

            echo 'Registrado con exito';

        }
    }
    public function companyLog($nameCompany,$giro,$rfc){
        $query = "SELECT MAX(idUsuario) as idUsu FROM usuario";
        $rs = mysqli_query($this->getConnection(),$query) or die("ERROR ".mysqli_error($this->getConnection()));
        $row = mysqli_fetch_array($rs);

        $idUsu = $row['idUsu'];

        $queryInsert = "INSERT INTO empresa VALUES(null,".$idUsu.",'".$nameCompany."','".$giro."','".$rfc."')";
        mysqli_query($this->getConnection(),$queryInsert) or die ("ERROR ".mysqli_error($this->getConnection()));




    }

    public function personLog(){

    }


}
?>
