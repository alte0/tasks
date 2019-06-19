<?php
$DB_host = '127.0.0.1';
$DB_login = "root";
$DB_password = "";
$DB_name = "tasks-db";
$errors = [];

$mysqli = mysqli_connect( $DB_host, $DB_login, $DB_password, $DB_name);
if (!$mysqli) {
  $errorNumber = mysqli_connect_errno($mysqli);
  $errorText = mysqli_connect_error($mysqli);
  echo "Ошибка подключения к БД. " . $errorNumber . " " . $errorText;
  exit();
}
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
 * Показывает ошибки при заполнении формы.
 * @param $errors - массив с текстом ошибок в оррме.
 * @return void
 */
function showError($errors) {
  if (count($errors) > 0) {
    echo "<ul>";
    foreach ($errors as $key => $value) {
      echo "<li>";
      echo "$value";
      echo "</li>";
    }
    echo "</ul>";
  }
}
/**
 * Получение хешированного пароля.
 * @param $password - пароль
 * @return void
 */
function getHashPassword($password) {
  $hash = password_hash($password, PASSWORD_DEFAULT);
  return $hash;
}
/**
 * Проверяет стоответствует ли пароль хешу.
 * @param $password - пароль
 * @param $hash - хеш пароль
 * @return Boolean
 */
function checkHash($password, $hash) {
  $isVerify = password_verify($password, $hash);
  return $isVerify;
}
/**
 * Проверка пользователя в бд
 * @param $linkBd - соединение с mysql
 * @param $login - $login
 * @return void
 */
function checkLoginInDB($linkBd, $login) {
  $sql = "SELECT * FROM users WHERE login='$login'";
  if (!$query = mysqli_query($linkBd, $sql)) {
    return false;
  }
  $result = mysqli_fetch_assoc($query);
  return $result["login"] === $login;
}
/**
 * Проверка парроля пользователя в бд
 * @param $linkBd - соединение с mysql
 * @param $password - $password
 * @return void
 */
function checkPasswordInDB($linkBd, $password, $login) {
  $sql = "SELECT * FROM `users` WHERE login='$login'";
  if (!$query = mysqli_query($linkBd, $sql)) {
    return false;
  }
  $result = mysqli_fetch_assoc($query);
  return checkHash($password, $result["password"]);
}
/**
 * Регистрация пользователя
 * @param $linkBd - соединение с mysql
 * @param $post - $_POST
 * @return void
 */
function signup($linkBd, $post){
  $login = clearStr($post["login"]);
  $password = clearStr($post["password"]);
  $password2 = clearStr($post["password2"]);
  $name = clearStr($post["name"]);
  $surname = clearStr($post["surname"]);
  $patronymic = clearStr($post["patronymic"]);
  $minLengthText = 2;
  $minLengthPSW = 6;
  global $errors;
  $errors = [];

  if (mb_strlen($login) < $minLengthText) {
    $errors["login"] = "Логин неменьше $minLengthText символов.";
  }
  if (mb_strlen($password) < $minLengthPSW || mb_strlen($password2) < $minLengthPSW) {
    $errors["password"] = "Пароль неменьше $minLengthPSW символов.";
  }
  if (mb_strlen($name) < $minLengthText ) {
    $errors["name"] = "Имя неменьше $minLengthText символов.";
  }
  if (mb_strlen( $surname) < $minLengthText ) {
    $errors["surname"] = "Фамилия неменьше $minLengthText символов.";
  }
  if (mb_strlen( $patronymic) < $minLengthText ) {
    $errors["patronymic"] = "Отчество неменьше $minLengthText символов.";
  }
  
  if (count($errors) > 0) {
    return false;
  }

  if ($password !== $password2) {
    $errors["password"] = "Пароли не совпадают.";
    return false;
  }

  if (checkLoginInDB($linkBd, $login) === $login) {
    $errors["login"] = "Такой логин занят.";
    return false;
  }
  
  $hashPassword = getHashPassword($password);
  $sql = "INSERT INTO users (login, password, name, surname, patronymic) VALUES (?, ?, ?, ?, ?)";
  $stmt = mysqli_stmt_init($linkBd);
  if (!mysqli_stmt_prepare($stmt, $sql)) {
    $errors["mysqli"] = "Не удалось зарегистрировать.";
    return false;
  } else {
    mysqli_stmt_bind_param($stmt, "sssss", $login, $hashPassword, $name, $surname, $patronymic);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    return true;
  }
  return false;
}
/**
 * Авторизация пользователя
 * @param $linkBd - соединение с mysql
 * @param $post - $_POST
 * @return void
 */
function signin($linkBd, $post){
  $login = clearStr($post["login"]);
  $password = clearStr($post["password"]);
  $minLengthText = 2;
  $minLengthPSW = 6;
  global $errors;
  $errors = [];

  if (mb_strlen($post["login"]) < $minLengthText) {
    $errors["login"] = "Логин неменьше $minLengthText символов.";
  }
  if (mb_strlen($post[ "password"]) < $minLengthPSW) {
    $errors["password"] = "Пароль неменьше $minLengthPSW символов.";
  }

  if (count($errors) > 0) {
    return false;
  }

  if (checkLoginInDB($linkBd, $login) && checkPasswordInDB($linkBd, $password, $login)) {
    return true;
  }
  $errors["enter"] = "Неверный логин или пароль.";
  return false;
}