<?= $userMenu ?>
<section class='task task_single'>
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

