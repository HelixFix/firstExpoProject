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

$id = $_POST['id'];
$request = $connexion->prepare("SELECT * FROM users WHERE id = :id");
$bindings = array(
    ':id' => $id
);
$request->execute($bindings);
if($request->rowCount() > 0) {
    $request = $connexion->prepare("delete from users where id = :id");
    $bindings = array(
        ':id' => $id
    );
    $request->execute($bindings);
    echo json_encode(true);
}else{
    echo json_encode(false);
}