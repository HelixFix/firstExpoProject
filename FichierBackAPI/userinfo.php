<?php

header('Content-Type: application/json');

/**
 * connexion Ã  la base de donnÃ©es
 */
try {
    $connexion = new PDO('mysql:host=db5000296647.hosting-data.io;dbname=dbs289874','dbu136770','JD90200jd*');
    $retour["success"] = true;
}
catch(Exception $ex) {
    $retour["success"] = false;
}
$name = $_POST['name'];
$mail = $_POST['mail'];
$id = $_POST['id'];

$request = $connexion->prepare("update users set pseudo = :mail, name = :name where id = :id");
$bindings = array(
    ':id' => $id, ':name' => $name, ':mail' => $mail
);
$request->execute($bindings);
echo json_encode(true);