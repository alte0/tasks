<?php
require "../init.php";

header("Content-Type: application/json;");

checkAuth(!$isAuth, "Вы не авторизованны!");

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $allUsers = getUsers($linkDB);

    if (!empty($allUsers)) {
        echo json_encode($allUsers);
    } else {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Моих задач нету!"]);
    }
}
