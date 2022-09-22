<?php

ini_set('display_errors', 1);

session_start();

function pdo () {
    try {
        $db="eshop";
        $pdo = new PDO('mysql:host=localhost','root','');
        $pdo->exec("create database if not exists $db");
        $pdo = new PDO("mysql:host=localhost;dbname=$db;CHARSET=utf8",'root','');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $ex) {
        echo "ERR CONFIG"."  ".$ex->getMessage();
    }
}

function partial ($left, $name, $params = []) {
	extract($params);
	require("{$left}partials_html/{$name}.html.php");
}

function is_post () {
	return $_SERVER['REQUEST_METHOD'] === 'POST';
}

function redirect ($url) {
	header("location: $url");
    die();
}

function redirect_unless_admin() {
	if (!($_SERVER['admin'])) { redirect('./logout.php'); }
}

?>