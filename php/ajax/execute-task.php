<?php
require "../init.php";

header("Content-Type: application/json;");

if (!$isAuth) {
    echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы не авторизованны!"]);
    die;
}

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    if (isset($_GET["action"]) && $_GET["action"] === "execute" && isset($_GET["id"])) {
        if (executeTask($linkDB, $_GET["id"])) {
          echo json_encode(["msgsType"=> "success", "textMsgs" => "Задача выполнена!"]);
        } else {
          echo json_encode(["msgsType"=> "warning", "textMsgs" => "Такой задачи нету!"]);
        }
    }
}
