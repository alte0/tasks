import { Vars } from './vars-common'
import { showMessage, TypeMessage } from './show-user-message'

const LOGOUT = document.querySelector(`.user-menu__logout`)
/**
 * Нативное модальное окно с подтверждением о действии
 */
const linkClickHandler = (evt) => {
  evt.preventDefault()
  const IS_QUESTION = confirm(`Вы действительно хотите выйти?`)
  const URL_EXECUTE_TASK = `/ajax/logout.php?logout=ajax&action=exit`

  if (IS_QUESTION) {
    fetch(URL_EXECUTE_TASK, {
      cache: 'no-store'
    })
      .then(response => {
        if (response.ok && response.status === Vars.STATUS_OK) {
          return response.json()
        } else {
          throw new Error(`Не удалось выйти! Проверьте ваше соединение.`)
        }
      })
      .then((response) => {
        if (response.msgsType === `success`) {
          showMessage(response.msgsType, response.textMsgs)
          setTimeout(() => {
            location = '/signin.php'
          }, Vars.TIME)
        } else if (response.msgsType === `error`) {
          showMessage(response.msgsType, response.textMsgs)
        }
        return false
      })
      .catch((e) => {
        showMessage(TypeMessage.ERROR, e)
      })
  }
}

if (LOGOUT) {
  LOGOUT.addEventListener(`click`, linkClickHandler)
  LOGOUT.removeAttribute('href')
}
