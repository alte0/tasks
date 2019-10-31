<?php
require "init.php";

if (!$isAuth) {
  header("Location: /signin.php");
  die;
}

$tasks = getTasks($linkDB);

$content = include_template('tasks', [
  'user' => $user,
  'tasks' => $tasks
]);

$layout = include_template('layout', [
  'title' => "$mainText Задачи",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);