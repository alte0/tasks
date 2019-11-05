<?php
require "init.php";

if (!$isAuth) {
    header("Location: /signin.php");
    die;
}

$tasks = getMyDesignatedTasks($linkDB, $sqlDesignatedTask, $userId);
$itemsCount = count($tasks);
$pagesCount = ceil($itemsCount / $pageItems);
$curPage = isset($_GET['page']) && !empty($_GET['page']) ? intval($_GET['page']) : 1;

if ($curPage > $pagesCount && $pagesCount > 0) {
    $curPage = $pagesCount;
}

$offset = ($curPage - 1) * $pageItems;
$pages = range(1, $pagesCount);

$sqlOffset = $sqlDesignatedTask. " LIMIT " . $pageItems . ' OFFSET ' . $offset;

$myDesignatedTasks = getMyDesignatedTasks($linkDB, $sqlOffset, $userId);

$pagination = include_template('pagination', [
  'pagesCount' => $pagesCount,
  'pages' => $pages,
  'curPage' => $curPage,
]);

$content = include_template('tasks', [
  'isLinkExecute' => false,
  'user' => $user,
  'userId' => $userId,
  'tasks' => $myDesignatedTasks,
  'title' => $title = "Я назначил задачи.",
  'linkHref' => $linkHref = "",
  'linkText' => $linkText = "Мои задачи",
  'allowTags' => $allowTags,
  'pagination' => $pagination,
]);

$layout = include_template('layout', [
  'title' => "$mainText Задачи",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
