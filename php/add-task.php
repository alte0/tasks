<?php
require "init.php";

if (!$isAuth) {
    $seconds = 6;
    header("Refresh: $seconds; url=/signin.php");
    $error = "Вы не авторизовались, через $seconds сек. вас перенаправит на страницу входа на сайт.";
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

$users = getUsers($linkDB);

if (isset($users["error"])) {
    $error = $users["error"];
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
    $userForm = [
      'date' => isset($_POST["date"]) ? trim($_POST["date"]) : "",
      'executor' => isset($_POST["executor"]) ? trim($_POST["executor"]) : "",
      'title' => isset($_POST["title"]) ? trim($_POST["title"]) : "",
      'text' => isset($_POST["text"]) ? trim($_POST["text"]) : "",
      'date-no-imit' => "0",
    ];

    $required = ['date', 'executor', 'title', 'text'];

    foreach ($required as $key) {
        if (empty($userForm[$key])) {
            $errorsForm[$key] = "Это поле нужно заполнить!";

            if ($key === "executor") {
              $errorsForm[$key] = "Это поле нужно выбрать!";
            }
        }
    }

    $errorsForm = array_filter($errorsForm);

  if (!count($errorsForm)) {
    if (addTask($linkDB, $userForm)) {
      header("Location: " . $_SERVER["REQUEST_URI"]);
    }
  }
}

$content = include_template('add-task', [
  "users" => $users,
  'today' => $today,
  'errorsForm' => $errorsForm
]);

$layout = include_template('layout', [
  'title' => "$mainText Добавить задачу",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
