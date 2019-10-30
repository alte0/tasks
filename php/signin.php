<?php
require "init.php";

if ($isAuth) {
    $seconds = 6;
    header("Refresh: $seconds; url=/");
    $error = "Вы уже зашли на сайт, через $seconds сек. вас перенаправит на главную страницу сайта.";
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
    ];

    $required = ['login', 'password'];

    $rules = [
      'login' => function () use ($user) {
          return validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $user["login"]);
      },
      'password' => function () use ($user) {
          return validateLength(MIN_LENGTH_PWD, MAX_LENGTH_PWD, $user["password"]);
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
      if (checkUserInDB($linkDB, $user, true)) {
        header("Location: /");
        die;
      }
      $errorsForm["login"] = $errorsForm["password"] = "Неправльный логин или пароль!";
    }
}

$content = include_template('signin', [
  "MIN_LENGTH_TEXT" => MIN_LENGTH_TEXT,
  'MAX_LENGTH_TEXT' => MAX_LENGTH_TEXT,
  'MIN_LENGTH_PWD' => MIN_LENGTH_PWD,
  'MAX_LENGTH_PWD' => MAX_LENGTH_PWD,
  'errorsForm' => $errorsForm
]);

$layout = include_template('layout', [
  'title' => "$mainText Авторизация",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
