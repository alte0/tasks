<?php
require __DIR__ . "/../../lib/lib.inc.php";
use PHPUnit\Framework\TestCase;

class StackTest extends TestCase
{
  public function testName() {
    // мин 2 символа
    $name = "1";
    $this->assertSame(false, validName($name));
    // мин 2 символа
    $name = "1w";
    $this->assertSame(true, validName($name));
    // макс 20 символа
    $name = "1q2w3e4r5t6y7u8i9o0p1";
    $this->assertSame(false, validName($name));
  }

  public function testSurName() {
    // мин 2 символа
    $surname = "1";
    $this->assertSame(false, validName($surname));
    // мин 2 символа
    $surname = "1w";
    $this->assertSame(true, validName($surname));
    // макс 20 символа
    $surname = "1q2w3e4r5t6y7u8i9o0p1";
    $this->assertSame(false, validName($surname));
  }

  public function testPatronymic() {
    // мин 2 символа
    $patronymic = "1";
    $this->assertSame(false, validPatronymic($patronymic));
    // мин 2 символа
    $patronymic = "1w";
    $this->assertSame(true, validPatronymic($patronymic));
    // макс 20 символа
    $patronymic = "1q2w3e4r5t6y7u8i9o0p1";
    $this->assertSame(false, validPatronymic($patronymic));
  }

  public function testLogin() {
    // мин 2 символа
    $login = "1";
    $this->assertSame(false, validLogin($login));
    // мин 2 символа первый не цыфра
    $login = "12";
    $this->assertSame(false, validLogin($login));
    // мин 2 символа первый буква
    $login = "f2";
    $this->assertSame(true, validLogin($login));
    // макс 20 символов
    $login = "f2kguigwigbfiwf654488";
    $this->assertSame(false, validLogin($login));
    // только латинскиие
    $login = "кцпкпукп";
    $this->assertSame(false, validLogin($login));
    // только латинскиие
    $login = "dfwкцпкпукп";
    $this->assertSame(false, validLogin($login));
    // только латинскиие, первый не цыфра
    $login = "1dfwкцпкпукп";
    $this->assertSame(false, validLogin($login));
  }

    public function testPsw() {
      // мин 6 символа
      $password = "1q2w3";
      $this->assertSame(false, validPwd($password));
      // макс 20 символа
      $password = "1q2w3e4r5t6y7u8i9o0p1";
      $this->assertSame(false, validPwd($password));
      // мин 6 символа. Строчные и прописные латинские буквы, цифры, спецсимволы.
      $password = "1test1";
      $this->assertSame(false, validPwd($password));
      // мин 6 символа. Строчные и прописные латинские буквы, цифры, спецсимволы.
      $password = "1Test1";
      $this->assertSame(true, validPwd($password));
      // мин 6 символа. Строчные и прописные латинские буквы, цифры, спецсимволы.
      $password = "@Test@";
      $this->assertSame(true, validPwd($password));
      // мин 6 символа. Строчные и прописные латинские буквы, цифры, спецсимволы.
      $password = "@test@";
      $this->assertSame(false, validPwd($password));
      // мин 6 символа. Строчные и прописные латинские буквы, цифры, спецсимволы.
      $password = "@testлЛ@";
      $this->assertSame(false, validPwd($password));
  } 

    public function testPsws() {
      // одинаковые пароли
      $password = "1q2w31";
      $password2 = "1q2w32";
      $this->assertSame(false, equalPwds($password, $password2));
      // одинаковые пароли
      $password = "1q2w3";
      $password2 = "1q2w3";
      $this->assertSame(true, equalPwds($password, $password2));
  } 
}