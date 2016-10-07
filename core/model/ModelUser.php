<?php
include ("Connection.php");
class ModelUser extends Connection{

    public function userLogin(){
        $query="Select count(*) as usuarios from usuario";
        $result=mysqli_query($this->getConnection(),$query) or die("ERROR ".mysqli_error($this->getConnection()));

        $rows = mysqli_fetch_array($result);
        $resultado = "Numero de usuarios ".$rows['usuarios'];
        echo $resultado;
    }
}
?>
