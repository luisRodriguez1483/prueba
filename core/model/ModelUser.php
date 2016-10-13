<?php
include ("Connection.php");
class ModelUser extends Connection{


    public function userLogin($user,$password){
        $userName=$this->getConnection()->real_escape_string($user);
        $pass=$this->getConnection()->real_escape_string($password);

        $query="select nom_usuario from usuario where nom_usuario = '".$userName."' ";
        $result=mysqli_query($this->getConnection(),$query) or die("ERROR ".mysqli_error($this->getConnection()));
        $row = mysqli_fetch_array($result);
        $userResult=$row["nom_usuario"];
        if($userResult == $userName){
            $query2 = "select contrasenia from usuario where contrasenia = '".$pass."' and nom_usuario = '".$userName."' ";
            $result2 = mysqli_query($this->getConnection(),$query2) or die ("ERROR ".mysqli_error($this->getConnection()));
            $row2 = mysqli_fetch_array($result2);
            $passResult = $row2["contrasenia"];
            if($pass == $passResult){
                echo 1;
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

    public function adressSignup($state,$colony,$street,$interiorNum,$exteriorNum){
        $dato1=mysqli_real_escape_string($state);
        $dato2=mysqli_real_escape_string($colony);
        $dato3=mysqli_real_escape_string($street);
        $dato4=mysqli_real_escape_string($interiorNum);
        $dato5=mysqli_real_escape_string($exteriorNum);
        $query="INSERT INTO direccion VALUES(null, '".$dato1."','".$dato2."','".$dato3."','".$dato4."','".$dato5."')";
        echo 1;
    }



}
?>
