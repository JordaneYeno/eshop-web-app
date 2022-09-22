<?php require_once './../write.php'; ?>

<?php partial('./../','header_admin', ['title' => 'Connexion Admin']) ?>


<?php 

	if (is_post()) {
		$query = pdo()->prepare('SELECT * FROM admin WHERE userAdmin = ?');
		$query->execute([$_POST['name']]);
		$admin = $query->fetch();

		if ($admin and password_verify($_POST['password'], $admin['passAdmin'])) {
			
			 redirect ('./dashboard/index.html');
		}else{
			$errors['credentails'] = 'Identifiants incorrects';
		}

	}

 ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="Hau Nguyen">
    <meta name="keywords" content="au theme template">

    <!-- Title Page-->
    <title>Login</title>

    <!-- Main CSS-->
    <link href="./assets/css/theme.css" rel="stylesheet" media="all">

</head>

<body class="animsition">
    <div class="page-wrapper">
        <div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="#">
                                <img src="./" alt="">
                            </a>
                        </div>
                        <div class="login-form">
                            <form action="" method="post">

<?php if (isset($errors['credentails'])): ?>
    <p>
        <?= $errors['credentails'] ?>
    </p>
<?php endif ?>

                                <div class="form-group">
                                    <label>Utilisateur </label>
                                    <input class="au-input au-input--full" type="text" name="name" id="name" placeholder="Utilisateur">
                                </div>
                                <div class="form-group">
                                    <label>Mots de passe</label>
                                    <input class="au-input au-input--full" type="password" name="password" id="password" placeholder="Mots de passe">
                                </div>
                                <button class="au-btn au-btn--block au-btn--green m-b-20 bottom" type="submit">CONNEXION</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Jquery JS-->
    <script src="vendor/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap JS-->
    <script src="vendor/bootstrap-4.1/popper.min.js"></script>
    <script src="vendor/bootstrap-4.1/bootstrap.min.js"></script>
    <!-- Vendor JS       -->
    <script src="vendor/slick/slick.min.js">
    </script>
    <script src="vendor/wow/wow.min.js"></script>
    <script src="vendor/animsition/animsition.min.js"></script>
    <script src="vendor/bootstrap-progressbar/bootstrap-progressbar.min.js">
    </script>
    <script src="vendor/counter-up/jquery.waypoints.min.js"></script>
    <script src="vendor/counter-up/jquery.counterup.min.js">
    </script>
    <script src="vendor/circle-progress/circle-progress.min.js"></script>
    <script src="vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
    <script src="vendor/chartjs/Chart.bundle.min.js"></script>
    <script src="vendor/select2/select2.min.js">
    </script>

    <!-- Main JS-->
    <script src="js/main.js"></script>

</body>

</html>
<!-- end document-->