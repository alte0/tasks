<?php
session_start();

require "config/db.php";
require "config/php-ini.php";

const MIN_LENGTH_TEXT = 2;
const MAX_LENGTH_TEXT = 20;
const MIN_LENGTH_PWD = 6;
const MAX_LENGTH_PWD = 20;

$mainText = "Tasks -";
$user = null;
$users = null;
$bgClass = null;
$today = date("d.m.Y");
$errorsForm = [];
$passwordSalt = "1s@d";

if (isset($_SESSION['userInfo'])) {
  $user = "{$_SESSION['userInfo']['surname']} {$_SESSION['userInfo']['name']} {$_SESSION['userInfo']['patronymic']}";
  $bgClass = "class=\"bg\"";
  // $users = getUsers($dbcon);
}