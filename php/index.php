<?php
require "lib/lib.inc.php";

session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  if ($_POST["signin"] === '') {
    if (signin($dbcon, $_POST)) {
      $_SESSION['auth'] = true;
      $_SESSION['userInfo'] = $userInfo;
      header("Location: " . $_SERVER["REQUEST_URI"]);
      header("Location: /");
    }
  }

  if ($_POST["signup"] === '') {
    if (signup($dbcon, $_POST)) {
      // $_SESSION['auth'] = true;
      header("Location: " . $_SERVER["REQUEST_URI"]);
      header("Location: /");
    } else {
      $signup = true;
    }
  }

  if ($_POST["task-add"] === '') {
    if(addTask($dbcon, $_POST)) {
      header("Location: " . $_SERVER["REQUEST_URI"]);
    }
  }
}

if ($_GET["action"] === "execute" && isset($_GET["id"])) {
  executeTask($_GET["id"]);
  header("Location: /");
}

if ($_GET["action"] === "exit") {
  exitUser();
}

if ($_SESSION['auth']) {
  if ($_GET["page"] === "add-task") {
    $userAll = getUsers($dbcon);
    $content = include_template('add-task', [
      "userAll" => $userAll,
      "msgs" => $msgs
    ]);
    $title = "$mainText Добавление задачи";
  } else {
    $tasks = getTasks($dbcon);
    $content = include_template('tasks', [
      "msgs" => $msgs,
      "tasks" => $tasks
    ]);
    $title = "$mainText Главная";
  }
} else {
  if ($_GET["page"] === "signup") {
    $content = include_template('signup', [
      "msgs" => $msgs
    ]);
    $title = "$mainText Регистрация пользователя";
  } elseif ($_GET["page"] === "signin" || $_GET["page"] === null) {
    $content = include_template('signin', [
      "msgs" => $msgs
    ]);
    $title = "$mainText Авторизация пользователя";
  }
}

$layout = include_template('layout', [
  'title' => $title,
  'content' => $content
]);

print($layout);
