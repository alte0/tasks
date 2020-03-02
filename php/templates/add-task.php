<div class="tasks__add-task">
  <form class="form form_task-add" action="/add-task.php" method="post">
    <div class="form__row form__row_label-group-two">
      <label for="date">Дата начала и окончания задачи</label>
      <div class="flatpickr">
        <input id="date" class="form__date input" type="text" name="date" placeholder="выберите дату или даты" data-input="data-input" required="required" value="<?= isset($_POST["date"]) ? getPostVal("date") : $today  ?>" />
        <button type="button" title="Открыт/Закрыть календарь" data-toggle="">календарь</button>
        <button type="button" title="Очистить календарь" data-clear="">очистить</button>
      </div>
      <?= !empty($errorsForm["date"]) ? "<div class=\"text-error\">{$errorsForm["date"]}</div>" : "" ?>
    </div>
    <div class="form__row">
      <input class="form__checkbox" type="checkbox" name="date-no-limit" id="date-no-limit" <?= isset($_POST["date-no-limit"]) ? "checked" : "" ?>/>
      <label for="date-no-limit">Без даты окончания (дата окончания выбранная выше, будет игнорирована)</label>
    </div>
    <div class="form__row form__row_content-column"><span>Выберите исполнителя</span>
      <select class="form__select" name="executor" required="required">
        <option value="no" <?= isset($_POST["executor"]) ? "" : "selected" ?> disabled>Не выбрано</option>
        <?php
          if (isset($users, $_SESSION['userInfo'])) {
            foreach ($users as $user) {
              $textOption = clearStrDataTags($user['user_id'] === $_SESSION['userInfo']['id'] ? "Я" : "{$user['user_name']} {$user['user_surname']} {$user['user_patronymic']}");
              if (isset($_POST["executor"])) {
                $selected = $_POST["executor"] === $user['user_id'] ? "selected" : "";
              }
              
              print("<option $selected value={$user['user_id']}>$textOption</option>");
            }
          }
        ?>
      </select>
      <?= !empty($errorsForm["executor"]) ? "<div class=\"text-error\">{$errorsForm["executor"]}</div>" : "" ?>
    </div>
    <div class="form__row form__row_content-column">
      <label>Заголовок задачи</label>
      <textarea class="form__title-add textarea" type="date" name="title" maxlength="255" placeholder="сделать ..." required="required"><?= getPostVal("title") ?></textarea>
      <?= !empty($errorsForm["title"]) ? "<div class=\"text-error\">{$errorsForm["title"]}</div>" : "" ?>
    </div>
    <div class="form__row form__row_content-column">
      <label>Дополнительная информация по задаче</label>
      <textarea class="textarea" id="textarea-text" name="text" maxlength="1000" placeholder="Обьяснение задачи ..." required="required"><?= getPostVal("text") ?></textarea>
      <?= !empty($errorsForm["text"]) ? "<div class=\"text-error\">{$errorsForm["text"]}</div>" : "" ?>
    </div>
    <div class="form__row form__row_text-center">
      <button class="form__submit submit" type="submit" name="task-add">Добавить задачу</button>
      <a class="form__link link" href="/index.php">К списку задач</a>
    </div>
  </form>
</div>