<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="copyright" content="Задачи" />
  <title><?= clearStrDataTags($title) ?></title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;display=swap&amp;subset=cyrillic" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body <?= $bgClass ?>>
  <main>
    <div class="container">
      <?= $content ?>
    </div>
  </main>
  <footer class="footer">
    <div class="container">
      <p>Разработка Дмитриев Максим. &copy; 2019 г.</p>
    </div>
  </footer>
  <script src="js/vendor.bundle.js" async="async"></script>
  <script src="js/script.js" defer="defer"></script>
</body>
</html>