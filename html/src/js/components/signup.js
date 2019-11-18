import { Vars } from './vars-common'
import { showMessage, TypeMessage } from './show-user-message'

const FORM_REG = document.body.querySelector(`.form_reg`)
/**
 * ajax signup регистрация на сайте
 */
const formSignUPSubmitHandler = (evt) => {
  evt.preventDefault()
  const BUTTON_SUBMIT = FORM_REG.querySelector('.form__button')
  const URL = `/ajax/signup.php`
  // eslint-disable-next-line prefer-const
  let formData = new FormData(FORM_REG)

  let isSend = true

  for (const field of formData.entries()) {
    console.log(field)
    if (field[1] === '') {
      isSend = false
    }
  }

  if (isSend) {
    formData.append('signup', 'ajax')

    BUTTON_SUBMIT.setAttribute('disabled', 'disabled')

    fetch(URL, {
      method: `POST`,
      body: formData
    })
      .then(response => {
        if (response.ok && response.status === Vars.STATUS_OK) {
          return response.json()
        } else {
          throw new Error(`Не удалось отправить данные!`)
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
      .finally(() => {
        setTimeout(() => {
          BUTTON_SUBMIT.removeAttribute('disabled')
        }, Vars.TIME)
      })
      .catch((e) => {
        showMessage(TypeMessage.ERROR, e)
      })
  } else {
    showMessage(TypeMessage.WARNING, `Заполните всю форму!`, `Внимание!`)
  }
}

if (FORM_REG) {
  FORM_REG.addEventListener(`submit`, formSignUPSubmitHandler)
}
