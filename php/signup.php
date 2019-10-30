<?php
require "init.php";

if ($isAuth) {
    $seconds = 6;
    header("Refresh: $seconds; url=/");
    $error = "Вы уже зарегистрированны, через $seconds сек. вас перенаправит на главную страницу сайта.";
    $content = include_template('error', [
      'error' => $error
    ]);

    $layout = include_template('layout', [
      'title' => "$mainText Задачи",
      'bgClass' => $bgClass,
      'content' => $content
    ]);

    print($layout);
    die;
}

if ($_SERVER['REQUEST_METHOD'] === "POST") {
  $user = [
    'login' => !empty(trim($_POST["login"])) ? trim($_POST["login"]) : "",
    'password' => !empty(trim($_POST["password"])) ? trim($_POST["password"]) : "",
    'password2' => !empty(trim($_POST["password2"])) ? trim($_POST["password2"]) : "",
    'name' => !empty(trim($_POST["name"])) ? trim($_POST["name"]) : "",
    'surname' => !empty(trim($_POST["surname"])) ? trim($_POST["surname"]) : "",
    'patronymic' => !empty(trim($_POST["patronymic"])) ? trim($_POST["patronymic"]) : ""
  ];

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
      return validatePassworsEqually($user["password"], $user["password2"]);
    },
  ];

  $rulesExtendedSecond = [
    'login' => function () use ($user, $linkDB) {
        return checkLoginInDB($linkDB, $user);
    },
    'password' => function () use ($user) {
        return validatePassworsRegex($user["password"]);
    },
  ];

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
    $password = $passwordSalt . $user["password"];
    $hashPassword = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (user_login, user_password, user_name, user_surname, user_patronymic) VALUES (?, ?, ?, ?, ?)";

    $stmt = $linkDB->prepare($sql);
    $stmt->execute([$user["login"], $hashPassword, $user["name"], $user["surname"], $user["patronymic"]]);
    if ($stmt) {
        $id = $linkDB->lastInsertId();
        $userInfo["login"] = $user["login"];
        $userInfo["id"] = $id;
        $userInfo["name"] = $user["name"];
        $userInfo["surname"] = $user["surname"];
        $userInfo["patronymic"] = $user["patronymic"];
        $_SESSION['userInfo'] = $userInfo;
        // header("Location: /");
        header("Location: /signin.php");
        die;
    }
  }
}

$content = include_template('signup', [
  "MIN_LENGTH_TEXT" => MIN_LENGTH_TEXT,
  'MAX_LENGTH_TEXT' => MAX_LENGTH_TEXT,
  'MIN_LENGTH_PWD' => MIN_LENGTH_PWD,
  'MAX_LENGTH_PWD' => MAX_LENGTH_PWD,
  'errorsForm' => $errorsForm
]);

$layout = include_template('layout', [
  'title' => "$mainText Регистрация пользователя",
  'bgClass' => $bgClass,
  'content' => $content
]);

print($layout);