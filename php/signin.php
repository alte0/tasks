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

$content = include_template('signin', [
  "MIN_LENGTH_TEXT" => MIN_LENGTH_TEXT,
  'MAX_LENGTH_TEXT' => MAX_LENGTH_TEXT,
  'MIN_LENGTH_PWD' => MIN_LENGTH_PWD,
  'MAX_LENGTH_PWD' => MAX_LENGTH_PWD
]);

$layout = include_template('layout', [
  'title' => "$mainText Авторизация",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
