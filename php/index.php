<?php
require "lib/lib.inc.php";

if ($_GET["page"] === "signup") {
  $signup = true;
}
if ($_GET["page"] === "signin") {
  $signup = false;
}
session_start();
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  if ($_POST["signin"] === '') {
    if (signin($mysqli, $_POST)) {
      $_SESSION['auth'] = true;
      header("Location: " . $_SERVER["REQUEST_URI"]);
      header("Location: /");
      exit;
    }
  }

  if ($_POST["signup"] === '') {
    if (signup($mysqli, $_POST)) {
      // $_SESSION['auth'] = true;
      header("Location: " . $_SERVER["REQUEST_URI"]);
      header("Location: /");
      exit;
    } else {
      $signup = true;
    }
  }
}

if ($_SESSION['auth']) {
  $content = include_template('tasks.php');
  $title = "Tasks - Главная";
} elseif (!$signup) {
  $content = include_template('signin.php');
  $title = "Tasks - Авторизация пользователя";
} else {
  $content = include_template('signup.php');
  $title = "Tasks - Регистрация пользователя";
}

$layout = include_template('layout.php', [
  'title' => $title,
  'content' => $content
]);

print($layout);