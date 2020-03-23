<?php
require "init.php";

$content = "<p>Такой страницы нету! <a href=\"/index.php\">Перейти на главную</a></p>";

$layout = include_template('layout', [
  'title' => $mainText . " Ошибка 404",
  'content' => $content,
  'bgClass' => $bgClass
]);

print($layout);
?>