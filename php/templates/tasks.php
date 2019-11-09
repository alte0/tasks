<ul class="user-menu">
  <li class="user-menu__item"><?= clearStrDataTags($user) ?></li>
  <li class="user-menu__item">
    <a class="user-menu__link" href="/<?= $linkHref ?>"><?= $linkText ?></a>
  </li>
  <li class="user-menu__item">
    <a class="user-menu__link" href="/add-task.php">Поставить задачу</a>
  </li>
  <li class="user-menu__item">
    <a class="user-menu__link user-menu__logout" href="/logout.php">Выйти</a>
  </li>
</ul>
<div class="tasks">
  <h2 class="tasks__title"><?= $title ?></h2>
  <?php if (empty($tasks)): ?>
  <div>Нет никаких задач</div>
  <?php else: ?>
  <div class='tasks__lists'>
  <?php foreach($tasks as $task): ?>
    <section class='task'>
      <h3 class='task__title'><?= clearStrDataTags($task['task_title']) ?></h3>
      <div class='task__desc'>
        <?= clearStrDataTags(html_entity_decode($task['task_desc']), $allowTags) ?>
      </div>
      <footer class='task__footer'>
        <div class='task__date-start'>Начало задачи: <?= clearStrDataTags($task['task_date_start']) ?>
        </div>
        <div class='task__date-end'>Закончить задачу до: <?= clearStrDataTags($task['task_date_end']) ?>
        </div>
        <div class='task__status'>Статус: <?= clearStrDataTags($task['task_status']) ?>
        </div>
        <div class='task__execute'>
          <?php if($isLinkExecute): ?>
            <?= 
            $task['task_status'] === 'Выполнено!' 
            ? "" 
            : "<a href='/execute-task.php?action=execute&id={$task['task_id']}'>Выполнить задачу</a>"
            ?>
          <?php endif; ?>
        </div>
        <div class='task__author'>Назначил: <?= clearStrDataTags($task['author_surname']) ?> <?= clearStrDataTags($task['author_name']) ?> <?= $task['author_patronymic'] ?>
        </div>
        <div class='task__executor'>Испонитель: <?= clearStrDataTags($task['executor_surname']) ?> <?= clearStrDataTags($task['executor_name']) ?> <?= clearStrDataTags($task['executor_patronymic']) ?> 
        </div>
      </footer>
    </section>
  <?php endforeach; ?>
  </div>
  <?php endif; ?>
  <?= $pagination ?>
</div>
