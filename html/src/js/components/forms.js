import { showMessage, TypeMessage } from './show-user-message'
import { clearDataEditor } from './editor'
import { clearDataFlatpickr } from './flatpickr-pl'

const formTaskAdd = document.body.querySelector(`.form_task-add`)

function submitOnFormTaskAdd (evt) {
  evt.preventDefault()
  const method = `POST`
  const url = `/ajax/task-add.php`
  const formData = new FormData(formTaskAdd)
  formData.append('ajax', 'yes')
  formData.append('task-add', '')

  const inputDate = formTaskAdd.querySelector(`.form__date`)
  const selectUser = formTaskAdd.querySelector(`.form__list-users`)
  const taskTitle = formTaskAdd.querySelector(`.form__title-add`)
  const taskText = formTaskAdd.querySelector(`#textarea-text`)

  if (inputDate.value !== '' && selectUser.value !== '' && taskTitle.value !== '' && taskText.value !== '') {
    fetch(url, {
      method,
      body: formData
    })
      .then(response => {
        if (response.ok && response.status === 200) {
          return response.json()
        } else {
          throw new Error(`Не удалось добавить задачу на сервере`)
        }
      })
      .then(data => {
        if (data.msgsType === `success`) {
          showMessage(data.msgsType, data.textMsgs[0])
          formTaskAdd.reset()
          clearDataEditor()
          clearDataFlatpickr()
        } else {
          showMessage(data.msgsType, data.textMsgs[0])
        }
        return false
      })
      .catch(error => {
        showMessage(TypeMessage.ERROR, error)
      })
  } else {
    showMessage(TypeMessage.WARNING, `Заполните все поля!`, `Внимание!`)
  }
}

if (formTaskAdd) {
  formTaskAdd.addEventListener(`submit`, submitOnFormTaskAdd)
}
