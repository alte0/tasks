<?php
$DB_host = '127.0.0.1';
$DB_login = "root";
$DB_password = "";
$DB_name = "tasks-db";

$mysqli = mysqli_connect( $DB_host, $DB_login, $DB_password, $DB_name);
if (!$mysqli) {
  $errorNumber = mysqli_connect_errno($mysqli);
  $errorText = mysqli_connect_error($mysqli);
  echo "Ошибка подключения к БД. " . $errorNumber . " " . $errorText;
  exit();
}
// $sqlSigin = "INSERT INTO `users`(`login`, `password`, `name`, `surname`, `patronymic`) VALUES (?,?,?,?,?)";
/**
 * Очистка данных.
 * @param $value
 * @return String
 */
function clearStr($data) {
  global $mysqli;
  $data = trim(strip_tags($data));
  return mysqli_real_escape_string($mysqli, $data);
}
/**
 * Проверка пользователя в бд
 * @param $linkBd - соединение с mysql
 * @param $post - $login
 * @return void
 */
function checkLoginInDB($linkBd, $login) {
  $sql = "SELECT * FROM users WHERE login='$login'";
  if (!$query = mysqli_query($linkBd, $sql)) {
    return false;
  }
  $result = mysqli_fetch_assoc($query);
  return $result["login"];
  // $sql = "SELECT * FROM `users` WHERE login=?";
  // $stmt = mysqli_prepare($linkBd, $sql);
  // if ($stmt = mysqli_prepare($linkBd, $sql)) {
  //   mysqli_stmt_bind_param($stmt, "s", $login);
  //   mysqli_stmt_execute($stmt);
  //   // mysqli_stmt_bind_result($stmt, $result);
  //   // mysqli_stmt_fetch($stmt);
  //   mysqli_stmt_close($stmt);
  //   var_dump($result);
  //   return $result['login'];
  // }
  // var_dump( $sql);
}
function checkPasswordInDB($linkBd, $password) {
  $sql = "SELECT * FROM `users` WHERE password='$password'";
  if (!$query = mysqli_query($linkBd, $sql)) {
    return false;
  }
  $result = mysqli_fetch_assoc($query);
  return $result["password"];
}
/**
 * Регистрация пользователя
 * @param $linkBd - соединение с mysql
 * @param $post - $_POST
 * @return void
 */
function signin($linkBd, $post){
  $login = clearStr($post["login"]);
  $password = clearStr($post["password"]);
  $password2 = clearStr($post["password2"]);
  $name = clearStr($post["name"]);
  $surname = clearStr($post["surname"]);
  $patronymic = clearStr($post["patronymic"]);
  checkLoginInDB($linkBd, $login);
}
/**
 * Авторизация пользователя
 * @param $linkBd - соединение с mysql
 * @param $post - $_POST
 * @return void
 */
function signup($linkBd, $post){
  if (!empty( $post["login"]) && !empty($post["password"])) {
    $login = clearStr($post["login"]);
    $password = clearStr($post["password"]);
    if (checkLoginInDB($linkBd, $login) === $login && checkPasswordInDB($linkBd, $password) === $password) {
      return true;
    }
  }
  return false;
}