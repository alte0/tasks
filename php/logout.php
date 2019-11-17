<?php
session_start();
unset($_SESSION["userInfo"]);
header("Location: /index.php");
die;
