<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$numero = $_POST['numero'];
$materia = $_POST['materia'];
$body = "Correo:" . $nombre . "<b>Correo:" . $correo . "<br>Telefono:"
    . $numero . "<br>Materia:" . $materia;
use PHPMailer\PHPMailer\PHPMailer;
use  PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';
require 'OAuth.php';
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);




    try {
        //Server settings
        $mail->SMTPDebug = 0;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth = true;                                   // Enable SMTP authentication
        $mail->Username = 'prowebgrap117@gmail.com';                     // SMTP username
        $mail->Password = 'Proweb321';                               // SMTP password
        $mail->SMTPSecure = `PHPMailer::ENCRYPTION_SMTPS`;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //Recipients
        $mail->setFrom('interpol_elias@hotmail.com', $nombre);
        $mail->addAddress('interpol_elias@hotmail.com');     // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'holoooooooo';
        $mail->Body = 'Correo de prueba';


        $mail->send();
        echo '<scritp>
alert("El Correo se a enviado a ladireccion de correo, vaya a su bandeja de entrada para confirmar el acceso");
window.history.go(-1);
</scritp>';
    } catch (Exception $e) {
        echo "Hubo un Error, algo salio mal :c : {$mail->ErrorInfo}";

    }

