<?php
require "init.php";
require "helpers.php";

if (!isset($_SESSION['userInfo'])) {
  header("Location: /signin.php");
  die;
}

$content = include_template('add-task', [
  "userAll" => $userAll,
  'today' => $today
]);

$layout = include_template('layout', [
  'title' => "$mainText Добавить задачу",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
