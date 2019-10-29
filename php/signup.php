<?php
require "init.php";
require "helpers.php";

if ($_SERVER['REQUEST_METHOD'] === "POST") {
  $user = [
    'login' => !empty(trim($_POST["login"])) ? trim($_POST["login"]) : "",
    'password' => !empty(trim($_POST["password"])) ? trim($_POST["password"]) : "",
    'password2' => !empty(trim($_POST["password2"])) ? trim($_POST["password2"]) : "",
    'name' => !empty(trim($_POST["name"])) ? trim($_POST["name"]) : "",
    'surname' => !empty(trim($_POST["surname"])) ? trim($_POST["surname"]) : "",
    'patronymic' => !empty(trim($_POST["patronymic"])) ? trim($_POST["patronymic"]) : ""
  ];

  $required = ['login', 'password', 'password2', 'name', 'surname', 'patronymic'];

  $rules = [
    'login' => function () use ($user) {
        return validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $user["login"]);
    },
    'password' => function () use ($user) {
        return validateLength(MIN_LENGTH_PWD, MAX_LENGTH_PWD, $user["password"]);
    },
    'password2' => function () use ($user) {
        return validateLength(MIN_LENGTH_PWD, MAX_LENGTH_PWD, $user["password2"]);
    },
    'name' => function () use ($user) {
        return validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $user["name"]);
    },
    'surname' => function () use ($user) {
        return validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $user["surname"]);
    },
    'patronymic' => function () use ($user) {
        return validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $user["patronymic"]);
    },
  ];

  foreach ($required as $key) {
      if (empty($user[$key])) {
        $errorsForm[$key] = "Это поле нужно заполнить!";
      }
  }

  foreach ($user as $key => $value) {
      if (!isset($errorsForm[$key]) && isset($rules[$key])) {
        $rule = $rules[$key];
        $errorsForm[$key] = $rule();
      }
  }

  $errorsForm = array_filter($errorsForm);

  if (!count($errorsForm)) {
    // header("Location: /");
    // die;
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
var_dump($user);
var_dump($errorsForm);
