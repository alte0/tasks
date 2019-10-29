<?php
require "init.php";
require "helpers.php";
// require "lib/lib.inc.php";

// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//   if (isset($_POST["signin"]) && $_POST["signin"] === '') {
//     if (signin($dbcon, $_POST)) {
//       $_SESSION['userInfo'] = $userInfo;
//       header("Location: " . $_SERVER["REQUEST_URI"]);
//       header("Location: /");
//     }
//   }

//   if (isset($_POST["signup"]) && $_POST["signup"] === '') {
//     if (signup($dbcon, $_POST)) {
//       // $_SESSION['userInfo'] = $userInfo;
//       header("Location: " . $_SERVER["REQUEST_URI"]);
//       header("Location: /");
//     } else {
//       $signup = true;
//     }
//   }

//   if (isset($_POST["task-add"]) && $_POST["task-add"] === '') {
//     if(addTask($dbcon, $_POST)) {
//       header("Location: " . $_SERVER["REQUEST_URI"]);
//     }
//   }
// }

// if ($_GET["action"] === "execute" && isset($_GET["id"])) {
//   executeTask($_GET["id"]);
//   header("Location: /");
// }

// if ($_GET["action"] === "exit") {
//   exitUser();
// }

// if ($_SESSION['userInfo']) {
//   if ($_GET["page"] === "add-task") {
//     $userAll = getUsers($dbcon);
//     $content = include_template('add-task', [
//       "userAll" => $userAll,
//       "msgs" => $msgs
//     ]);
//     $title = "$mainText Добавление задачи";
//   } else {
//     $tasks = getTasks($dbcon);
//     $content = include_template('tasks', [
//       "msgs" => $msgs,
//       "tasks" => $tasks
//     ]);
//     $title = "$mainText Главная";
//   }
// } else {
//   if ($_GET["page"] === "signup") {
//     $content = include_template('signup', [
//       "msgs" => $msgs
//     ]);
//     $title = "$mainText Регистрация пользователя";
//   } elseif ($_GET["page"] === "signin" || $_GET["page"] === null) {
//     $content = include_template('signin', [
//       "msgs" => $msgs
//     ]);
//     $title = "$mainText Авторизация пользователя";
//   }
// }

if (!isset($_SESSION['userInfo'])) {
  header("Location: /signin.php");
  die;
}

$content = include_template('tasks', [
  'user' => $user = 'fwefwe'
]);

$layout = include_template('layout', [
  'title' => "$mainText Задачи",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
