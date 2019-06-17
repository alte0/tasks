<form class="form form_reg" action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
  <h3 class="form__title">Регистрация нового пользователя
  </h3>
  <div class="form__row form__row_content-column">
    <label for="login">Ваш логин:</label><input class="form__input" id="login" type="text" name="Login" minlength="2" maxlength="20" required="required" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="password">Пароль:</label><input class="form__input" id="password" type="password" name="password" minlength="6" maxlength="20" required="required" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="password2">Повторите пароль:</label><input class="form__input" id="password2" type="password" name="password2" minlength="6" maxlength="20" required="required" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="name">Имя:</label><input class="form__input" id="name" type="text" name="name" required="required" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="surname">Фамилия:</label><input class="form__input" id="surname" type="text" name="surname" required="required" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="patronymic">Отчество:</label><input class="form__input" id="patronymic" type="text" name="patronymic" required="required" />
  </div>
  <div class="form__row form__row_content-column">
    <button class="form__button" type="submit">Зарегистрироваться
    </button>
  </div>
  <div class="form__row">
    <a class="form__link-signup" href="?page=signin">Авторизоваться</a>
  </div>
</form>