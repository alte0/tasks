<?php
require "../init.php";

header("Content-Type: application/json;");

if (!$isAuth) {
  echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы не авторизованны!"]);
  die;
}

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["get-designated-task"])) {
  if ($_GET["get-designated-task"] === 'ajax') {
      $tasks = getMyDesignatedTasks($linkDB, $sqlDesignatedTask);
      if (!empty($tasks)) {
        echo json_encode($tasks);
      } else {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Поставленных задач нету!"]);
      }
  }
}