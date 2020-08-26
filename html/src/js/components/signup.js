import { Vars } from './vars-common'
import { showMessage, TypeMessage } from './show-user-message'
import { apiFetch } from './apiFetch'
import { checkFormsInputNotEmpty } from '../helpers'

const formReg = document.body.querySelector(`.form_reg`)
/**
 * ajax signup регистрация на сайте
 */
const formSignUPSubmitHandler = (evt) => {
  evt.preventDefault()
  const { target } = evt
  const formButton = target.querySelector('.form__button')
  const formData = new FormData(target)

  if (checkFormsInputNotEmpty(formData)) {
    formButton.setAttribute('disabled', 'disabled')

    apiFetch.singUpUser(formData)
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
          formButton.removeAttribute('disabled')
        }, Vars.TIME)
      })
      .catch((e) => {
        showMessage(TypeMessage.ERROR, e)
      })
  } else {
    showMessage(TypeMessage.WARNING, `Заполните всю форму!`, `Внимание!`)
  }
}

if (formReg) {
  formReg.addEventListener(`submit`, formSignUPSubmitHandler)
}
