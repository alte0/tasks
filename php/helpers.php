<?php
/**
 * DBO->prepare и $stmt->fetchAll()
 *
 * @param pdo - $link Соеинение с бд
 * @param string - $sql запрос к бд
 * @param array - $data массив с данными для $stmt->execute($data)
 * @return array
 */
function dboPrepareAndFetchAll($link, $sql, array $data = []): array
{
    $stmt = $link->prepare($sql);

    if ($stmt !== false) {
        $stmt->execute($data);
        $result = $stmt->fetchAll();

        return $result ?? [];
    }

    return ["error"=> "Нет доступна к базе данных. Перезагрузите страницу!"];
}
/**
 * Подключает шаблон, передает туда данные и возвращает итоговый HTML контент
 *
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
 *
 * @param string $str Очишаемая строка
 * @param string $tags Тэги которые надо оставить - '<p><a>'
 * @return string Очишенная строка
 */
function clearStrDataTags(string $str, $tags = ''): string
{
    return strip_tags($str, $tags);
}
/**
 * Получения значения из $_POST для заполнеиня данных в форме.
 *
 * @param string $name - имя ключа из массива $_POST для получения значения;
 * @return string
 */
function getPostVal($name): string
{
    // htmlentities для сохранения кавычек
    return isset($_POST[$name]) ? htmlentities(trim($_POST[$name])) : "";
}
/**
 * Валидация строки min max
 *
 * @param integer $min - минимальное значение длины строки;
 * @param integer $max - максимальное значение длины строки;
 * @param string $value - значение для валидации;
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
 * Валидация строки логина по regex
 *
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
 * Валидация строки пароля по regex
 *
 * @param string $value - значение для валидации;
 * @return string|null
 */
function validatePasswordsRegex(string $value)
{
    if (!preg_match(REGEX_USER_PSW, $value)) {
        return "Строчные и прописные латинские буквы, цифры, спецсимволы.";
    }

    return null;
}
/**
 * Валидация строк паролей
 *
 * @param string $value - значение для валидации;
 * @param string $value2 - значение для валидации;
 * @return string|null
 */
function validatePasswordsEqually(string $value, string $value2)
{
    if ($value !== $value2) {
        return "Пароли не совпадают!";
    }

    return null;
}
/**
 * Проверка существования логина в БД
 *
 * @param pdo $link - соединение с БД;
 * @param array $arr - массив с данными для валидации;
 * @return string|null
 */
function checkLoginInDB($link, array $arr)
{
    if (checkUserInDB($link, $arr)) {
        return "Такой логин уже занят!";
    }

    return null;
}
/**
 * Проверка пользователя в бд
 *
 * @param pdo $link - соединение с mysql
 * @param array $user - массив с данными = ["login"=> "login","password"=> "password"]
 * @param bool $isPwd - Признак надо ли на проверку пароль.
 * @return bool
 */
function checkUserInDB($link, $user, $isPwd = false): bool
{
    $login = $user["login"];
    global $passwordSalt;
    $password = $passwordSalt . $user["password"];
    $sql = "SELECT * FROM `users` WHERE `user_login`=?";

    $stmt = $link->prepare($sql);

    if ($stmt === false) {
        return false;
    }

    $stmt->execute([$login]);
    $result = $stmt->fetch();

    if ($isPwd && !empty($result)) {
        if (password_verify($password, $result["user_password"]) && $result["user_login"] === $login) {
            global $userInfo;
            $userInfo["id"] = $result["user_id"];
            $userInfo["login"] = $result["user_login"];
            $userInfo["name"] = $result["user_name"];
            $userInfo["surname"] = $result["user_surname"];
            $userInfo["patronymic"] = $result["user_patronymic"];
            $_SESSION['userInfo'] = $userInfo;
            setcookie("userInfo", "{$userInfo["name"]};{$userInfo["surname"]};{$userInfo["patronymic"]};{$userInfo["id"]}", "", "/");

            return true;
        }

        return false;
    }

    /**
     * нет логина 
     */
    if (!$result) {
        return false;
    }

    if ($result["user_login"] === $login) {
        return true;
    }

    return false;
}
/**
 * Получение всех пользователей
 *
 * @param pdo $link - соединение с mysql
 * @return array
 */
