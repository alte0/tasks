<?php
require "../init.php";

header("Content-Type: application/json;");

checkAuth(!$isAuth, "Вы не авторизованны!");

if (isset($_GET["search-field"]) && !empty($_GET["search-field"])) {
    $searchText = trim($_GET["search-field"]);
    $tasks = getTasksSearch($linkDB, $sqlTasksSearch, [$searchText]);

    if (!empty($tasks)) {
        echo json_encode($tasks);
    } else {
        echo json_encode(["msgsType"=> "warning", "textMsgs" => "Не найдено!"]);
    }
} else {
    echo json_encode(["msgsType"=> "warning", "textMsgs" => "Пустой запрос!"]);
}
