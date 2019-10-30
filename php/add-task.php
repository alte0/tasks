<?php
require "init.php";

if (!isset($_SESSION['userInfo'])) {
  header("Location: /signin.php");
  die;
}

$content = include_template('add-task', [
  "users" => $users,
  'today' => $today
]);

$layout = include_template('layout', [
  'title' => "$mainText Добавить задачу",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
