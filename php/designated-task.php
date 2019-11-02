<?php
require "init.php";

if (!$isAuth) {
    header("Location: /signin.php");
    die;
}

$myDesignatedTasks = getMyDesignatedTasks($linkDB, $userId);

$content = include_template('tasks', [
  'isLinkExecute' => false,
  'user' => $user,
  'userId' => $userId,
  'tasks' => $myDesignatedTasks,
  'title' => $title = "Я назначил задачи.",
  'linkHref' => $linkHref = "",
  'linkText' => $linkText = "Мои задачи",
]);

$layout = include_template('layout', [
  'title' => "$mainText Задачи",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
