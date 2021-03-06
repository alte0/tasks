<?php
require "init.php";

if ($isAuth) {
    $seconds = 6;
    header("Refresh: $seconds; url=/index.php");
    $error = "Вы уже зарегистрированны, через $seconds сек. вас перенаправит на главную страницу сайта.";
    $content = include_template('error', [
      'error' => $error
    ]);

    $layout = include_template('layout', [
      'title' => "$mainText Задачи",
      'bgClass' => $bgClass,
      'content' => $content
    ]);

    print($layout);
    die;
}

if ($_SERVER['REQUEST_METHOD'] === "POST") {
  $user = [
    'login' => !empty(trim($_POST["login"])) ? trim($_POST["login"]) : "",
    'password' => !empty(trim($_POST["password"])) ? trim($_POST["password"]) : "",
    'password2' => !empty(trim($_POST["password2"])) ? trim($_POST["password2"]) : "",
    'name' => !empty(trim($_POST["name"])) ? trim($_POST["name"]) : "",
    'surname' => !empty(trim($_POST["surname"])) ? trim($_POST["surname"]) : "",
    'patronymic' => !empty(trim($_POST["patronymic"])) ? trim($_POST["patronymic"]) : ""
  ];

  if (addUser($linkDB, $sqlAddUser, $user)) {
      header("Location: /signin.php");
      die;
  }
}

$content = include_template('signup', [
  "MIN_LENGTH_TEXT" => MIN_LENGTH_TEXT,
  'MAX_LENGTH_TEXT' => MAX_LENGTH_TEXT,
  'MIN_LENGTH_PWD' => MIN_LENGTH_PWD,
  'MAX_LENGTH_PWD' => MAX_LENGTH_PWD,
  'errorsForm' => $errorsForm
]);

$layout = include_template('layout', [
  'title' => "$mainText Регистрация пользователя",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);