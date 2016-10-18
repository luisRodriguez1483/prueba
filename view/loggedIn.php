<!DOCTYPE html>
<html>
<?php include ( 'view/overAll/header.php'); ?>

<body>
    <?php include( 'view/overAll/loggedInTopNav.php'); ?>

    <section class="engine"></section>
    <section class="mbr-cards mbr-section mbr-section-nopadding mbr-after-navbar" id="index-features1-0" style="background-color: rgb(255, 255, 255);">



        <div class="mbr-cards-row row striped">

            <div class="mbr-cards-col col-xs-12 col-lg-3 " style="padding-top: 160px; padding-bottom: 160px;">
                <div class="container">
                    <div class="card cart-block">

                        <div class="card-block" style="text-align:left;">
                            <h4 class="card-title">Mi panel de control</h4>
                            <h6 class="card-h"> <?php echo "Hola ".$_SESSION["session_id"]." ".$_SESSION["session_user"]; ?> </h6>
                            <div id="panelContent" class="btn-group-vertical">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mbr-cards-col col-xs-12 col-lg-6" style="padding-top: 160px; padding-bottom: 160px;">
                <div class="container">
                    <div class="card cart-block">

                        <div class="card-block">
                           <div id="loader"></div>
                            <h4 id="titleMiddle" class="card-title" id="middleTitle">Nueva Vacante</h4>
                            <div id="panelMiddle">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="mbr-cards-col col-xs-12 col-lg-3" style="padding-top: 160px; padding-bottom: 160px;">
                <div class="container">
                    <div class="card cart-block">

                        <div class="card-block">
                            <h4 class="card-title">Publicidad</h4>

                            <p class="card-text">
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>Google has a highly exhaustive list of fonts compiled into its web font platform and Mobirise makes it easy for you to use them on your website easily and freely.</p>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    </section>
    <?php include ( 'view/overAll/footer.php'); ?>
</body>

</html>