function getUsers($link): array
{
    $sql = "SELECT `user_id`,`user_login`,`user_name`,`user_surname`,`user_patronymic` FROM `users`";
    $query = $link->query($sql);

    if ($query !== false) {
        $result = $query->fetchAll();

        return $result ?? [];
    }

    return ["error"=> "Нет доступна к базе данных. Перезагрузите страницу!"];
}

/**
 * Преобразовывает введеную дату пользователя в дату для mysql
 *
 * @param string - $date
 * @return  string
 */
function transformsDate($date): string
{
    $arrDate = date_parse($date);
    return "{$arrDate["year"]}.{$arrDate["month"]}.{$arrDate["day"]}";
}

/**
 * Добавление задачи для пользователя
 *
 * @param pdo $link - соединение с mysql
 * @param array - $task
 * @return bool
 */
function addTask($link, array $task): bool
{
    global $userId;
    $authorId = $userId;
    $executorId = $task["executor"];
    $date = $task["date"];
    $title = $task["title"];
    $text = $task["text"];
    $dateNoLimit = $task["date-no-limit"];
    $status = 0;
    $dateStart = null;
    $dateEnd = null;

    $dates = explode(" — ", $date);

    if (count($dates) === 2) {
        $dateStart = transformsDate($dates[0]);
        $dateEnd = transformsDate($dates[1]);
    } else {
        $dateStart = transformsDate($dates[0]);
        $dateEnd = $dateStart;
    }

    $sqlTask = "INSERT INTO `tasks`(`task_title`, `task_desc`, `task_status`, `task_date_start`, `task_date_end`, `task_date_add`, `task_date_no_limit`) VALUES(?, ?, ?, ?, ?, ?, ?)";

    $link->beginTransaction();

    if (!$link) {
        return false;
    }

    $stmt = $link->prepare($sqlTask);

    if (!$stmt) {
        return false;
    }

    global $todayAndHour;

    $resutTask = $stmt->execute([$title, $text, $status, $dateStart, $dateEnd, $todayAndHour, $dateNoLimit]);

    $idTask = $link->lastInsertId();

    $sqlTaskAuthor = "INSERT INTO tasks_author (user_id, task_id) VALUES('$authorId', '$idTask')";
    $sqlTaskExecutor = "INSERT INTO tasks_executor (user_id, task_id) VALUES('$executorId', '$idTask')";

    $resutAuthor = $link->exec($sqlTaskAuthor);
    $resutExecutor = $link->exec($sqlTaskExecutor);

    if ($resutTask && $resutAuthor && $resutExecutor) {
        $link->commit();
        return true;
    }

    $link->rollBack();

    return false;
}
/**
 * Получение задач
 *
 * @param pdo $link - соединение с mysql
 * @param string $sql
 * @return array
 */
function getTasks($link, $sql): array
{
    $query = $link->query($sql);

    if ($query !== false) {
        $result = $query->fetchAll();

        return $result ?? [];
    }

    return ["error"=> "Нет доступна к базе данных. Перезагрузите страницу!"];
}

/**
 * Получение задач для пользователя
 *
 * @param pdo $link - соединение с mysql
 * @param string $sql
 * @return array
 */
function getMyTasks($link, $sql): array
{
    return getTasks($link, $sql);
}
/**
 * Получение задач поставленных пользователем
 *
 * @param pdo $link - соединение с mysql
 * @param string $sql
 * @return array
 */
function getMyDesignatedTasks($link, $sql): array
{
    return getTasks($link, $sql);
}
/**
 * Очистка введеных данных(ожидаем цифру).
 *
 * @param string $value
 * @return string
 */
function clearInt($value) {
  return intval($value);
}
/**
 * Выполнение задачи
 *
 * @param pdo $link - соединение с mysql
 * @param int|float|string - $id задачи
 * @return bool
 */
