<?php
require "../init.php";

header("Content-Type: application/json;");

if (!$isAuth) {
    echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы не авторизованны! Зачем Вам выходить О_О!?"]);
    die;
}

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    if (isset($_GET["action"]) && isset($_GET["logout"])) {
      if ($_GET["logout"] === 'ajax' && $_GET["action"] === "exit") {
        unset($_SESSION["userInfo"]);
        echo json_encode(["msgsType"=> "success", "textMsgs" => "Вы вышли!"]);
      }
    }
}