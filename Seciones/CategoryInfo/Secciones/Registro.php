<?php
   if(isset($_POST['enviar']))
   {
       if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['num'])
           && !empty($_POST['materia']))
       {
           $name = $_POST['name'];
           $email = $_POST['email'];
           $num = $_POST['num'];
           $mate = $_POST['materia'];
           $header = "From: noreply@example.com" . "\r\n";
           $header = "X-Mailer: PHP/".phpversion();
           $mail = @mail($name,$email,$num,$mate);
           if ($mail){

               echo "<h4>¡Mail Enviado existosamente!. </h4>";
           }
       }
   }