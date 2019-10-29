<?php
require "init.php";
require "helpers.php";

$content = include_template('signup', [
  "MIN_LENGTH_TEXT" => MIN_LENGTH_TEXT,
  'MAX_LENGTH_TEXT' => MAX_LENGTH_TEXT,
  'MIN_LENGTH_PWD' => MIN_LENGTH_PWD,
  'MAX_LENGTH_PWD' => MAX_LENGTH_PWD
]);

$layout = include_template('layout', [
  'title' => "$mainText Регистрация",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);
