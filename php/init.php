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
$userAll = null;
$bgClass = null;
$today = date("d.m.Y");

// $_SESSION['userInfo'] && $_GET["page"] === null ? "class=\"bg\"" : "";
if (isset($_SESSION['userInfo'])) {
  $user = "{$_SESSION['userInfo']['surname']} {$_SESSION['userInfo']['name']} {$_SESSION['userInfo']['patronymic']}";
  $bgClass = "class=\"bg\"";
  // $userAll = getUsers($dbcon);
}