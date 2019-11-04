<?php
session_start();

$dbConf = require "config/db.php";
require "config/php-ini.php";
require "helpers.php";
require "vars.php";
require "sql-requests.php";

$linkDB = new PDO($dsn, $userDb, $password, $optionDB);

if (!$linkDB) {
  $error = "Невозможно подключиться к MySQL " . $e->getMessage();
  $content = include_template('error', [
    "error" => $error
  ]);
  $layout = include_template('layout', [
    'title' => "$mainText Ошибка",
    'bgClass' => $bgClass,
    'content' => $content
  ]);

  print($layout);
  die;
}
