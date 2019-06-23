<?php
require __DIR__ . "/../config/db.php";

const REGEX_USER_LOGIN = "/^[a-zA-Z][a-zA-Z0-9-_]{1,20}$/";
const REGEX_USER_PSW = "/(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/";
// const REGEX_USER_EMAIL = "/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,12}$/";
const MIN_LENGTH_TEXT = 2;
const MAX_LENGTH_TEXT = 20;
const MIN_LENGTH_PWD = 6;
const MAX_LENGTH_PWD = 20;
$mainText = "Tasks -";
$signup = false;
$errors = [];

$mysqli = mysqli_connect($DB_host, $DB_login, $DB_password, $DB_name);
mysqli_set_charset($mysqli, "utf-8");
if (!$mysqli) {
  $errorNumber = mysqli_connect_errno($mysqli);
  $errorText = mysqli_connect_error($mysqli);
  echo "Ошибка подключения к БД. $errorNumber - $errorText";
  exit;
}
/**
 * Подключает шаблон, передает туда данные и возвращает итоговый HTML контент
 * @param string $name Путь к файлу шаблона относительно папки templates
 * @param array $data Ассоциативный массив с данными для шаблона
 * @return string Итоговый HTML
 */
function include_template($nameTemplate, array $data = []) {
  $pathTemplate = "templates/$nameTemplate.php";
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
 * Очистка введены данных в форме.
 * @param $value
 * @return string
 */
function clearStr($data) {
  global $mysqli;
  $data = trim(strip_tags($data));
  return mysqli_real_escape_string($mysqli, $data);
}
/**
 * Показывает ошибки при заполнении формы.
 * @param $errors - массив с текстом ошибок в оррме.
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
 */
function getHashPassword($password) {
  $hash = password_hash($password, PASSWORD_DEFAULT);
  return $hash;
}
/**
 * Проверяет стоответствует ли пароль хешу.
 * @param $password - пароль
 * @param $hash - хеш пароль
 * @return boolean
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
 * @return boolean
 */
function checkUserInDB($linkBd, $user, $isPwd = false) {
  $login = $user["login"];
  $password = $user["password"];
  global $errors;
  
  $sql = "SELECT * FROM `users` WHERE login='$login'";
  if (!$query = mysqli_query($linkBd, $sql)) {
    $errors["mysqli"] = "Не удалось выполнить запрос.";
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
 * Валидация введеного логина
 * @param $login - login
 * @return boolean
 */
function validLogin ($login){
  global $errors;

  $lengthLogin = mb_strlen($login);
  if ($lengthLogin < MIN_LENGTH_TEXT || $lengthLogin > MAX_LENGTH_TEXT) {
    $errors["login"] = "Логин от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.";
    return false;
  } elseif (!preg_match(REGEX_USER_LOGIN, $login)) {
    $errors["login"] = "Логин от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов. Латинские буквы и цифры, символы: '_', '-' и первый символ обязательно буква";
    return false;
  } else {
    return true;
  }

  return false;
}
/**
 * Валидация введеного пароля
 * @param $login - login
 * @return boolean
 */
function validPwd($password) {
  global $errors;

  $lengthPassword = mb_strlen($password);
  if ($lengthPassword < MIN_LENGTH_PWD || $lengthPassword > MAX_LENGTH_PWD) {
    $errors["password"] = "Пароль от " . MIN_LENGTH_PWD . " до " . MAX_LENGTH_PWD . " символов.";
    return false;
  } elseif (!preg_match(REGEX_USER_PSW, $password)) {
    $errors["password"] = "Пароль от " . MIN_LENGTH_PWD . " до " . MAX_LENGTH_PWD . " символов. Строчные и прописные латинские буквы, цифры, спецсимволы.";
    return false;
  } else {
    return true;
  }

  return false;
}
/**
 * Валидация введеного имени
 * @param $name - name
 * @return boolean
 */
function validName($name) {
  global $errors;

  $lengthName = mb_strlen($name);
  if ($lengthName < MIN_LENGTH_TEXT || $lengthName > MAX_LENGTH_TEXT) {
    $errors["name"] = "Имя от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.";
    return false;
  }
  
  return true;
}
/**
 * Валидация введеного фамилии
 * @param $surname - surname
 * @return boolean
 */
function validSurname($surname) {
  global $errors;

  $lengthSurname = mb_strlen($surname);
  if ($lengthSurname < MIN_LENGTH_TEXT || $lengthSurname > MAX_LENGTH_TEXT) {
    $errors["surname"] = "Фамилия от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.";
    return false;
  }
  
  return true;
}
/**
 * Валидация введеного отчества
 * @param $surname - surname
 * @return boolean
 */
function validPatronymic($patronymic) {
  global $errors;

  $lengthPatronymic = mb_strlen($patronymic);
  if ($lengthPatronymic < MIN_LENGTH_TEXT || $lengthPatronymic > MAX_LENGTH_TEXT) {
    $errors["patronymic"] = "Отчество от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.";
    return false;
  }
  
  return true;
}
/**
 * Валидация введенных паролей
 * @param $surname - surname
 * @return boolean
 */
function equalPwds($password, $password2) {
  global $errors;

  if ($password !== $password2) {
    $errors["password"] = "Пароли не совпадают.";
    return false;
  }
  
  return true;
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

  if (!(
    validName($name) && validSurName($surname) &&
    validPatronymic($patronymic) && validLogin($login) && 
    validPwd($password) && validPwd($password2) && 
    equalPwds($password, $password2)
    )) {
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

  if (!(validLogin($login) && validPwd($password))) {
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