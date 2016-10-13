<!DOCTYPE html>
<html>
<?php
include ('view/overAll/header.php');


?>
<body>
<?php
include ('view/overAll/signUpTopNav.php');
?>

<section class="engine"></section><section class="mbr-cards mbr-section mbr-section-nopadding mbr-after-navbar" id="page1-features4-0" style="background-color: rgb(255, 255, 255);">



    <div class="mbr-cards-row row">
        <div class="mbr-cards-col col-xs-12 col-lg-4" style="padding-top: 80px; padding-bottom: 0px;">
            <div class="container">
                <div class="card cart-block">
                    <div class="card-img iconbox"><span class="etl-icon icon-profile-male mbr-iconfont mbr-iconfont-features4" style="color: black;"></span></div>
                    <div class="card-block">
                        <h4 class="card-title">¡Comencemos!<br><em>Datos para iniciar sesión.</em></h4>
                        <h5 class="card-subtitle"></h5>
                        <p class="card-text"></p>

                    </div>
                </div>
            </div>
        </div>
        <div class="mbr-cards-col col-xs-12 col-lg-4" style="padding-top: 80px; padding-bottom: 0px;">
            <div class="container">
                <div class="card cart-block">
                    <div class="card-img iconbox"><span class="etl-icon icon-documents mbr-iconfont mbr-iconfont-features4" style="color: black;"></span></div>
                    <div class="card-block">
                        <h4 class="card-title">Información personal</h4>
                        <h5 class="card-subtitle"></h5>
                        <p class="card-text"></p>

                    </div>
                </div>
          </div>
        </div>
        <div class="mbr-cards-col col-xs-12 col-lg-4" style="padding-top: 80px; padding-bottom: 0px;">
            <div class="container">
                <div class="card cart-block">
                    <div class="card-img iconbox"><a href="#" class="etl-icon icon-briefcase mbr-iconfont mbr-iconfont-features4" style="color: black;"></a></div>
                    <div class="card-block">
                        <h4 class="card-title">Información de contacto</h4>
                        <h5 class="card-subtitle"></h5>
                        <p class="card-text"></p>

                    </div>
                </div>
            </div>
        </div>



    </div>
</section>

<section class="mbr-section" id="page1-testimonials1-0" style="background-color: rgb(255, 255, 255); padding-top: 0px; padding-bottom: 160px;">



        <div class="mbr-section mbr-section__container mbr-section__container--middle">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 text-xs-center">
                        <h3 class="mbr-section-title display-2"></h3>
                        <small class="mbr-section-subtitle"></small>
                    </div>
                </div>
            </div>
        </div>


    <div class="mbr-testimonials mbr-section mbr-section-nopadding">
        <div class="container">
            <div class="row">

                <div class="col-xs-12 col-lg-4">

                    <div class="mbr-testimonial card ">
                        <div class="card-block">
                             <div class="">
                <div role="form">
                   <div class="form-group">
                        <div id="infoErrorContacto">

                        </div>
                        <input type="text" class="form-control" id="txtMail" placeholder="Correo">
                        <input type="text" class="form-control" id="txtRepMail" placeholder="Repite tu correo">
                        <input type="tel" class="form-control" id="txtNumTel" placeholder="Celular">
                    </div>
               </div>

            </div>
                        </div>
                        <div class="mbr-author card-footer">
                            <div class="mbr-author-img"><img src="assets/images/verde.jpg" class="img-circle" alt="GuardarInformacionUsuario" id="fistLog"></div>


                        </div>
                    </div>
                </div>
                    <div class="col-xs-12 col-lg-4" >
                       <div class="mbr-testimonial card mbr-testimonial-lg" >
                        <div class="card-block" id="secondLog">
                           <div id="infoErrorDireccion">

                           </div>
                            <input type="text" class="form-control" id="txtState" placeholder="Estado" >
                            <input type="text" class="form-control" id="txtColonia" placeholder="Colonia">
                            <input type="text" class="form-control" id="txtCalle" placeholder="Calle">
                            <input type="text" class="form-control" id="txtNumInt" placeholder="Numero interior">
                            <input type="text" class="form-control" id="txtNumExt" placeholder="Numero exterior">
                        </div>
                        <div class="mbr-author card-footer">
                            <div class="mbr-author-img"><img src="assets/images/verde.jpg" class="img-circle" alt="GuardarInformaciónPersonal" id="secondLogBtn"></div>


                        </div>
                    </div>
                </div>
                    <div class="col-xs-12 col-lg-4">

                    <div class="mbr-testimonial card mbr-testimonial-lg">
                        <div class="card-block" id="lastLog">
                            <?php
                            $type = $_GET['type'];
                            ?>
                             <input type="text" class="form-control" id="txtUserReg" placeholder="Usuario">
                             <input type="password" class="form-control" id="txtPassword" placeholder="Contraseña">
                             <input type="password" class="form-control" id="txtRepPassword" placeholder="Repite tu contraseña">
                               <input type="hidden" value="<?php echo $type?>" id="type">

                            <?php
                              if($type == 1){
                             ?>
                             <form id="formCompany" method="post" action="#">
                             <input type="text" class="form-control" name="nombreEmpresa" id="nombreEmpresa" placeholder="Nombre de tu empresa">
                             <input type="text" class="form-control" name="giroEmpresa" id="giroEmpresa" placeholder="Giro">
                             <input type="text" class="form-control" name="rfcEmpresa" id="rfcEmpresa" placeholder="RFC">
                            </form>
                             <?php
                              }else{
                            ?>
                            <form id="formPerson">
                            <input type="text" class="form-control" name="nombrePersona"id="txtNombrePer" placeholder="Nombre">
                            <input type="text" class="form-control" name="apePat" id="txtApePat" placeholder="Apellido Paterno">
                            <input type="text" class="form-control" name="apeMat" id="txtApeMat" placeholder="Apellido Materno">
                            <input type="text" class="form-control" name="CURP" id="txtCurp" placeholder="CURP">
                            <input type="text" class="form-control" name="FechaNac" id="txtFechaNac" placeholder="Fecha Nacimiento">
                            Sexo: <select id="cmbSexo" name="sexo">
                                <option value="0" class="form-control">Elija una opcion</option>
                                <option>Maculino</option>
                                <option>Femenino</option>
                            </select>
                            </form>
                            <?php
                              }
                            ?>

                        </div>
                        <div class="mbr-author card-footer">
                            <div class="mbr-author-img"><img src="assets/images/verde.jpg" class="img-circle" alt="GuardarInformaciónContacto" id="lastLogBtn"></div>


                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

</section>
<script type="text/javascript" src="../core/controller/userLogController.js"></script>
<?php
include ('view/overAll/footer.php');
?>
  </body>
</html>
