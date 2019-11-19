<?php
require "../init.php";

header("Content-Type: application/json;");

if (!$isAuth) {
  echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы не авторизованны!"]);
  die;
}

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["id"]) && isset($_GET["task"])) {
  if ($_GET["task"] === 'ajax') {
      $task = getTask($linkDB, $sqlTask, $_GET["id"]);
      if (!empty($task)) {
        echo json_encode($task);
      } else {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Такой задачи нету!"]);
      }
  }
}