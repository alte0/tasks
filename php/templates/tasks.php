<?php
showMsgs($msgs);
$user = "{$_SESSION['userInfo']['surname']} {$_SESSION['userInfo']['name']} {$_SESSION['userInfo']['patronymic']}"
?>
<div class="user-menu">
  <span class="user-menu__user">Пользователь: <? print($user) ?></span>
  <span class="user-menu__add-task">
    <a class="user-menu__link" href="?page=add-task">Поставить задачу</a>
  </span>
  <span class="user-menu__exit">
    <a class="user-menu__link" href="?action=exit">Выйти</a>
  </span>
</div>
<div class="tasks">
  <input class="tasks__input" id="my-tasks" type="radio" name="tasks-tab" checked="checked" />
  <label class="tasks__tab" for="my-tasks">
    <h2 class="tasks__title">Мои задачи.</h2>
  </label>

  <div class="tasks__hidden-divider"></div>

  <input class="tasks__input" id="set-tasks" type="radio" name="tasks-tab" />
  <label class="tasks__tab" for="set-tasks">
    <h2 class="tasks__title">Назначенные задачи.</h2>
  </label>

  <?php
  if (!$tasks) {
    print_r("<div>Нет никаких задач</div>");
  } else {
    $myTasks = ""; // задачи поставленные мне
    $setTasks = ""; // задачи поставленные мною
    foreach ($tasks as $task) {
      $visibleExecuteLink = $task['task_status'] === 'Выполнено!' ? "" : "<a href='?action=execute&id={$task['task_id']}'>Выполнить задачу</a>";

      if ($task['author_name'] === $_SESSION['userInfo']['name'] && !($task['executor_name'] === $_SESSION['userInfo']['name'])) {
        $TaskDesc = html_entity_decode($task['task_desc']);

        $setTasks = $setTasks . trim("
        <section class='task'>
          <h3 class='task__title'>{$task['task_title']}</h3>
          <div class='task__desc'>
            $TaskDesc
          </div>
          <footer class='task__footer'>
            <div class='task__date-start'>Начало задачи: {$task['task_date_start']}
            </div>
            <div class='task__date-end'>Закончить задачу до: {$task['task_date_end']} 
            </div>
            <div class='task__status'>Статус: {$task['task_status']}
            </div>
            <div class='task__execute'>
            </div>
            <div class='task__author'>Назначил: {$task['author_name']} {$task['author_surname']} {$task['author_patronymic']} 
            </div>
            <div class='task__executor'>Испонитель: {$task['executor_name']} {$task['executor_surname']} {$task['executor_patronymic']} 
            </div>
          </footer>
        </section>
        ");
      } else {
        $TaskDesc = html_entity_decode($task['task_desc']);

        $myTasks = $myTasks . trim("
        <section class='task'>
          <h3 class='task__title'>{$task['task_title']}</h3>
          <div class='task__desc'>
            $TaskDesc
          </div>
          <footer class='task__footer'>
            <div class='task__date-start'>Начало задачи: {$task['task_date_start']}
            </div>
            <div class='task__date-end'>Закончить задачу до: {$task['task_date_end']} 
            </div>
            <div class='task__status'>Статус: {$task['task_status']}
            </div>
            <div class='task__execute'>$visibleExecuteLink
            </div>
            <div class='task__author'>Назначил: {$task['author_name']} {$task['author_surname']} {$task['author_patronymic']} 
            </div>
            <div class='task__executor'>Испонитель: {$task['executor_name']} {$task['executor_surname']} {$task['executor_patronymic']} 
            </div>
          </footer>
        </section>
        ");
      }
    }
    print_r("<div class='tasks__my-tasks'>$myTasks</div>");
    print_r("<div class='tasks__set-tasks'>$setTasks</div>");
  }
  ?>
</div>