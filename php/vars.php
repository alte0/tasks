<?php
const MIN_LENGTH_TEXT = 2;
const MAX_LENGTH_TEXT = 20;
const MIN_LENGTH_PWD = 6;
const MAX_LENGTH_PWD = 20;
const REGEX_USER_LOGIN = "/^[a-zA-Z][a-zA-Z0-9-_]{1,20}$/";
const REGEX_USER_PSW = "/(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/";

$userDb = $dbConf["userDB"];
$password = $dbConf["passwordDB"];
$dsn = "mysql:dbname={$dbConf["nameDB"]};host={$dbConf["urlDB"]};charset=UTF8";
$isAuth = isset($_SESSION['userInfo']) ? true : false;
$mainText = "Tasks -";
$user = isset($_SESSION['userInfo']) ? "{$_SESSION['userInfo']['surname']} {$_SESSION['userInfo']['name']} {$_SESSION['userInfo']['patronymic']}" : null;
$userId = isset($_SESSION['userInfo']) ? $_SESSION['userInfo']['id'] : null;
$users = null;
$bgClass = isset($_SESSION['userInfo']) ? "class=\"bg\"" : null;
$today = date("d.m.Y");
$errorsForm = [];
$passwordSalt = "1s@d";
$userInfo = [];
$pageItems = 10;
$optionDB = [
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
