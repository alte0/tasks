<?php
const REGEX_USER_LOGIN = "/^[a-zA-Z][a-zA-Z0-9-_]{1,20}$/";
const REGEX_USER_PSW = "/(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/";
// const REGEX_USER_EMAIL = "/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,12}$/";
const MIN_LENGTH_TEXT = 2;
const MAX_LENGTH_TEXT = 20;
const MIN_LENGTH_PWD = 6;
const MAX_LENGTH_PWD = 20;
$signup = false;
$DB_host = '127.0.0.1';
$DB_login = "root";
$DB_password = "";
$DB_name = "tasks-db";
$errors = [];

$mysqli = mysqli_connect($DB_host, $DB_login, $DB_password, $DB_name);
if (!$mysqli) {
  $errorNumber = mysqli_connect_errno($mysqli);
  $errorText = mysqli_connect_error($mysqli);
  echo "Ошибка подключения к БД. $errorNumber $errorText";
  exit();
}
/**
 * Подключает шаблон, передает туда данные и возвращает итоговый HTML контент
 * @param string $name Путь к файлу шаблона относительно папки templates
 * @param array $data Ассоциативный массив с данными для шаблона
 * @return string Итоговый HTML
 */
function include_template($nameTemplate, array $data = []) {
  $pathTemplate = "templates/$nameTemplate";
  $result = "";
  if (!is_readable($pathTemplate)) {
    return $result;
  }
  ob_start();
  extract($data);
  require $pathTemplate;
  $result = ob_get_clean();
  return $result;
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
  if (is_array($errors) && count($errors)) {
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
 * @param $user - массив с данными = ["login"=> "login","password"=> "password"]
 * @param $isPwd - Признак надо ли на проверку пароль.
 * @return void
 */
function checkUserInDB($linkBd, $user, $isPwd = false) {
  $login = $user["login"];
  $password = $user["password"];
  
  $sql = "SELECT * FROM `users` WHERE login='$login'";
  if (!$query = mysqli_query($linkBd, $sql)) {
    return false;
  }
  $result = mysqli_fetch_assoc($query);

  if ($isPwd) {
    if (checkHash($password, $result["password"]) && $result["login"] === $login) {
      return true;
    }

    return false;
  } else {
    return !($result["login"] === $login);
  }

  return false;
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
  $user = [];
  global $errors;
  
  $errors = [];
  $lengthLogin = mb_strlen($post["login"]);
  $lengthPassword = mb_strlen($post["password"]);
  $lengthPassword2 = mb_strlen($post["password"]);
  $lengthName = mb_strlen($post["name"]);
  $lengthSurname = mb_strlen($post["surname"]);
  $lengthPatronymic = mb_strlen($post["patronymic"]);

  if ($lengthLogin < MIN_LENGTH_TEXT || $lengthLogin > MAX_LENGTH_TEXT) {
    $errors["login"] = "Логин от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.";
  }

  if ($lengthPassword < MIN_LENGTH_PWD 
    || $lengthPassword2 < MIN_LENGTH_PWD 
    || $lengthPassword > MAX_LENGTH_PWD 
    || $lengthPassword2 > MAX_LENGTH_PWD) {
    $errors["password"] = "Пароль от " . MIN_LENGTH_PWD . " до " . MAX_LENGTH_PWD . " символов.";
  }

  if ($lengthName < MIN_LENGTH_TEXT || $lengthName > MAX_LENGTH_TEXT) {
    $errors["name"] = "Имя от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.";
  }

  if ($lengthSurname < MIN_LENGTH_TEXT || $lengthSurname > MAX_LENGTH_TEXT) {
    $errors["surname"] = "Фамилия от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.";
  }

  if ($lengthPatronymic < MIN_LENGTH_TEXT || $lengthPatronymic > MAX_LENGTH_TEXT) {
    $errors["patronymic"] = "Отчество от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.";
  }

  if (!preg_match(REGEX_USER_LOGIN, $login)) {
    $errors["login"] = "Логин от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов. Латинские буквы и цифры, символы: '_', '-' и первый символ обязательно буква";
  }

  if (!preg_match(REGEX_USER_PSW, $password)) {
    $errors["password"] = "Пароль от " . MIN_LENGTH_PWD . " до " . MAX_LENGTH_PWD . " символов. Строчные и прописные латинские буквы, цифры, спецсимволы.";
  }
  
  if ($password !== $password2) {
    $errors["password"] = "Пароли не совпадают.";
  }
  
  if (count($errors) > 0) {
    return false;
  }

  $user["login"] = $login;
  $user["password"] = $password;
  if (!checkUserInDB($linkBd, $user)) {
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
  $user = [];
  global $errors;

  $errors = [];
  $lengthLogin = mb_strlen($post["login"]);
  $lengthPassword = mb_strlen($post["password"]);

  if ($lengthLogin < MIN_LENGTH_TEXT || $lengthLogin > MAX_LENGTH_TEXT) {
    $errors["login"] = "Логин от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.";
  }
  if ( $lengthPassword < MIN_LENGTH_PWD || $lengthPassword > MAX_LENGTH_PWD) {
    $errors["password"] = "Пароль от " . MIN_LENGTH_PWD . " до " . MAX_LENGTH_PWD . " символов.";
  }

  if (count($errors) > 0) {
    return false;
  }

  $user["login"] = $login;
  $user["password"] = $password;
  if (checkUserInDB($linkBd, $user, true)) {
    return true;
  }
  $errors["enter"] = "Неверный логин или пароль.";
  return false;
}