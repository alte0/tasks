<form class="form form_search" action="/search.php" method="get">
  <h3 class="form__title visually-hidden">Поиск по задачам.</h3>
  <div class="form__row form__row_search">
    <input class="form__input form__input_search" type="search" name="search-field" placeholder="Поиск по задачам" value="<?= $_GET["search-field"] ?? "" ?>" />
    <button class="form__button submit" type="submit">Найти</button>
  </div>
</form>