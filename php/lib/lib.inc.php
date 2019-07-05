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
$tasks = [];
$userInfo = [];
$userAll = [];
// $_SESSION["msgs"] = ["textMsgs" => [], "msgsType" => ""];
$msgs = ["textMsgs"=> [], "msgsType" => ""];
// $msgs = $_SESSION["msgs"];

$dbcon = mysqli_connect($DB_host, $DB_login, $DB_password, $DB_name);
mysqli_set_charset($dbcon, "utf-8");
if (!$dbcon) {
  $errorNumber = mysqli_connect_errno($dbcon);
  $errorText = mysqli_connect_error($dbcon);
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
 * @param string $value
 * @return string
 */
function clearStr($value) {
  global $dbcon;
  $clearValue = trim(strip_tags($value));
  return mysqli_real_escape_string($dbcon, $clearValue);
}
/**
 * Очистка введены данных(ожидаем цифру).
 * @param string $value
 * @return string
 */
function clearInt($value) {
  return abs((int)$value);
}
/**
 * Показывает ошибки при заполнении формы.
 * @param array $msgs - массив с текстом ошибок в оррме.
 */
function showMsgs($msgs) {
  
  if (is_array($msgs["textMsgs"]) && count($msgs["textMsgs"])) {
    
    switch ($msgs["msgsType"]) {
      case 'success':
      $class = "msgs-list__item_success";
      break;
      case 'error':
      $class = "msgs-list__item_error";
      break;
    }
    
    $arr = $msgs["textMsgs"];
    
    echo "<ul class='msgs-list $class'>";
    foreach ($arr as $key => $value) {
      echo "<li class=msgs-list__item>";
      echo "$value";
      echo "</li>";
    }
    echo "</ul>";
  }
}
/**
 * Установка собщения с типами "error" "success".
 * @param string $textMsgs - текст сообшения.
 * @param string $typeMsgs - тип сообшения.
 */
function setMsgs(string $textMsgs, string $typeMsgs) {
  global $msgs;

  // $_SESSION["msgs"]["textMsgs"][] = $textMsgs;
  // $_SESSION["msgs"]["msgsType"] = $typeMsgs;
  $msgs["textMsgs"][] = $textMsgs;
  $msgs["msgsType"] = $typeMsgs;
}
/**
 * Очистка массива сообщений.
 */
function clearMsgs() {
  $_SESSION["msgs"]["textMsgs"] = [];
  $_SESSION["msgs"]["msgsType"] = "";
}
/**
 * Получение хешированного пароля.
 * @param string $password - пароль
 */
function getHashPassword($password) {
  $hash = password_hash($password, PASSWORD_DEFAULT);
  return $hash;
}
/**
 * Проверяет стоответствует ли пароль хешу.
 * @param string $password - пароль
 * @param string $hash - хеш пароль
 * @return boolean
 */
function checkHash($password, $hash) {
  $isVerify = password_verify($password, $hash);
  return $isVerify;
}
/**
 * Проверка пользователя в бд
 * @param resource $linkBd - соединение с mysql
 * @param array $user - массив с данными = ["login"=> "login","password"=> "password"]
 * @param boolean $isPwd - Признак надо ли на проверку пароль.
 * @return boolean
 */
function checkUserInDB($linkBd, $user, $isPwd = false) {
  $login = $user["login"];
  $password = $user["password"];
  global $userInfo;
  
  $sql = "SELECT * FROM `users` WHERE `user_login`='$login'";
  if (!$query = mysqli_query($linkBd, $sql)) {
    setMsgs("Не удалось выполнить запрос.", "error");
    return false;
  }
  $result = mysqli_fetch_assoc($query);

  if ($isPwd) {
    if (checkHash($password, $result["user_password"]) && $result["user_login"] === $login) {
      $userInfo["login"] = $result["user_login"];
      $userInfo["id"] = $result["user_id"];
      $userInfo["name"] = $result["user_name"];
      $userInfo["surname"] = $result["user_surname"];
      $userInfo["patronymic"] = $result["user_patronymic"];
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
 * @param string $login - login
 * @return boolean
 */
function validLogin ($login){
  $lengthLogin = mb_strlen($login);
  if ($lengthLogin < MIN_LENGTH_TEXT || $lengthLogin > MAX_LENGTH_TEXT) {
    setMsgs("Логин от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.", "error");
    return false;
  } elseif (!preg_match(REGEX_USER_LOGIN, $login)) {
    setMsgs("Логин от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов. Латинские буквы и цифры, символы: '_', '-' и первый символ обязательно буква", "error");
    return false;
  } else {
    return true;
  }

  return false;
}
/**
 * Валидация введеного пароля
 * @param string $login - login
 * @return boolean
 */
function validPwd($password) {
  $lengthPassword = mb_strlen($password);
  if ($lengthPassword < MIN_LENGTH_PWD || $lengthPassword > MAX_LENGTH_PWD) {
    setMsgs("Пароль от " . MIN_LENGTH_PWD . " до " . MAX_LENGTH_PWD . " символов.", "error");
    return false;
  } elseif (!preg_match(REGEX_USER_PSW, $password)) {
    setMsgs("Пароль от " . MIN_LENGTH_PWD . " до " . MAX_LENGTH_PWD . " символов. Строчные и прописные латинские буквы, цифры, спецсимволы.", "error");
    return false;
  } else {
    return true;
  }

  return false;
}
/**
 * Валидация введеного имени
 * @param string $name - name
 * @return boolean
 */
function validName($name) {
  $lengthName = mb_strlen($name);
  if ($lengthName < MIN_LENGTH_TEXT || $lengthName > MAX_LENGTH_TEXT) {
    setMsgs("Имя от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.", "error");
    return false;
  }
  
  return true;
}
/**
 * Валидация введеного фамилии
 * @param string $surname - surname
 * @return boolean
 */
function validSurname($surname) {
  $lengthSurname = mb_strlen($surname);
  if ($lengthSurname < MIN_LENGTH_TEXT || $lengthSurname > MAX_LENGTH_TEXT) {
    setMsgs("Фамилия от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.", "error");
    return false;
  }
  
  return true;
}
/**
 * Валидация введеного отчества
 * @param string $surname - surname
 * @return boolean
 */
function validPatronymic($patronymic) {
  $lengthPatronymic = mb_strlen($patronymic);
  if ($lengthPatronymic < MIN_LENGTH_TEXT || $lengthPatronymic > MAX_LENGTH_TEXT) {
    setMsgs("Отчество от " . MIN_LENGTH_TEXT . " до " . MAX_LENGTH_TEXT . " символов.", "error");
    return false;
  }
  
  return true;
}
/**
 * Валидация введенных паролей
 * @param string $surname - surname
 * @return boolean
 */
function equalPwds($password, $password2) {
  if ($password !== $password2) {
    setMsgs("Пароли не совпадают.", "error");
    return false;
  }
  
  return true;
}
/**
 * Регистрация пользователя
 * @param resource $linkBd - соединение с mysql
 * @param array $post - $_POST
 * @return boolean
 */
function signup($linkBd, $post){
  $login = clearStr($post["login"]);
  $password = clearStr($post["password"]);
  $password2 = clearStr($post["password2"]);
  $name = clearStr($post["name"]);
  $surname = clearStr($post["surname"]);
  $patronymic = clearStr($post["patronymic"]);
  $user = [];

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
    setMsgs("Такой логин занят.", "error");
    return false;
  }

  $hashPassword = getHashPassword($password);
  $sql = "INSERT INTO users (user_login, user_password, user_name, user_surname, user_patronymic) VALUES (?, ?, ?, ?, ?)";
  $stmt = mysqli_stmt_init($linkBd);
  if (!mysqli_stmt_prepare($stmt, $sql)) {
    setMsgs("Не удалось зарегистрировать.", "error");
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
 * @param resource $linkBd - соединение с mysql
 * @param array - $_POST
 * @return boolean
 */
function signin($linkBd, $post){
  $login = clearStr($post["login"]);
  $password = clearStr($post["password"]);

  if (!(validLogin($login) && validPwd($password))) {
    return false;
  }

  $userKeys = ["login", "password"];
  $userValues = [$login, $password];
  $user = array_combine($userKeys, $userValues);
  
  if (checkUserInDB($linkBd, $user, true)) {
    return true;
  }
  setMsgs("Неверный логин или пароль.", "error");
  return false;
}
/**
 * Преобразовывает введеную дату пользователя в дату для mysql
 * @param string $date
 */
function transformsDate($date) {
  $arrDate = date_parse($date);
  return "{$arrDate["year"]}.{$arrDate["month"]}.{$arrDate["day"]}";
}
/**
 * Получение задач для пользователя
 *
 * @param resource $linkBd
 * @param array - $_POST
 * @return array 
 */
function addTask($linkBd, $post) {
  $authorId = $_SESSION['userInfo']['id'];
  $executorId = clearStr($post["executor"]);
  $date = clearStr($post["date"]);
  $title = clearStr($post["title"]);
  $text = clearStr($post["text"]);
  $status = "в работе!";
  $dateStart = null;
  $dateEnd = null;
  
  $dates = explode(" — ", $date);

  if (count($dates) === 2) {
    $dateStart = transformsDate($dates[0]);
    $dateEnd = transformsDate($dates[1]);
  } else {
    $dateStart = transformsDate($dates[0]);
    $dateEnd = $dateStart;
  }
  if (!$linkBd) {
    setMsgs("Не удалось выполнить запрос.", "error");
  }

  mysqli_query($linkBd, "START TRANSACTION");
  $resutTask = mysqli_query($linkBd, "INSERT INTO `tasks`(`task_title`, `task_desc`, `task_status`, `task_date_start`, `task_date_end`) VALUES('$title', '$text', '$status', '$dateStart', '$dateEnd')");
  $idTask = mysqli_insert_id($linkBd);
  $resutAuthor = mysqli_query($linkBd, "INSERT INTO tasks_author (user_id, task_id) VALUES('$authorId', '$idTask')");
  $resutExecutor = mysqli_query($linkBd, "INSERT INTO tasks_executor (user_id, task_id) VALUES('$executorId', '$idTask')");

  if ($resutTask && $resutAuthor && $resutExecutor) {
    mysqli_query($linkBd, "COMMIT");
    setMsgs("Задача добавлена.", "success");
    return true;
  } else {
    mysqli_query($linkBd, "ROLLBACK");
    setMsgs("Не удалось добавить задачу.", "error");
    return false;
  }
}
/**
 * Получение задач для пользователя
 * @param resource $linkBd
 * @return array 
 */
function getTasks($linkBd) {
  if (!$linkBd) {
    setMsgs("Не удалось выполнить запрос.", "error");
  }

  $sql = "SELECT 
  userAuthor.user_name AS author_name, 
  userAuthor.user_surname AS author_surname, 
  userAuthor.user_patronymic AS author_patronymic, 
  t.task_id, t.task_title, t.task_desc, t.task_status, DATE_FORMAT(t.task_date_start, '%d.%m.%Y') AS task_date_start, DATE_FORMAT(t.task_date_end, '%d.%m.%Y') AS task_date_end, 
  userExecutor.user_name AS executor_name, 
  userExecutor.user_surname AS executor_surname, 
  userExecutor.user_patronymic AS executor_patronymic
  FROM tasks AS t 
  JOIN tasks_author ON t.task_id = tasks_author.task_id 
  JOIN users AS userAuthor ON tasks_author.user_id = userAuthor.user_id 
  JOIN tasks_executor ON t.task_id = tasks_executor.task_id 
  JOIN users AS userExecutor ON tasks_executor.user_id = userExecutor.user_id";

  if (!$query = mysqli_query($linkBd, $sql)) {
    setMsgs("Не удалось выполнить запрос.", "error");
    return [];
  }
  $resut = mysqli_fetch_all($query, MYSQLI_ASSOC);
  return $resut;
}
/**
 * Получение всех пользователей
 *
 * @param resource $linkBd
 * @return array 
 */
function getUsers($linkBd) {
  if (!$linkBd) {
    setMsgs("Не удалось выполнить запрос.", "error");
  }
  $sql = "SELECT `user_id`,`user_login`,`user_name`,`user_surname`,`user_patronymic` FROM `users`";
  if (!$query = mysqli_query($linkBd, $sql)) {
    setMsgs("Не удалось выполнить запрос.", "error");
    return [];
  }
  $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
  return $result;
}
/**
 * Выполнение задачи
 * @param int - $id 
 */
function executeTask($id) {
  $job = "Выполнено!";
  $idTask = clearInt($id);
  global $dbcon;
  
  if (!$dbcon) {
    setMsgs("Не удалось выполнить запрос.", "error");
  }

  $sql = "UPDATE `tasks` SET `task_status`='$job' WHERE `task_id`=$idTask";
  if (!mysqli_query($dbcon, $sql)) {
    setMsgs("Не удалось выполнить задачу.", "error");
  }
}