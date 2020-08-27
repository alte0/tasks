<?php
require "../init.php";

header("Content-Type: application/json;");

checkAuth(!$isAuth, "Вы не авторизованны! Зачем Вам выходить О_О!?");

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    if (isset($_GET["action"]) && $_GET["action"] === 'exit') {
        $_SESSION = [];
        setcookie(session_name(), "", time() - 3600);
        setcookie("userInfo", "", time() - 3600);
        session_destroy();
        echo json_encode(["msgsType"=> "success", "textMsgs" => "Вы вышли!"]);
    }
}
