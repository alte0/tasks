<?php
require "../init.php";

if ($isAuth) {
  echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы уже авторизованны!"]);
  die;
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["signin"])) {
  if ($_POST["signin"] === 'ajax') {
    $user = [
      'login' => !empty(trim($_POST["login"])) ? trim($_POST["login"]) : "",
      'password' => !empty(trim($_POST["password"])) ? trim($_POST["password"]) : "",
    ];

    header("Content-Type: application/json;");

    if (checkUserInDB($linkDB, $user, true)) {
      echo json_encode(["msgsType"=> "success", "textMsgs" => "Вы авторизовались!"]);
    } else {
      echo json_encode(["msgsType"=> "error", "textMsgs" => "Не верный логин или пароль, проверьте форму!"]);
    }
  }
}