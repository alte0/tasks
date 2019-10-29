<?php
/**
 * Подключает шаблон, передает туда данные и возвращает итоговый HTML контент
 * @param string $nameTemplate Имя подключаемого файла шаблона из папки templates
 * @param array $data Ассоциативный массив с данными для шаблона
 * @return string Итоговый HTML
 */
function include_template(string $nameTemplate, array $data = []): string
{
    $pathTemplate = "templates/$nameTemplate.php";
    $result = "";
    if (!is_readable($pathTemplate)) {
        return $result;
    }
    ob_start();
    extract($data);
    require $pathTemplate;
    $result = ob_get_clean();
    return $result;
}
/**
 * Функция очистки данных от тэгов
 * @param string $str Очишаемая строка
 * @return string Очишенная строка
 */
function clearStrDataTags(string $str): string
{
    $text = strip_tags($str);

    return $text;
}
/**
 * Получения значения из $_POST для заполнеиня данных в форме.
 * @param string $name - имя ключа из массива $_POST для получения значения;
 * @return string
 */
function getPostVal($name)
{
    // htmlentities для сохранения кавычек
    return isset($_POST[$name]) ? htmlentities(trim($_POST[$name])) : "";
}
