<nav class="user-menu">
  <span class="user-menu__item"><?= clearStrDataTags($user) ?></span>
  <?php foreach($linksUserMenu as $link): ?>
  <a class="user-menu__link" href="/<?= $link["linkHref"] ?>"><?= $link["linkText"] ?></a>
  <?php endforeach; ?>
  <a class="user-menu__link" href="/add-task.php">Поставить задачу</a>
  <a class="user-menu__link user-menu__logout" href="/logout.php">Выйти</a>
</nav>