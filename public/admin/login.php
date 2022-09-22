<?php require_once './../write.php'; ?>

<?php partial('./../','header_admin', ['title' => 'Connexion Admin']) ?>

<?php 

	if ($_SESSION['admin']) {
		redirect ('./dashboard.php');
	}

?>

<?php 

	if (is_post()) {
		$query = pdo()->prepare('SELECT * FROM admins WHERE name = ?');
		$query->execute([$_POST['name']]);
		$admin = $query->fetch();

		if ($admin and password_verify($_POST['password'], $admin['password'])) {
			$_SESSION['admin'] = $admin; 
			 redirect ('./dashboard.php');
		}else{
			$errors['credentails'] = 'Identifiants incorrects';
		}

	}

 ?>

<h1>Connexion Admin</h1>

<form method="post">

	<?php if (isset($errors['credentails'])): ?>
		<p>
			<?= $errors['credentails'] ?>
		</p>
	<?php endif ?>
	<p>
		<label for="name">Nom: </label>
		<input type="text" name="name" id="name">
	</p>
	<p>
		<label for="password">Mot de passe: </label>
		<input type="password" name="password" id="password">
	</p>
	<p>
		<button>Connexion</button>
	</p>

</form>

<?php partial('../../','footer_admin') ?>

