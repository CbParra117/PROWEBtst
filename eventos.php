<?php
header('Content-Type: application/json');
$pdo=new PDO("mysql:dbname=proweb;localhost:63342","root","");


$accion=(isset($_GET['accion']))?$_GET['accion']:'leer';
switch ($accion){
    case 'agregar':
        //instruccion de agregado
       $sentenciaSQL= $pdo->prepare("INSERT INTO 
       eventos(title,descripcion,color,textcolor,start,end)
       VALUES(:title:descripcion,:color,:textcolor,:start,:end)");

       $respuesta=$sentenciaSQL->execute(array(
          "title" => $_POST['title'],
          "descripcion" => $_POST['descripcion'],
           "color" => $_POST['color'],
           "textcolor" => $_POST['textColor'],
           "start" => $_POST['start'],
           "end" => $_POST['end']
       ));
       echo json_encode($respuesta);
        break;
    case 'eliminar':
        //intruccion de eliminar
        //echo "Instruccion elminar";
        $respuesta=false;
        if(isset($_POST['id'])){
            $sentenciaSQL = $pdo->prepare("DELETE FROM eventos WHERE ID=:ID");
            $respuesta= $sentenciaSQL->execute(array("ID"=>$_POST['id']));

        }
        echo json_decode($respuesta);
        break;

    case 'modificar':
        //instruccion de mordificar
        $sentenciaSQL =$pdo->prepare("UPDATE eventos SET
        title=:title,
                   decripcion=:descricion,
                   color=:color,
                   textcolor=:textColor,
                   start=:start,
                   end=:end
                    WHERE ID =: ID
        ");
        $respuesta=$sentenciaSQL->execute(array(
            "title" =>$_POST['title'],
            "descripcion" =>$_POST['descripcion'],
            "color" => $_POST['color'],
            "textcolor" => $_POST['textColor'],
            "start" => $_POST['start'],
            "end" => $_POST['end']
        ));
        echo json_decode($respuesta);
        break;

    default:
//selecionar eventos del calendario


$sentenciaSQL= $pdo->prepare("SELECT * FROM eventos");
$sentenciaSQL->execute();

$resultado= $sentenciaSQL->fetchALL(PDO::FETCH_ASSOC);
echo json_encode($resultado);
break;
}
?>