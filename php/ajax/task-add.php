<?php
session_start();
require_once "../lib/lib.inc.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  if ($_POST["task-add"] === '') {
    header("Content-Type: application/json;");
    addTask($dbcon, $_POST);
  }
}
?>