<?php
require "lib/lib.inc.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  if ($_POST["clear"] === 'yes') {
    clearMsgs();
  }
}