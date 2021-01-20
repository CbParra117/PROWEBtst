<?php
if(isset($_POST['submit'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $numero = $_POST['numero'];
    $materia = $_POST['materia'];
}
?>
<!DOCTYPE >
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- mobile metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <title>Registro.</title>

    <link href="../../../css/bootstrap/bootstrap.css" rel="stylesheet">
    <link href="../../../css/fontawesome-free-5.11.2-web/css/all.css" rel="stylesheet">
    <link href="../../../js/alertifyjs/css/alertify.min.css" rel="stylesheet">
    <link href="../../../css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="../../../css/estilos.css">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../../css/style.css">
    <link rel="stylesheet" href="../../../css/responsive.css">
    <link rel="icon" href="../../../images/fevicon.png" type="image/gif" />
    <link rel="stylesheet" href="../../../css/jquery.mCustomScrollbar.min.css">

    <link href="../../../css/bootstrap/bootstrap.css" rel="stylesheet">
    <link href="../../../css/fontawesome-free-5.11.2-web/css/all.css" rel="stylesheet">
    <link href="../../../js/alertifyjs/css/alertify.min.css" rel="stylesheet">
    <link href="../../../css/style.css" rel="stylesheet">
    <script src="../../../https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="../../../https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
</head>
<!-- body -->
<body class="main-layout">
<!-- loader  -->
<div class="loader_bg">
    <div class="loader"><img src="../../../images/loading.gif" alt="#" /></div>
</div>
<!-- end loader -->
<header >
    <!-- header inner -->
    <section class="wrapper">

        <div class="head-top">
            <div class="row">
                <div class="container">
                    <div class="col-12 col-md-12 col-lg-12 centrar">

                        <a href="#"><img  class="logo-j" src="../../../img/LOGO-COLOR.png"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-12 col-lg-12 menu-j">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars" style="color: white;"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link navegacion margen-j" href="../../../index.html"><i class="fas fa-home fa-fw" aria-hidden="true"></i> INICIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navegacion margen-j" href="../../../ListadeCursos.html"><i class="fas fa-tv"></i> CURSOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navegacion margen-j" href="../../../CalendrarioProyetos.html"><i class="fas fa-book" arial-hidden="true" ></i> PROYECTOS ESCOLARES</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link navegacion margen-j" href="../../../Contactos.html"><i class="fas fa-phone-square-alt"></i> CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
</header>
<!--state abouts -->
<div id="wrapper">
    <section class="contenido ">
            <div class="col-12 col-md-12 col-lg-12" style="background-color: transparent;margin-top: 10px;margin-bottom: 60px;">
                    <div align="center" class="abouts"> <div class="abouts-bg">
                        <div class="container">
                            <div class="row">

                                    <div class="col-md-12">
                                        <div class="titlepage">
                                            <h2 align="center" >DEJANOS TU INFORMACIÓN <strong class="cur">Y A LA BREVEDAD NOS PONEMOS EN CONTACTO CONTIGO PARA AUXILIARTE</strong></h2>
                                            <span  align="center" ><img  src="../../../images/boder.png" alt="img"/> </span> </div>
                                    </div>
                                <div class="col-12 col-md-12 col-lg-12" style="margin-bottom: 0px;padding-left:30px;padding-right: 30px">

                                    <form method="post">
                                        <div class="row">

                                            <div class="col-md-12" style="margin-top: 10px;">
                                                <div class="row">
                                                    <div class="col-md-2 col-lg-1 col-12 margen-campo">
                                                        <span class="" style="font-weight: bold;position: relative;top:3px;">NOMBRE:</span>
                                                    </div>
                                                    <div class="col-md-10 col-lg-11 col-12">
                                                        <input  placeholder="name" type="text" name="name" class="form-control" style="width: 100%;height: 33px;" value="" required="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12" style="margin-top: 10px;">
                                                <div class="row">
                                                    <div class="col-md-3 col-lg-2 col-12 margen-campo">
                                                        <span class="" style="font-weight: bold;position: relative;top:3px;">CORREO ELECTRÓNICO:</span>
                                                    </div>
                                                    <div class="col-md-9 col-lg-10 col-12">
                                                        <input type="email" name="email" placeholder="Correo Electronico." class="form-control" style="width: 100%;height: 33px;" value="" required="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12" style="margin-top: 10px;">
                                                <div class="row">
                                                    <div class="col-md-3 col-lg-2 col-12 margen-campo">
                                                        <span class="" style="font-weight: bold;position: relative;top:3px;" >NÚMERO DE CONTACTO:</span>
                                                    </div>
                                                    <div class="col-md-9 col-lg-10 col-12">
                                                        <input type="text" name="num" placeholder="Numero de contacto." class="form-control" style="width: 100%;height: 33px;" required="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12" style="margin-top: 10px;">
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-3 col-12 margen-campo">
                                                        <span class="" style="font-weight: bold;position: relative;top:3px;">MATERIA QUE TE SOLICITA EL PROYECTO:</span>
                                                    </div>
                                                    <div class="col-md-6 col-lg-9 col-12">
                                                        <input type="text" name="materia" placeholder="Materia." class="form-control" style="width: 100%;height: 33px;" required="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12" style="margin-top: 10px;">
                                                <div class="terms">
                                                    <div class="col-md-6 col-lg-3 col-12 margen-campo">
                                                    <input  type="checkbox"name="terms" onclick="enableSending()" class="form-control"style="width: 100%;height: 33px;" value="" required="" >
                                                     <label for="terms"><a href="TerminosYCondiciones.html" target="_blank">
                                                        Acepto Terminos y Condiciones</a></label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-md-12" style="margin-top: 10px;">
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-3 col-12 margen-campo">
                                                        <span class="" style="font-weight: bold;position: relative;top:3px;">Contraseña:</span>
                                                    </div>
                                                    <div class="col-md-6 col-lg-9 col-12">
                                                        <input type="password" name="Password" placeholder="Contraseña." class="form-control" style="width: 100%;height: 33px;" required="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 centrar" style="margin-top: 20px;">
                                                <input  class="btn-outline-primary"  type="submit" name="enviar" >
                                            </div>
                                        </div>
                                    </form>
                                    <?php
                                    include ("Registro.php");
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

    </section>

</div>
<footer>
    <div class="col-12 col-md-12 col-lg-12" style="margin-bottom: 0px;padding-left:30px;padding-right: 30px;margin-top: 10px;">
        <div class="row">
            <div class="col-md-12 footer">
                <div class="row">
                    <div class="col-md-4 col-12 col-lg-4 centrar altura-foo">
                        <div class="row">
                            <div class="col-md-12 centrar">
                                <span class="text-span">TELÉFONOS / WHATS APP:</span>
                            </div>
                            <div class="col-md-12 centrar" style="margin-top: 5px;">
                                <img src="../../../img/call.png" style="width: 25px;height: auto;">&nbsp;<span class="text-span">55.40.52.92.85</span>
                            </div>
                            <div class="col-md-12 centrar" style="margin-top: 5px;">
                                <img src="../../../img/call.png" style="width: 25px;height: auto;">&nbsp;<span class="text-span">55.81.22.71.53</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 col-lg-4 altura-foo centrar">
                        <div class="row">
                            <div class="col-md-12">
                                <img src="../../../img/logo-gris.png" class="logo-footer">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 col-lg-4 altura-foo centrar">
                        <div class="row">
                            <div class="col-md-12 centrar">
                                <span class="text-span">UBICACIÓN:</span>
                            </div>
                            <div class="col-md-12 centrar" style="margin-top: 5px;">
                                <img src="../../../img/ubicacion.png" style="width: 25px;height: auto;">&nbsp;<span class="text-span">Calle Priv. TRIANA MZ41 LT10 N20 Conjnto urbano Real verona C.P. 55767 TECAMAC EDO. DE MEX.</span>
                                        </div>
                                        <div class="col-md-12 centrar" style="margin-top: 10px;">
                                            <a href="https://www.google.com/maps/search/priv+triana+mz41+lt+10+n20+c.+treviso+conjunto+urbano+real+verona+c.p+55767+tecama+mex/@19.6519622,-99.0293331,19.25z" target="_blank" onclick="alert('Maps');"><img src="../../../img/maps.png" style="width: 200px;height: auto;cursor: pointer;"></a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

</footer>

<!-- end footer -->
<!-- Javascript files-->
<script src="../../../js/jquery.min.js"></script>
<script src="../../../js/popper.min.js"></script>
<script src="../../../js/bootstrap.bundle.min.js"></script>
<script src="../../../js/jquery-3.0.0.min.js"></script>
<script src="../../../js/plugin.js"></script>

<!-- sidebar -->
<script src="../../../js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="../../../js/custom.js"></script>
</body>
</html>/html>