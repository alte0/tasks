<?php
require "init.php";

if (!$isAuth) {
  header("Location: /signin.php");
  die;
}

$sql = $isClosedModeTasks ? $sqlMyTasksComplete : $sqlMyTasks;
$tasks = getMyTasks($linkDB, $sql, $userId);

if (isset($task["error"])) {
    $error = $task["error"];
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

$itemsCount = count($tasks);
$pagesCount = ceil($itemsCount / $pageItems);
$curPage = isset($_GET['page']) && !empty($_GET['page']) ? intval($_GET['page']) : 1;

if ($curPage > $pagesCount && $pagesCount > 0) {
  $curPage = $pagesCount;
}

$offset = ($curPage - 1) * $pageItems;
$pages = range(1, $pagesCount);

$sqlPages = $isClosedModeTasks ? $sqlMyTasksComplete : $sqlMyTasks;
$sqlOffset = $sqlPages . " LIMIT " . $pageItems . ' OFFSET ' . $offset;

$myTasks = getMyTasks($linkDB, $sqlOffset, $userId);

if (isset($myTasks["error"])) {
    $error = $myTasks["error"];
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

$linksUserMenu = [
  [
    'linkHref' => $isClosedModeTasks ? "index.php" : "index.php?mode-tasks=closed",
    'linkText' => $isClosedModeTasks ? "Мои задачи" : "Выполненые задачи мною"
  ],
  [
    'linkHref' => "designated-task.php",
    'linkText' => "Я назначил задачи"
  ]
];

$userMenu = include_template('user-menu', [
  'user' => $user,
  'linksUserMenu' => $linksUserMenu
]);

$urlPagination = $isClosedModeTasks ? "?mode-tasks=closed&page=" : "?page=";

$pagination = include_template('pagination', [
  'pagesCount' => $pagesCount,
  'pages' => $pages,
  'curPage' => $curPage,
  'urlPagination' => $_SERVER["SCRIPT_NAME"] . $urlPagination,
]);

$searchForm = include_template('search', []);

$content = include_template('tasks', [
  'isLinkExecute' => true,
  'user' => $user,
  'tasks' => $myTasks,
  'title' => $isClosedModeTasks ? "Мои выполненные задачи." : "Мои задачи.",
  'allowTags' => $allowTags,
  'userMenu' => $userMenu,
  'searchForm' => $searchForm,
  'pagination' => $pagination
]);

$layout = include_template('layout', [
  'title' => "$mainText Задачи",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);