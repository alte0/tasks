<form class="form form_reg" action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
  <h3 class="form__title">Регистрация нового пользователя</h3>
  <div class="form__row form__row_content-column">
    <label for="login">Ваш логин:</label>
    <input class="form__input" id="login" type="text" name="login" minlength="<?= MIN_LENGTH_TEXT ?>" maxlength="<?= MAX_LENGTH_TEXT ?>" required="required" value="<?= getPostVal("login") ?>" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="password">Пароль:</label>
    <input class="form__input" id="password" type="password" name="password" minlength="<?= MIN_LENGTH_PWD ?>" maxlength="<?= MAX_LENGTH_PWD ?>" required="required" pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="qSdf4t" value="<?= getPostVal("password") ?>">
  </div>
  <div class="form__row form__row_content-column">
    <label for="password2">Повторите пароль:</label>
    <input class="form__input" id="password2" type="password" name="password2" minlength="<?= MIN_LENGTH_PWD ?>" maxlength="<?= MAX_LENGTH_PWD ?>" required="required" pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="qSdf4t" value="<?= getPostVal("password2") ?>"/>
  </div>
  <div class="form__row form__row_content-column">
    <label for="name">Имя:</label>
    <input class="form__input" id="name" type="text" name="name" minlength="<?= MIN_LENGTH_TEXT ?>" maxlength="<?= MAX_LENGTH_TEXT ?>" required="required" value="<?= getPostVal("name") ?>" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="surname">Фамилия:</label>
    <input class="form__input" id="surname" type="text" name="surname" minlength="<?= MIN_LENGTH_TEXT ?>" maxlength="<?= MAX_LENGTH_TEXT ?>" required="required" value="<?= getPostVal("surname") ?>" />
  </div>
  <div class="form__row form__row_content-column">
    <label for="patronymic">Отчество:</label>
    <input class="form__input" id="patronymic" type="text" name="patronymic" minlength="<?= MIN_LENGTH_TEXT ?>" maxlength="<?= MAX_LENGTH_TEXT ?>" required="required" value="<?= getPostVal("patronymic") ?>" />
  </div>
  <div class="form__row form__row_content-column">
    <button class="form__button" type="submit" name="signup">Зарегистрироваться
    </button>
  </div>
  <div class="form__row">
    <a class="form__link-signup" href="/signin.php">Авторизоваться</a>
  </div>
</form>