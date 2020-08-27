<?php
require "../init.php";

header("Content-Type: application/json;");

checkAuth(!$isAuth, "Вы не авторизованны!");

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $tasks = getMyDesignatedTasks($linkDB, $sqlDesignatedTask);

    if (!empty($tasks)) {
        echo json_encode($tasks);
    } else {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Поставленных задач нету!"]);
    }
}
