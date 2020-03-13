<?php
require "../init.php";

header("Content-Type: application/json;");

if (!$isAuth) {
  echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы не авторизованны!"]);
  die;
}

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["my-tasks-done"])) {
  if ($_GET["my-tasks-done"] === 'ajax') {
      $myTasks = getMyTasks($linkDB, $sqlMyTasksComplete);
      if (!empty($myTasks)) {
        echo json_encode($myTasks);
      } else {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Моих выполненых задач нету!"]);
      }
  }
}
