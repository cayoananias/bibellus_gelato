<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "bibellus";

$con = new mysqli($host, $user, $pass, $db);

if ($con->connect_error) {
    die("Erro na conexão: " . $con->connect_error);
}
?>
