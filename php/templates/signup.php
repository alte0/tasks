<form class="form form_reg" action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
  <h3 class="form__title">Регистрация нового пользователя</h3>
  <?php showMsgs($msgs); ?>
  <div class="form__row form__row_content-column">
    <label for="login">Ваш логин:</label><input class="form__input" id="login" type="text" name="login" minlength="2" maxlength="20" required="required" <?= $_POST["login"] ? "value=" . $_POST["login"] : "" ?> />
  </div>
  <div class="form__row form__row_content-column">
    <label for="password">Пароль:</label><input class="form__input" id="password" type="password" name="password" minlength="6" maxlength="20" required="required" pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="qSdf4t">
  </div>
  <div class="form__row form__row_content-column">
    <label for="password2">Повторите пароль:</label><input class="form__input" id="password2" type="password" name="password2" minlength="6" maxlength="20" required="required" pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="qSdf4t" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="name">Имя:</label><input class="form__input" id="name" type="text" name="name" minlength="2" maxlength="20" required="required" <?= $_POST["name"] ? "value=" . $_POST["name"] : "" ?> />
  </div>
  <div class="form__row form__row_content-column">
    <label for="surname">Фамилия:</label><input class="form__input" id="surname" type="text" name="surname" minlength="2" maxlength="20" required="required" <?= $_POST["surname"] ? "value=" . $_POST["surname"] : "" ?> />
  </div>
  <div class="form__row form__row_content-column">
    <label for="patronymic">Отчество:</label><input class="form__input" id="patronymic" type="text" name="patronymic" minlength="2" maxlength="20" required="required" <?= $_POST["patronymic"] ? "value=" . $_POST["patronymic"] : "" ?> />
  </div>
  <div class="form__row form__row_content-column">
    <button class="form__button" type="submit" name="signup">Зарегистрироваться
    </button>
  </div>
  <div class="form__row">
    <a class="form__link-signup" href="?page=signin">Авторизоваться</a>
  </div>
</form>