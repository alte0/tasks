<form class="form form_auth" action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
  <h3 class="form__title">Авторизация</h3>
  <div class="form__row form__row_content-column">
    <label for="login">Ваш логин:</label>
    <input class="form__input" id="login" type="text" name="login" minlength="<?= MIN_LENGTH_TEXT ?>" maxlength="<?= MAX_LENGTH_TEXT ?>" required value="<?= getPostVal("login") ?>" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="password">Пароль:</label>
    <input class="form__input" id="password" type="password" name="password" minlength="<?= MIN_LENGTH_PWD ?>" maxlength="<?= MAX_LENGTH_PWD ?>" required value="<?= getPostVal("password") ?>" />
  </div>
  <div class="form__row form__row_content-column">
    <button class="form__button" type="submit" name="signin">Войти
    </button>
  </div>
  <div class="form__row">
    <a class="form__link-signup" href="/signup.php">Зарегистрироваться</a>
  </div>
</form>