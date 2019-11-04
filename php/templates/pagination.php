<?php if ($pagesCount > 1): ?>
<?php
$lastPage = $pages[count($pages) - 1];
$pagePrev = ($curPage - 1) === 0 ? 1 : ($curPage - 1);
$pageNext = ($curPage + 1) > $lastPage ? $lastPage : ($curPage + 1);
?>
<ul class="pagination-list">
  <li class="pagination-list__item pagination-list__item_prev">
    <?php if ($pagePrev ===  $curPage) : ?>
    <a class="pagination-list__link"><</a>
    <?php else : ?>
    <a class="pagination-list__link" href="<?= $_SERVER["SCRIPT_NAME"] ?>?page=<?= $pagePrev ?>"><</a>
    <?php endif; ?>
  </li>
  <?php foreach ($pages as $page): ?>
  <li class="pagination-list__item <?php if ((int) $page === $curPage): ?>pagination-list__item_active<?php endif; ?>">
    <?php if ((int) $page === $curPage): ?>
    <a class="pagination-list__link"><?= $page ?></a>
    <?php else: ?>
    <a class="pagination-list__link" href="<?= $_SERVER["SCRIPT_NAME"] ?>?page=<?= $page ?>"><?= $page ?></a>
    <?php endif; ?>
  </li>
  <?php endforeach; ?>
  <li class="pagination-list__item pagination-list__item_next">
    <?php if ((int) $pageNext ===  $curPage) : ?>
    <a class="pagination-list__link">></a>
    <?php else : ?>
    <a class="pagination-list__link" href="<?= $_SERVER["SCRIPT_NAME"] ?>?page=<?= $pageNext ?>">></a>
    <?php endif; ?>
  </li>
</ul>
<?php endif; ?>