const logout = document.querySelector(`.user-menu__logout`)
/**
 * Нативное модальное окно с подтверждением о действии
 */
const linkClickHandler = (evt) => {
  const isConfirm = confirm(`Вы действительно хотите выйти?`)
  if (!isConfirm) {
    evt.preventDefault()
  }
}

if (logout) {
  logout.addEventListener(`click`, linkClickHandler)
}
