<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"] ?? "";

    if (!empty($email)) {
        $arquivo = "newsletter_emails.txt";
        file_put_contents($arquivo, $email . PHP_EOL, FILE_APPEND);
        echo "Obrigado por se inscrever!";
    } else {
        echo "E-mail inválido.";
    }
}
?>
