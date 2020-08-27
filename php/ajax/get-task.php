<?php
require "../init.php";

header("Content-Type: application/json;");

checkAuth(!$isAuth, "Вы не авторизованны!");

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["id"])) {
    $task = getTask($linkDB, $sqlTask, $_GET["id"]);

    if (!empty($task)) {
        echo json_encode($task);
    } else {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Такой задачи нету!"]);
    }
}
