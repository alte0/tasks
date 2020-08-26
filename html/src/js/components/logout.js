import { Vars } from './vars-common'
import { showMessage, TypeMessage } from './show-user-message'
import { deleteCookie } from '../helpers'
import { apiFetch } from './apiFetch'

const userMenuLogout = document.querySelector(`.user-menu__logout`)
/**
 * Нативное модальное окно с подтверждением о действии
 */
const linkClickHandler = (evt) => {
  evt.preventDefault()
  const isQuestion = confirm(`Вы действительно хотите выйти?`)

  if (isQuestion) {
    apiFetch.logOutUser()
      .then((response) => {
        if (response.msgsType === `success`) {
          showMessage(response.msgsType, response.textMsgs)
          deleteCookie('PHPSESSID')
          deleteCookie('userInfo')
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

if (userMenuLogout) {
  userMenuLogout.addEventListener(`click`, linkClickHandler)
  userMenuLogout.removeAttribute('href')
  userMenuLogout.setAttribute('tabindex', '0')
}
