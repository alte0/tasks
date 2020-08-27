<?php
require "../init.php";

header("Content-Type: application/json;");

checkAuth($isAuth, "Вы уже авторизованны!");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user = [
      'login' => !empty(trim($_POST["login"])) ? trim($_POST["login"]) : "",
      'password' => !empty(trim($_POST["password"])) ? trim($_POST["password"]) : "",
    ];

    if (checkUserInDB($linkDB, $user, true)) {
      echo json_encode(["msgsType"=> "success", "textMsgs" => "Вы авторизовались!"]);
    } else {
      echo json_encode(["msgsType"=> "error", "textMsgs" => "Не верный логин или пароль, проверьте форму!"]);
    }
}
