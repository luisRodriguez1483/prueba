<?php
include ("Connection.php");
class Company extends Connection{

    public function companySignUp($nameCompany,$giro,$rfc){
        $query = "SELECT MAX(idUsuario) as idUsu FROM usuario";
        $rs = mysqli_query($this->getConnection(),$query) or die("ERROR ".mysqli_error($this->getConnection()));
        $row = mysqli_fetch_array($rs);

        $idUsu = $row['idUsu'];

        $queryInsert = "INSERT INTO empresa VALUES(null,".$idUsu.",'".$nameCompany."','".$giro."','".$rfc."')";
        mysqli_query($this->getConnection(),$queryInsert) or die ("ERROR ".mysqli_error($this->getConnection()));




    }

?>
