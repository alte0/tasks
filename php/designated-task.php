<?php
require "init.php";

if (!$isAuth) {
    header("Location: /signin.php");
    die;
}

$sql = $isClosedModeTasks ? $sqlDesignatedTaskComplete : $sqlDesignatedTask;
$tasks = getMyDesignatedTasks($linkDB, $sql);

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

$sqlPages = $isClosedModeTasks ? $sqlDesignatedTaskComplete : $sqlDesignatedTask;
$sqlOffset = $sqlPages . " LIMIT " . $pageItems . ' OFFSET ' . $offset;

$myDesignatedTasks = getMyDesignatedTasks($linkDB, $sqlOffset);

if (isset($myDesignatedTasks["error"])) {
    $error = $myDesignatedTasks["error"];
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
    'linkHref' => $isClosedModeTasks ? "designated-task.php" : "designated-task.php?mode-tasks=closed",
    'linkText' => $isClosedModeTasks ? "Я назначил задачи" : "Выполненые задачи другими"
  ],
  [
    'linkHref' => "index.php",
    'linkText' => "Мои задачи"
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
  'isShowLinkExecute' => false,
  'user' => $user,
  'userId' => $userId,
  'tasks' => $myDesignatedTasks,
  'title' => $title = $isClosedModeTasks ? "Выполненные задачи другими." : "Я назначил задачи.",
  'userMenu' => $userMenu,
  'searchForm' => $searchForm,
  'allowTags' => $allowTags,
  'pagination' => $pagination,
  'today' => $today
]);

$layout = include_template('layout', [
  'title' => "$mainText Задачи",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
