<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <meta name="copyright" content="Start build project (SBP), 2018"/>
    <meta name="author" content="Start build project (SBP)"/>
    <title>Регистрация</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&amp;display=swap&amp;subset=cyrillic&amp;display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="css/style.css"/>
  </head>
  <body>
    <header class="header"></header>
    <main>
      <div class="container">
        <form class="form form_reg" action="" method="post">
          <h3 class="form__title">Регистрация нового пользователя
          </h3>
          <div class="form__row form__row_content-column">
            <label for="login">Ваш логин:</label><input class="form__input" id="login" type="text" name="Login" minlength="2" maxlength="20" required="required"/>
          </div>
          <div class="form__row form__row_content-column">
            <label for="password">Пароль:</label><input class="form__input" id="password" type="password" name="password" minlength="6" maxlength="20" required="required"/>
          </div>
          <div class="form__row form__row_content-column">
            <label for="password2">Повторите пароль:</label><input class="form__input" id="password2" type="password" name="password2" minlength="6" maxlength="20" required="required"/>
          </div>
          <div class="form__row form__row_content-column">
            <label for="name">Имя:</label><input class="form__input" id="name" type="text" name="name" required="required"/>
          </div>
          <div class="form__row form__row_content-column">
            <label for="surname">Фамилия:</label><input class="form__input" id="surname" type="text" name="surname" required="required"/>
          </div>
          <div class="form__row form__row_content-column">
            <label for="patronymic">Отчество:</label><input class="form__input" id="patronymic" type="text" name="patronymic" required="required"/>
          </div>
          <div class="form__row form__row_content-column">
            <button class="form__button" type="submit">Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <p>Разработка Дмитриев Максим. &copy; 2019 г.</p>
      </div>
    </footer>
    <script src="js/vendor.bundle.js" async="async"></script>
    <script src="js/script.js" defer="defer"></script>
  </body>
</html>