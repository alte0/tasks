import { Vars } from './vars-common'
import { showMessage, TypeMessage } from './show-user-message'
import { clearDataEditor } from './editor'
import { clearDataFlatpickr } from './flatpickr-pl'
import { checkFormsInputNotEmpty } from '../helpers'
import { apiFetch } from './apiFetch'

const formTaskAdd = document.body.querySelector(`.form_task-add`)
/**
 * Добавление задачи на сервер
 */
const formTaskAddSubmitHandler = (evt) => {
  evt.preventDefault()
  const { target } = evt
  const submit = target.querySelector('.form__submit')
  const formData = new FormData(target)

  if (checkFormsInputNotEmpty(formData) && formData.get('executor')) {
    submit.setAttribute('disabled', 'disabled')

    apiFetch.addTask(formData)
      .then((response) => {
        if (response.msgsType === `success`) {
          showMessage(response.msgsType, response.textMsgs)
          formTaskAdd.reset()
          clearDataEditor()
          clearDataFlatpickr()
        } else if (response.msgsType === `error`) {
          showMessage(response.msgsType, response.textMsgs)
        }

        return false
      })
      .finally(() => {
        setTimeout(() => {
          submit.removeAttribute('disabled')
        }, Vars.TIME)
      })
      .catch((e) => {
        showMessage(TypeMessage.ERROR, e)
      })
  } else {
    showMessage(TypeMessage.WARNING, `Заполните всю форму!`, `Внимание!`)
  }
}

if (formTaskAdd) {
  formTaskAdd.addEventListener(`submit`, formTaskAddSubmitHandler)
  formTaskAdd.querySelector('[name="text"]').removeAttribute('required')
}
