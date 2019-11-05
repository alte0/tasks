import { showMessage, TypeMessage } from './show-user-message'
import { clearDataEditor } from './editor'
import { clearDataFlatpickr } from './flatpickr-pl'

const formTaskAdd = document.body.querySelector(`.form_task-add`)
/**
 * ajax Добавление задачи на сервер
 */
function formTaskAddSubmitHandler (evt) {
  evt.preventDefault()
  const buttonSubmit = formTaskAdd.querySelector('.form__submit')
  const method = `POST`
  const url = `/ajax/add-task.php`
  const formData = new FormData(formTaskAdd)

  let isSend = true

  if (formData.get('executor') === null) {
    isSend = false
  }

  for (const field of formData.entries()) {
    if (field[1] === '') {
      isSend = false
    }
  }

  if (isSend) {
    formData.append('add-task', 'ajax')

    buttonSubmit.setAttribute('disabled', 'disabled')

    fetch(url, {
      method,
      body: formData
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
          buttonSubmit.removeAttribute('disabled')
        }, 1900)
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
}
