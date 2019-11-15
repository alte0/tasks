import { showMessage, TypeMessage } from './show-user-message'

const FORM_AUTH = document.body.querySelector(`.form_auth`)
const TIME = 3000
/**
 * ajax signin авторизация на сайте
 */
const formSignInSubmitHandler = (evt) => {
  evt.preventDefault()
  const BUTTON_SUBMIT = FORM_AUTH.querySelector('.form__button')
  const URL = `/ajax/signin.php`
  const FORM_DATA = new FormData(FORM_AUTH)

  let isSend = true

  for (const field of FORM_DATA.entries()) {
    if (field[1] === '') {
      isSend = false
    }
  }

  if (isSend) {
    FORM_DATA.append('signin', 'ajax')

    BUTTON_SUBMIT.setAttribute('disabled', 'disabled')

    fetch(URL, {
      method: `POST`,
      body: FORM_DATA
    })
      .then(response => {
        if (response.ok && response.status === 200) {
          return response.json()
        } else {
          throw new Error(`Не удалось отправить данные!`)
        }
      })
      .then((response) => {
        if (response.msgsType === `success`) {
          showMessage(response.msgsType, response.textMsgs)
          setTimeout(() => {
            location = '/'
          }, TIME)
        } else if (response.msgsType === `error`) {
          showMessage(response.msgsType, response.textMsgs)
        }
        return false
      })
      .finally(() => {
        setTimeout(() => {
          BUTTON_SUBMIT.removeAttribute('disabled')
        }, TIME)
      })
      .catch((e) => {
        showMessage(TypeMessage.ERROR, e)
      })
  } else {
    showMessage(TypeMessage.WARNING, `Заполните всю форму!`, `Внимание!`)
  }
}

if (FORM_AUTH) {
  FORM_AUTH.addEventListener(`submit`, formSignInSubmitHandler)
}
