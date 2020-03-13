<?php
require "../init.php";

header("Content-Type: application/json;");

if (!$isAuth) {
    echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы не авторизованны!"]);
    die;
}

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    if (isset($_GET["action"]) && isset($_GET["id"]) && isset($_GET["execute-task"])) {
      if ($_GET["execute-task"] === 'ajax' && $_GET["action"] === "execute") {
        if (executeTask($linkDB, $_GET["id"])) {
          echo json_encode(["msgsType"=> "success", "textMsgs" => "Задача выполнена!"]);
        } else {
          echo json_encode(["msgsType"=> "warning", "textMsgs" => "Такой задачи нету!"]);
        }
      }
    }
}