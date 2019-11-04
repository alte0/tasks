<?php
require "../init.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  if ($_POST["add-task"] === 'ajax') {
    $userForm = [
      'date' => isset($_POST["date"]) ? trim($_POST["date"]) : "",
      'executor' => isset($_POST["executor"]) ? trim($_POST["executor"]) : "",
      'title' => isset($_POST["title"]) ? trim($_POST["title"]) : "",
      'text' => isset($_POST["text"]) ? trim($_POST["text"]) : "",
    ];

    header("Content-Type: application/json;");

    if (addTask($linkDB, $userForm)) {
      echo json_encode(["msgsType"=> "success", "textMsgs" => "Задача успешно добавлена!"]);
    } else {
      echo json_encode(["msgsType"=> "error", "textMsgs" => "Не удалось добавить задачу, проверьте форму!"]);
    }
  }
}