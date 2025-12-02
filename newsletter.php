<?php
include "conexao.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $email = trim($_POST["email"] ?? "");

    if (!empty($email)) {

        $sql = "INSERT INTO newsletter (email) VALUES (?)";
        $stmt = $con->prepare($sql);
        $stmt->bind_param("s", $email);

        if ($stmt->execute()) {
            header("Location: contato.php?msg=ok");
            exit;
        } else {
            echo "Erro ao salvar: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "E-mail inválido.";
    }
}

$con->close();
?>