function executeTask($link, $id): bool
{
    $job = 1;
    $idTask = abs(clearInt($id));

    global $todayAndHour;
    $sql = "UPDATE `tasks` SET `task_status`='$job', `task_date_complete`='$todayAndHour' WHERE `task_id`=$idTask";

    $query = $link->exec($sql);

    if ($query) {
        return true;
    }

    return false;
}
/**
 * Получение задачи
 *
 * @param pdo $link - соединение с mysql
 * @param string - $sql
 * @param int - $taskId номер задачи
 * @return array
 */
function getTask($link, $sql, $taskId): array
{
    $taskId = abs(clearInt($taskId));
    $stmt = $link->prepare($sql);

    if ($stmt !== false) {
        $stmt->execute([$taskId]);
        $result = $stmt->fetchAll();

        if (!empty($result)) {
            return $result[0];
        }

        return [];
    }

    return ["error"=> "Нет доступна к базе данных. Перезагрузите страницу!"];
}
/**
 * Добавление нового пользователя
 *
 * @param pdo $link - соединение с mysql
 * @param string - $sql запрос
 * @param array - $user данные пользователя
 * @return bool
 */
function addUser($link, $sql, $user): bool
{
  $required = ['login', 'password', 'password2', 'name', 'surname', 'patronymic'];

  $rules = [
    'login' => function () use ($user) {
        return validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $user["login"]);
    },
    'password' => function () use ($user) {
        return validateLength(MIN_LENGTH_PWD, MAX_LENGTH_PWD, $user["password"]);
    },
    'password2' => function () use ($user) {
        return validateLength(MIN_LENGTH_PWD, MAX_LENGTH_PWD, $user["password2"]);
    },
    'name' => function () use ($user) {
        return validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $user["name"]);
    },
    'surname' => function () use ($user) {
        return validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $user["surname"]);
    },
    'patronymic' => function () use ($user) {
        return validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $user["patronymic"]);
    },
  ];

  $rulesExtended = [
    'login' => function () use ($user) {
        return validateLoginRegex($user["login"]);
    },
    'password' => function () use ($user) {
        return validatePasswordsEqually($user["password"], $user["password2"]);
    },
  ];

  $rulesExtendedSecond = [
    'login' => function () use ($user, $link) {
        return checkLoginInDB($link, $user);
    },
    'password' => function () use ($user) {
        return validatePasswordsRegex($user["password"]);
    },
  ];

  global $errorsForm;

  foreach ($required as $key) {
      if (empty($user[$key])) {
          $errorsForm[$key] = "Это поле нужно заполнить!";
      }
  }

  foreach ($user as $key => $value) {
      if (!isset($errorsForm[$key]) && isset($rules[$key])) {
          $rule = $rules[$key];
          $errorsForm[$key] = $rule();
      }
  }

  foreach ($user as $key => $value) {
      if (!isset($errorsForm[$key]) && isset($rulesExtended[$key])) {
          $ruleExtended = $rulesExtended[$key];
          $errorsForm[$key] = $ruleExtended();

          if ($key === 'password') {
              $errorsForm['password2'] = $errorsForm['password'];
          }
      }
  }

  foreach ($user as $key => $value) {
      if (!isset($errorsForm[$key]) && isset($rulesExtendedSecond[$key])) {
          $ruleExtendedSecond = $rulesExtendedSecond[$key];
          $errorsForm[$key] = $ruleExtendedSecond();

          if ($key === 'password') {
              $errorsForm['password2'] = $errorsForm['password'];
          }
      }
  }

  $errorsForm = array_filter($errorsForm);

  if (!count($errorsForm)) {
        global $passwordSalt;

        $password = $passwordSalt . $user["password"];
        $hashPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $link->prepare($sql);
        if ($stmt && $stmt->execute([$user["login"], $hashPassword, $user["name"], $user["surname"], $user["patronymic"]])) {
            return true;
        }
  }

  return false;
}
/**
 * Поиск по задачам
 *
 * @param pdo $link - соединение с mysql
 * @param string - $sql Соеинение с бд
 * @param array - $data для prepare
 * @return array
 */
function getTasksSearch($link, $sql, array $data): array
{
    return dboPrepareAndFetchAll($link, $sql, $data);
}
