<?php
require "init.php";

if (!$isAuth) {
  header("Location: /signin.php");
  die;
}

$myTasks = getMyTasks($linkDB, $userId);

$content = include_template('tasks', [
  'isLinkExecute' => true,
  'user' => $user,
  'tasks' => $myTasks,
  'title' => $title = "Мои задачи.",
  'linkHref' => $linkHref = "designated-task.php",
  'linkText' => $linkText = "Назначенные задачи",
]);

$layout = include_template('layout', [
  'title' => "$mainText Задачи",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);