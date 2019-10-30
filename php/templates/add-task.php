<div class="tasks__add-task">
  <form class="form form_task-add" action="" method="post">
    <div class="form__row form__row_label-group-two">
      <label for="date">Дата начала и окончания задачи</label>
      <div class="flatpickr">
        <input id="date" class="form__date" type="text" name="date" placeholder="выберите дату или даты" data-input="data-input" required="required" value="<?= $today ?>" />
        <button type="button" title="Открыт/Закрыть календарь" data-toggle="">календарь</button>
        <button type="button" title="Очистить календарь" data-clear="">очистить</button>
      </div>
    </div>
    <div class="form__row form__row_content-column"><span>Выберите исполнителя</span>
      <select class="form__list-users" name="executor" required="required">
        <option value="" selected="selected" disabled="disabled">Не выбрано</option>
        <?php
          if (isset($users, $_SESSION['userInfo'])) {
            foreach ($users as $user) {
              $textOption = clearStrDataTags($user['user_id'] === $_SESSION['userInfo']['id'] ? "Я" : "{$user['user_name']} {$user['user_surname']} {$user['user_patronymic']}");
              
              print("<option value={$user['user_id']}>$textOption</option>");
            }
          }
        ?>
      </select>
    </div>
    <div class="form__row form__row_content-column">
      <label>Заголовок задачи</label><textarea class="form__title-add" type="date" name="title" placeholder="сделать ..." required="required"></textarea>
    </div>
    <div class="form__row form__row_content-column">
      <label>Дополнительная информация по задаче</label>
      <textarea id="textarea-text" name="text" placeholder="Обьяснение задачи ..." required="required"></textarea>
    </div>
    <div class="form__row">
      <button class="form__submit" type="submit" name="task-add">Добавить задачу</button>
      <a class="form__link" href="/">К списку задач</a>
    </div>
  </form>
</div>