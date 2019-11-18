<?php
require "../init.php";

header("Content-Type: application/json;");

if ($isAuth) {
  echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы уже зарегистрированны!"]);
  die;
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["signup"])) {
  if ($_POST["signup"] === 'ajax') {
    $textMsgs = "";
    $nameFieds = [
      'login' => "Ваш логин",
      'password' => "Пароль",
      'password2' => "Повторите пароль",
      'name' => "Имя",
      'surname' => "Фамилия",
      'patronymic' => "Отчество"
    ];

    $user = [
      'login' => !empty(trim($_POST["login"])) ? trim($_POST["login"]) : "",
      'password' => !empty(trim($_POST["password"])) ? trim($_POST["password"]) : "",
      'password2' => !empty(trim($_POST["password2"])) ? trim($_POST["password2"]) : "",
      'name' => !empty(trim($_POST["name"])) ? trim($_POST["name"]) : "",
      'surname' => !empty(trim($_POST["surname"])) ? trim($_POST["surname"]) : "",
      'patronymic' => !empty(trim($_POST["patronymic"])) ? trim($_POST["patronymic"]) : ""
    ];

    if (addUser($linkDB, $sqlAddUser, $user)) {
      echo json_encode(["msgsType"=> "success", "textMsgs" => "Вы зарегистрировались!"]);
    } else {
      if (!count($errorsForm)) {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Не удалось добавить данные, попробуйте еще раз!"]);
      } else {
        foreach ($errorsForm as $key => $value) {
          $textMsgs = $textMsgs . "Поле: {$nameFieds[$key]} - $value" . "<br>";
        }

        echo json_encode(["msgsType"=> "error", "textMsgs" => $textMsgs]);
      }
    }
  }
}