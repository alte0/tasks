<?php
require "init.php";

if (!$isAuth) {
  header("Location: /signin.php");
  die;
}

$tasks = getMyTasks($linkDB, $sqlMyTasks, $userId);
$itemsCount = count($tasks);
$pagesCount = ceil($itemsCount / $pageItems);
$curPage = isset($_GET['page']) && !empty($_GET['page']) ? intval($_GET['page']) : 1;

if ($curPage > $pagesCount && $pagesCount > 0) {
  $curPage = $pagesCount;
}

$offset = ($curPage - 1) * $pageItems;
$pages = range(1, $pagesCount);

$sqlOffset = $sqlMyTasks . " LIMIT " . $pageItems . ' OFFSET ' . $offset;

$myTasks = getMyTasks($linkDB, $sqlOffset, $userId);

$pagination = include_template('pagination', [
  'pagesCount' => $pagesCount,
  'pages' => $pages,
  'curPage' => $curPage,
]);

$content = include_template('tasks', [
  'isLinkExecute' => true,
  'user' => $user,
  'tasks' => $myTasks,
  'title' => $title = "Мои задачи.",
  'linkHref' => $linkHref = "designated-task.php",
  'linkText' => $linkText = "Назначенные задачи",
  'pagination' => $pagination
]);

$layout = include_template('layout', [
  'title' => "$mainText Задачи",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
// var_dump($tasks);  