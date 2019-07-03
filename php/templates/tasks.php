<?php showMsgs($msgs); ?>
<div class="tasks">
  <input class="tasks__input" id="my-tasks" type="radio" name="tasks-tab" checked="checked" />
  <label class="tasks__tab" for="my-tasks">
    <h2 class="tasks__title">Мои задачи.</h2>
  </label>

  <div class="tasks__hidden-divider"></div>

  <input class="tasks__input" id="set-tasks" type="radio" name="tasks-tab" />
  <label class="tasks__tab" for="set-tasks">
    <h2 class="tasks__title">Задачи назначенные мною.</h2>
  </label>

  <div class="tasks__hidden-divider"></div>

  <input class="tasks__input" id="add-task" type="radio" name="tasks-tab" />
  <label class="tasks__tab" for="add-task">
    <h2 class="tasks__title">Назначить задачу.</h2>
  </label>

  <?php
  if (!$tasks) {
    print_r("<div>Нет никаких задач</div>");
  } else {
    $myTasks = ""; // задачи поставленные мне
    $setTasks = ""; // задачи поставленные мною
    foreach ($tasks as $task) {
      if ($task['author'] === $_SESSION['userInfo']['name'] && !($task['executor'] === $_SESSION['userInfo']['name'])) {
        $setTasks = $setTasks . trim("
          <div class='task'>
            <div class='task__date-start'>Начало задачи: {$task['task_date_start']}
            </div>
            <div class='task__status'>{$task['task_status']}.
            </div>
            <h3 class='task__title'>{$task['task_title']}
            </h3>
            <div class='task__desc'>
              <p>{$task['task_desc']}</p>
            </div>
            <div class='task__date-end'>
              Закончить задачу до: {$task['task_date_end']} 
              <a href=''>выполнить</a>
            </div>
            <div class='task__author'>Назначил: {$task['author']}</div>
            <div class='task__executor'>Испонитель: {$task['executor']}</div>
          </div>
        ");
      } else {
        $myTasks = $myTasks . trim("
          <div class='task'>
            <div class='task__date-start'>Начало задачи: {$task['task_date_start']}
            </div>
            <div class='task__status'>{$task['task_status']}.
            </div>
            <h3 class='task__title'>{$task['task_title']}
            </h3>
            <div class='task__desc'>
              <p>{$task['task_desc']}</p>
            </div>
            <div class='task__date-end'>
              Закончить задачу до: {$task['task_date_end']}
              <a href=''>выполнить</a>
            </div>
            <div class='task__author'>Назначил: {$task['author']}</div>
            <div class='task__executor'>Испонитель: {$task['executor']}</div>
          </div>
        ");
      }
      
    }
    print_r("<div class='tasks__my-tasks'>$myTasks</div>");
    print_r("<div class='tasks__set-tasks'>$setTasks</div>");
  }
  ?>

  <div class="tasks__add-task">
    <form class="form form_task-add" action="" method="post">
      <div class="form__row form__row_label-group-two">
        <input class="form__date" type="text" name="author" value="<? print($_SESSION['userInfo']['id']) ?>" hidden />
        <label>Дата начала и окончания задачи
          <div class="flatpickr">
            <input class="form__date" type="text" name="date" placeholder="выберите дату или даты" data-input="data-input" required="required" />
            <button type="button" title="toggle" data-toggle="">календарь</button>
            <button type="button" title="toggle" data-clear="">очистить</button>
          </div>
        </label>
      </div>
      <div class="form__row form__row_content-column"><span>Выберите исполнителя</span>
        <select class="form__list-users" name="executor" required="required">
          <option value="" selected="selected" disabled="disabled">Не выбрано</option>
          <?php
          foreach ($userAll as $user) {
            $textOption = $user['user_id'] === $_SESSION['userInfo']['id'] ? "Я" : "{$user['user_name']} {$user['user_surname']} {$user['user_patronymic']}";
            print("<option value={$user['user_id']}>$textOption</option>");
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
      </div>
    </form>
  </div>
</div>