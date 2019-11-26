<?php
require "init.php";

if (!$isAuth) {
  header("Location: /signin.php");
  die;
}

if (empty($_GET["search-field"])) {
  $error = "Не задан текст для поиска!";

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

if (isset($_GET["search-field"])) {
  $searchText = trim($_GET["search-field"]);
  $tasks = getTasksSearch($linkDB, $sqlTasksSearch, $searchText);

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
  
  $sqlOffset = $sqlTasksSearch . " LIMIT " . $pageItems . ' OFFSET ' . $offset;
  
  $myTasks = getTasksSearch($linkDB, $sqlOffset, $searchText);
  
  
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
}

$linksUserMenu = [
  [
    'linkHref' => "index.php",
    'linkText' => "Мои задачи"
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

$urlPagination = "?page=";

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
  'title' => !empty($_GET["search-field"]) ? "Результаты поиска по запросу - " .  '"' . clearStrDataTags($_GET["search-field"]) . '"' : "",
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