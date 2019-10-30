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
/**
 * Валидация строки
 * @param string $value - значение для валидации;
 * @param integer $min - минимальное значение длины строки;
 * @param integer $max - максимальное значение длины строки;
 * @return string|null
 */
function validateLength(int $min, int $max, string $value)
{
    $length = mb_strlen($value);
    
    if (!($length >= $min && $length <= $max)) {
        return "Значение должно быть от $min до $max символов";
    }

    return null;
}
/**
 * Валидация строки
 * @param string $value - значение для валидации;
 * @return string|null
 */
function validateLoginRegex(string $value)
{
    if (!preg_match(REGEX_USER_LOGIN, $value)) {
        return "Только латинские буквы и цифры, символы: '_', '-', первый символ обязательно буква";
    }

    return null;
}
/**
 * Валидация строки
 * @param string $value - значение для валидации;
 * @return string|null
 */
function validatePassworsRegex(string $value)
{
    if (!preg_match(REGEX_USER_PSW, $value)) {
        return "Строчные и прописные латинские буквы, цифры, спецсимволы.";
    }

    return null;
}
/**
 * Валидация строки
 * @param string $value - значение для валидации;
 * @param string $value2 - значение для валидации;
 * @return string|null
 */
function validatePassworsEqually(string $value, string $value2)
{
    if ($value !== $value2) {
        return "Пароли не совпадают!";
    }

    return null;
}
/**
 * Валидация строки
 * @param resource $link - соединение с БД;
 * @param array $arr - значение для валидации;
 * @return string|null
 */
function checkLoginInDB($link, array $arr)
{
    if (!checkUserInDB($link, $arr)) {
        return "Такой логин уже занят!";
    }

    return null;
}
/**
 * Проверка пользователя в бд
 * @param resource $link - соединение с mysql
 * @param array $user - массив с данными = ["login"=> "login","password"=> "password"]
 * @param boolean $isPwd - Признак надо ли на проверку пароль.
 * @return boolean 
 */
function checkUserInDB($link, $user, $isPwd = false)
{
    $login = $user["login"];
    global $passwordSalt;
    $password = $passwordSalt . $user["password"];
    $sql = "SELECT * FROM `users` WHERE `user_login`=?";
    
    $stmt = $link->prepare($sql);
    $stmt->execute([$login]);
    $result = $stmt->fetch();

    if ($isPwd && !empty($result)) {
        var_dump($result);
        // if (password_verify($password, $result["user_password"]) && $result["user_login"] === $login) {
        //     global $userInfo;
        //     $userInfo["login"] = $result["user_login"];
        //     $userInfo["id"] = $result["user_id"];
        //     $userInfo["name"] = $result["user_name"];
        //     $userInfo["surname"] = $result["user_surname"];
        //     $userInfo["patronymic"] = $result["user_patronymic"];
        //     return true;
        // }
        
        // return false;
    }

    return empty($result);
}

