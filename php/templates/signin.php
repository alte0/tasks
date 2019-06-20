<form class="form form_auth" action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
  <h3 class="form__title">Авторизация</h3>
  <?php
  showError($errors);
  ?>
  <div class="form__row form__row_content-column">
    <label for="login">Ваш логин:</label><input class="form__input" id="login" type="text" name="login" minlength="2" maxlength="20" required <?= $_POST["login"] ? "value=" . $_POST["login"] : "" ?> />
  </div>
  <div class="form__row form__row_content-column">
    <label for="password">Пароль:</label><input class="form__input" id="password" type="password" name="password" minlength="6" maxlength="20" required />
  </div>
  <div class="form__row form__row_content-column">
    <button class="form__button" type="submit" name="signin">Войти
    </button>
  </div>
  <div class="form__row">
    <a class="form__link-signup" href="?page=signup">Зарегистрироваться</a>
  </div>
</form>