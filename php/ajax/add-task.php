<?php
require "../init.php";

header("Content-Type: application/json;");

if (!$isAuth) {
  echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы не авторизованны!"]);
  die;
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["add-task"])) {
  if ($_POST["add-task"] === 'ajax') {
    $userForm = [
      'date' => isset($_POST["date"]) ? trim($_POST["date"]) : "",
      'executor' => isset($_POST["executor"]) ? trim($_POST["executor"]) : "",
      'title' => isset($_POST["title"]) ? trim($_POST["title"]) : "",
      'text' => isset($_POST["text"]) ? trim($_POST["text"]) : "",
      'date-no-limit' => !empty($_POST["date-no-limit"]) && $_POST["date-no-limit"] === "on" ? 1 : 0
    ];


    if (addTask($linkDB, $userForm)) {
      echo json_encode(["msgsType"=> "success", "textMsgs" => "Задача успешно добавлена!"]);
    } else {
      echo json_encode(["msgsType"=> "error", "textMsgs" => "Не удалось добавить задачу, проверьте форму!"]);
    }
  }
}
