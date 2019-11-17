<?php
require "init.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
  if ($_GET["action"] === "execute" && isset($_GET["id"])) {
      executeTask($linkDB, $_GET["id"]);
      header("Location: /index.php");
  }
}
// http://tasks.loc/execute-task.php?action=execute&id=1
