<form class="form form_center form_reg" action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
  <h3 class="form__title">Регистрация нового пользователя</h3>
  <div class="form__row form__row_content-column">
    <label for="login">Ваш логин:</label>
    <input class="form__input input" id="login" type="text" name="login" minlength="<?= MIN_LENGTH_TEXT ?>" maxlength="<?= MAX_LENGTH_TEXT ?>" required="required" placeholder="Td34@_-" value="<?= getPostVal("login") ?>" />
    <?= !empty($errorsForm["login"]) ? "<div class=\"text-error\">{$errorsForm["login"]}</div>" : "" ?>
  </div>
  <div class="form__row form__row_content-column">
    <label for="password">Пароль:</label>
    <input class="form__input input" id="password" type="password" name="password" minlength="<?= MIN_LENGTH_PWD ?>" maxlength="<?= MAX_LENGTH_PWD ?>" required="required" pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="qSdf4t" value="<?= getPostVal("password") ?>">
    <?= !empty($errorsForm["password"]) ? "<div class=\"text-error\">{$errorsForm["password"]}</div>" : "" ?>
  </div>
  <div class="form__row form__row_content-column">
    <label for="password2">Повторите пароль:</label>
    <input class="form__input input" id="password2" type="password" name="password2" minlength="<?= MIN_LENGTH_PWD ?>" maxlength="<?= MAX_LENGTH_PWD ?>" required="required" pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="qSdf4t" value="<?= getPostVal("password2") ?>"/>
    <?= !empty($errorsForm["password2"]) ? "<div class=\"text-error\">{$errorsForm["password2"]}</div>" : "" ?>
  </div>
  <div class="form__row form__row_content-column">
    <label for="name">Имя:</label>
    <input class="form__input input" id="name" type="text" name="name" minlength="<?= MIN_LENGTH_TEXT ?>" maxlength="<?= MAX_LENGTH_TEXT ?>" required="required" value="<?= getPostVal("name") ?>" />
    <?= !empty($errorsForm["name"]) ? "<div class=\"text-error\">{$errorsForm["name"]}</div>" : "" ?>
  </div>
  <div class="form__row form__row_content-column">
    <label for="surname">Фамилия:</label>
    <input class="form__input input" id="surname" type="text" name="surname" minlength="<?= MIN_LENGTH_TEXT ?>" maxlength="<?= MAX_LENGTH_TEXT ?>" required="required" value="<?= getPostVal("surname") ?>" />
    <?= !empty($errorsForm["surname"]) ? "<div class=\"text-error\">{$errorsForm["surname"]}</div>" : "" ?>
  </div>
  <div class="form__row form__row_content-column">
    <label for="patronymic">Отчество:</label>
    <input class="form__input input" id="patronymic" type="text" name="patronymic" minlength="<?= MIN_LENGTH_TEXT ?>" maxlength="<?= MAX_LENGTH_TEXT ?>" required="required" value="<?= getPostVal("patronymic") ?>" />
    <?= !empty($errorsForm["patronymic"]) ? "<div class=\"text-error\">{$errorsForm["patronymic"]}</div>" : "" ?>
  </div>
  <div class="form__row form__row_content-column">
    <button class="form__button submit" type="submit" name="signup">Зарегистрироваться</button>
  </div>
  <div class="form__row form__row_text-center">
    <a class="form__link-signup link" href="/signin.php">Авторизоваться</a>
  </div>
</form>