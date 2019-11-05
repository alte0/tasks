<?php
require __DIR__ . "/../../vars.php";
require __DIR__ . "/../../helpers.php";
use PHPUnit\Framework\TestCase;

class StackTest extends TestCase
{
  public function testTextLength() {
    $askOne = 'Значение должно быть от 2 до 20 символов';
    $askTwo = null;
    // мин 2 символа
    $text = "1";
    $this->assertSame($askOne, validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $text));
    // мин 2 символа
    $text = "1w";
    $this->assertSame($askTwo, validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $text));
    // макс 20 символа
    $text = "1q2w3e4r5t6y7u8i9o0p";
    $this->assertSame($askTwo, validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $text));
    // 21 символ
    $text = "1q2w3e4r5t6y7u8i9o0p1";
    $this->assertSame($askOne, validateLength(MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, $text));
  }

  public function testLoginRegex() {
    $askOne = "Только латинские буквы и цифры, символы: '_', '-', первый символ обязательно буква";
    $askTwo = null;
    
    $text = "1";
    $this->assertSame($askOne, validateLoginRegex($text));
    $text = "12";
    $this->assertSame($askOne, validateLoginRegex($text));
    $text = "f2";
    $this->assertSame($askTwo, validateLoginRegex($text));
    $text = "f2kguigwigbfiwf654488";
    $this->assertSame($askTwo, validateLoginRegex($text));
    $text = "кцпкпукп";
    $this->assertSame($askOne, validateLoginRegex($text));
    $text = "dfwкцпкпукп";
    $this->assertSame($askOne, validateLoginRegex($text));
    $text = "1dfwкцпкпукп";
    $this->assertSame($askOne, validateLoginRegex($text));
    $text = "f2_-F";
    $this->assertSame($askTwo, validateLoginRegex($text));
  }

  public function testPassworsRegex() {
    $askOne = "Строчные и прописные латинские буквы, цифры, спецсимволы.";
    $askTwo = null;

    $text = "1";
    $this->assertSame($askOne, validatePassworsRegex($text));
    $text = "12";
    $this->assertSame($askOne, validatePassworsRegex($text));
    $text = "f2";
    $this->assertSame($askOne, validatePassworsRegex($text));
    $text = "f2kguigwigbfiwf654488";
    $this->assertSame($askOne, validatePassworsRegex($text));
    $text = "кцпкпукп";
    $this->assertSame($askOne, validatePassworsRegex($text));
    $text = "dfwкцпкпукп";
    $this->assertSame($askOne, validatePassworsRegex($text));
    $text = "1dfwкцпкпукп";
    $this->assertSame($askOne, validatePassworsRegex($text));
    $text = "f2_-F";
    $this->assertSame($askOne, validatePassworsRegex($text));

    $text = "hhd4H-_@#";
    $this->assertSame($askTwo, validatePassworsRegex($text));
  }

  public function testPassworsEqually() {
    $askOne = "Пароли не совпадают!";
    $askTwo = null;

    $text = "1";
    $text2 = "2";
    $this->assertSame($askOne, validatePassworsEqually($text, $text2));
    $text = "12";
    $text2 = "2";
    $this->assertSame($askOne, validatePassworsEqually($text, $text2));
    $text = "666hhgy";
    $text2 = "666hhgy";
    $this->assertSame($askTwo, validatePassworsEqually($text, $text2));
  }

  public function testClearInt() {
    $text = "1";
    $this->assertSame(1, clearInt($text));
    $text = "12";
    $this->assertSame(12, clearInt($text));
    $text = "666hhgy";
    $this->assertSame(666, clearInt($text));
  }

  public function testClearStrDataTags() {
    $text = "<p>ffsdfsd</p>";
    $this->assertSame("ffsdfsd", clearStrDataTags($text));
    $text = "<p>ffsdfsd</p>";
    $this->assertSame($text, clearStrDataTags($text, '<p>'));
    $text = "<p>ffsdfsd</p></b>";
    $this->assertSame("<p>ffsdfsd</p>", clearStrDataTags($text, '<p>'));
  }

  public function testTransformsDate() {
    $text = "30.12.2019";
    $this->assertSame("2019.12.30", transformsDate($text));
    $text = "30-12-2019";
    $this->assertSame("2019.12.30", transformsDate($text));
    $text = "12/30/2019";
    $this->assertSame("2019.12.30", transformsDate($text));
  }
}