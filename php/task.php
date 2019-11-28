<?php
require "init.php";

if (!$isAuth) {
  header("Location: /signin.php");
  die;
}

if (!isset($_GET["id"]) || clearInt($_GET["id"]) === 0) {
    $seconds = 6;
    header("Refresh: $seconds; url=/index.php");
    $error = "Такой задачи не существует, через $seconds сек. вас перенаправит на главную страницу сайта.";
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

$taskId = $_GET["id"];
$task = getTask($linkDB, $sqlTask, $taskId);

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

$nameTask = $task['task_title'];

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

$content = include_template('task', [
  'isShowLinkExecute' => $userId === $task['executor_id'],
  'user' => $user,
  'task' => $task,
  'userMenu' => $userMenu,
  'allowTags' => $allowTags,
  'today' => $today
]);
  
$layout = include_template('layout', [
  'title' => "$mainText Задача $nameTask",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);