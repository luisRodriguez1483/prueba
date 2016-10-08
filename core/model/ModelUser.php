<?php
include ("Connection.php");
class ModelUser extends Connection{

    public function userLogin($user,$password){
        $query="select nom_usuario from usuario where nom_usuario = '".$user."' ";
        $result=mysqli_query($this->getConnection(),$query) or die("ERROR ".mysqli_error($this->getConnection()));
        $row = mysqli_fetch_array($result);
        $userResult=$row["nom_usuario"];
        if($userResult == $user){
            $query2 = "select contrasenia from usuario where contrasenia = '".$password."' and nom_usuario = '".$user."' ";
            $result2 = mysqli_query($this->getConnection(),$query2) or die ("ERROR ".mysqli_error($this->getConnection()));
            $row2 = mysqli_fetch_array($result2);
            $passResult = $row2["contrasenia"];
            if($password == $passResult){
                echo 1;
            }else{
                echo 3;
            }
        }else {
            echo 2;
        }

    }
}
?>
