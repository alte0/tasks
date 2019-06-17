<?php
include __DIR__ . "/lib/lib.inc.php";

$user = false;
$signup = false;

// phpinfo();

if ($_GET["page"] === "signup") {
  $signup = true;
}
if ($_GET["page"] === "signin") {
  $signup = false;
}
// test-test
session_start();
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  if (count($_POST) === 2) {
    if (signup($mysqli, $_POST)) {
      $_SESSION['auth'] = true;
      header("Location: " . $_SERVER["REQUEST_URI"]);
      header("Location: /");
      exit;
    }
  } else {
    signin($mysqli, $_POST);
  }
}
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="copyright" content="Задачи" />
  <title>Задачи</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&amp;display=swap&amp;subset=cyrillic&amp;display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>
  <!-- <?= var_dump($_SESSION) ?>
  <?= var_dump(session_status()) ?> -->
  <main>
    <div class="container">
      <?php
      // print_r($_POST);
      if ($_SESSION['auth']) {
        require_once __DIR__ . "/templates/tasks.php";
      } elseif (!$user && !$signup) {
        require_once __DIR__ . "/templates/signin.php";
      } else {
        require_once __DIR__ . "/templates/signup.php";
      }
      ?>
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