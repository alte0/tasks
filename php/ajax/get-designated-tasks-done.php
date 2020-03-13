<?php
require "../init.php";

header("Content-Type: application/json;");

if (!$isAuth) {
  echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы не авторизованны!"]);
  die;
}

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["get-designated-task-done"])) {
  if ($_GET["get-designated-task-done"] === 'ajax') {
      $tasks = getMyDesignatedTasks($linkDB, $sqlDesignatedTaskComplete);
      if (!empty($tasks)) {
        echo json_encode($tasks);
      } else {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Поставленных задач нету!"]);
      }
  }
}