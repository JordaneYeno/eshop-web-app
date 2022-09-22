<?php require_once ('../../write.php'); ?>

<?php partial('../../','header_admin', ['title' => 'Dashboard']) ?>

<?php 


if (!$_SESSION['admin']) {redirect ('./login.php');}
	
 ?>

<h1>Admin</h1>

<form method="post" action="./logout.php">
	<button>Déconnexion</button>
</form>


<?php partial('../../','footer_admin') ?>