<?php
$servername = "mysql-connection";
$username = "root";
$password = "Senha123";
$database = "meubanco";

// Criar conexão
$link = new mysqli($servername, $username, $password, $database);

// Verificar conexão
if ($link->connect_error) {
    die("Connection failed: " . $link->connect_error);
}
echo "Conexão com o banco de dados foi bem-sucedida!";
?>
