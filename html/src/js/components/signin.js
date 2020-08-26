import { Vars } from './vars-common'
import { showMessage, TypeMessage } from './show-user-message'
import { apiFetch } from './apiFetch'
import { checkFormsInputNotEmpty } from '../helpers'

const formAuth = document.body.querySelector(`.form_auth`)
/**
 * ajax sign-in авторизация на сайте
 */
const formSignInSubmitHandler = (evt) => {
  evt.preventDefault()
  const { target } = evt
  const formButton = target.querySelector('.form__button')
  const formData = new FormData(target)

  if (checkFormsInputNotEmpty(formData)) {
    formButton.setAttribute('disabled', 'disabled')

    apiFetch.singInUser(formData)
      .then((json) => {
        if (json.msgsType === `success`) {
          showMessage(json.msgsType, json.textMsgs)
          setTimeout(() => {
            location = '/'
          }, Vars.TIME)
        } else if (json.msgsType === `error`) {
          showMessage(json.msgsType, json.textMsgs)
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

if (formAuth) {
  formAuth.addEventListener(`submit`, formSignInSubmitHandler)
}
