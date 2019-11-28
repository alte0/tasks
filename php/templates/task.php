<?= $userMenu ?>
<?php
  $classTaskExpired = (intval($task['task_date_no_limit']) === 0 && intval($task['task_status']) === 0) && (strtotime($task['task_date_end']) < strtotime($today)) ? " task_expired" : "";
?>
<section class='task task_single<?= $classTaskExpired ?>'>
  <h3 class='task__title'><?= clearStrDataTags($task['task_title']) ?></h3>
  <div class='task__desc'>
    <?= clearStrDataTags(html_entity_decode($task['task_desc']), $allowTags) ?>
  </div>
  <footer class='task__footer'>
    <div class='task__date-start'>Начало задачи: <?= clearStrDataTags($task['task_date_start']) ?>
    </div>
    <div class='task__date-end'>Закончить задачу до: <?= intval($task['task_date_no_limit']) ? "без даты окончания" : clearStrDataTags($task['task_date_end']) ?></div>
    <div class='task__status'>Статус: <?= intval($task['task_status']) === 0 ? "В работе" : "Выполнено" ?>
    </div>
    <div class='task__execute'>
      <?php if($isShowLinkExecute): ?>
        <?= 
        intval($task['task_status']) === 1 
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

