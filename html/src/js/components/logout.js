const LOGOUT = document.querySelector(`.user-menu__logout`)
/**
 * Нативное модальное окно с подтверждением о действии
 */
const linkClickHandler = (evt) => {
  const IS_QUESTION = confirm(`Вы действительно хотите выйти?`)

  if (!IS_QUESTION) {
    evt.preventDefault()
  }
}

if (LOGOUT) {
  LOGOUT.addEventListener(`click`, linkClickHandler)
}
