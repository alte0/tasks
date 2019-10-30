<?php
session_start();

$dbConf = require "config/db.php";
require "config/php-ini.php";
require "helpers.php";

const MIN_LENGTH_TEXT = 2;
const MAX_LENGTH_TEXT = 20;
const MIN_LENGTH_PWD = 6;
const MAX_LENGTH_PWD = 20;
const REGEX_USER_LOGIN = "/^[a-zA-Z][a-zA-Z0-9-_]{1,20}$/";
const REGEX_USER_PSW = "/(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/";

$isAuth = false;
$mainText = "Tasks -";
$user = null;
$users = null;
$bgClass = null;
$today = date("d.m.Y");
$errorsForm = [];
$passwordSalt = "1s@d";
$userInfo = [];

$dsn = "mysql:dbname={$dbConf["nameDB"]};host={$dbConf["urlDB"]};charset=UTF8";
$user = $dbConf["userDB"];
$password = $dbConf["passwordDB"];
$optionDB = [
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
$linkDB = new PDO($dsn, $user, $password, $optionDB);

if (!$linkDB) {
  $error = "Невозможно подключиться к MySQL " . $e->getMessage();
  $content = include_template('error', [
    "error" => $error
  ]);
  $layout = include_template('layout', [
    'title' => "$mainText Ошибка",
    'bgClass' => $bgClass,
    'content' => $content
  ]);

  print($layout);
  die;
}

if (isset($_SESSION['userInfo'])) {
  // $isAuth = true;
  $user = "{$_SESSION['userInfo']['surname']} {$_SESSION['userInfo']['name']} {$_SESSION['userInfo']['patronymic']}";
  $bgClass = "class=\"bg\"";
  // $users = getUsers($dbcon);
}