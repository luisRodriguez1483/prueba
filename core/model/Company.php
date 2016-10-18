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


    public function typePersonRFC($typePerson){
        /*Persona fisica*/
        if($typePerson == 1){
            echo '<input type="text" maxlength="13" class="form-control" placeholder="RFC" id="txtRFC" style="text-transform:uppercase;" onkeyup="javascript:this.value=this.value.toUpperCase();">';
                /*Persona Moral*/
        }else if($typePerson == 2){
           echo '<input type="text" maxlength="12" class="form-control" placeholder="RFC" id="txtRFC" style="text-transform:uppercase;" onkeyup="javascript:this.value=this.value.toUpperCase();">';
        }


    }
}
?>

