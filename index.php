
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="assets/web/assets/jquery/jquery.min.js">
    $(document).on('click','#btnLogIn',function(){
      alert();
    });
    </script>
  </head>
  <body>
    <?php
    require('core/core.php');
    if(isset($_GET['view'])){
        if(file_exists('core/controller/'.strtolower($_GET['view']).'Controller.php')){
            include('core/controller/'.strtolower($_GET['view']).'Controller.php');
        }else{
            include('core/controller/errorController.php');
        }
    }else{
        include ('core/controller/indexController.php');
    }
    ?>

  </body>
</html>
