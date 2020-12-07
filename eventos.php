<?php
header('Content-Type: application/json');
$pdo=new PDO("mysql:dbname=proweb;host=127.0.0.1","root","");

//selecionar eventos del calendario

$sentenciaSQL= $pdo->prepare("SELECT * FROM eventos");
$sentenciaSQL->execute();

$resultado= $sentenciaSQL->fetchALL(PDO::FETCH_ASSOC);
echo json_encode($resultado);

?>