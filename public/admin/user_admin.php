<?php require_once './../write.php'; ?>

<?php 

$argv[1] =	"superadmin";
$argv[2] = "admin";

$query = pdo()->prepare('INSERT INTO admin (userAdmin , passAdmin) VALUES (?,?)');
$query->execute([$argv[1], password_hash($argv[2], PASSWORD_DEFAULT)]);


echo "Utilisateur crée !\n";

 ?>