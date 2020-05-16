<form class="form form_center form_auth" action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
  <h3 class="form__title">Авторизация</h3>
  <div class="form__row form__row_content-column">
    <label for="login">Ваш логин:</label>
    <input class="form__input input" id="login" type="text" name="login"  minlength="2" maxlength="20" required="required" value="<?= getPostVal("login") ?>" />
    <?= !empty($errorsForm["login"]) ? "<div class=\"error\"><p class=\"error__text\">{$errorsForm["login"]}</p></div>" : "" ?>
  </div>
  <div class="form__row form__row_content-column">
    <label for="password">Пароль:</label>
    <input class="form__input input" id="password" type="password" name="password" minlength="6" maxlength="20" required="required" value="<?= getPostVal("password") ?>" />
    <?= !empty($errorsForm["password"]) ? "<div class=\"error\"><p class=\"error__text\">{$errorsForm["password"]}</p></div>" : "" ?>
  </div>
  <div class="form__row form__row_content-column">
    <button class="form__button submit" type="submit" name="signin">Войти</button>
  </div>
  <div class="form__row form__row_text-center">
    <a class="form__link-signup link" href="/signup.php">Зарегистрироваться</a>
  </div>
</form>