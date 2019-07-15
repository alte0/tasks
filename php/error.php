<?php
require "lib/lib.inc.php";

$content = "<p>Такой страницы нету! <a href=\"/\">Перейти на главную</a></p>";

$layout = include_template('layout', [
  'title' => $title,
  'content' => $content
]);

print($layout);
?>