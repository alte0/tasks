<?php
require "../init.php";

header("Content-Type: application/json;");

checkAuth(!$isAuth, "Вы не авторизованны!");

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $myTasks = getMyTasks($linkDB, $sqlMyTasksComplete);
    if (!empty($myTasks)) {
        echo json_encode($myTasks);
    } else {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Моих выполненых задач нету!"]);
    }
}
