<?php
if(isset($_SESSION["session_user"])){
session_start();
  unset($_SESSION["session_user"]);
  session_destroy();
include ('view/index/index.php');
}else{
    include ('view/index/index.php');
}
?>
