<?php
require "../init.php";

header("Content-Type: application/json;");

if (!$isAuth) {
  echo json_encode(["msgsType"=> "error", "textMsgs" => "Вы не авторизованны!"]);
  die;
}

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["all-users"])) {
  if ($_GET["all-users"] === 'ajax') {
      $allUsers = getUsers($linkDB);
      if (!empty($allUsers)) {
        echo json_encode($allUsers);
      } else {
        echo json_encode(["msgsType"=> "error", "textMsgs" => "Моих задач нету!"]);
      }
  }
}