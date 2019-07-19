import { showMessage, TypeMessage } from './show-user-message'
import { clearDataEditor } from './editor'
import { clearDataFlatpickr } from './flatpickr-pl'

const formTaskAdd = document.body.querySelector(`.form_task-add`)

function submitOnFormTaskAdd (evt) {
  evt.preventDefault()
  const xhr = new XMLHttpRequest()
  const method = `POST`
  const url = `/ajax/task-add.php`
  const isAsync = true
  const formData = new FormData(formTaskAdd)
  formData.append('ajax', 'yes')
  formData.append('task-add', '')

  xhr.open(method, url, isAsync)

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText)
      showMessage(response.msgsType, response.textMsgs)
      formTaskAdd.reset()
      clearDataEditor()
      clearDataFlatpickr()
    }
    if (this.readyState === 4 && this.status !== 200) {
      showMessage(TypeMessage.ERROR, `Не удалось добавить задачу`, `Ошибка`)
    }
  }

  const inputDate = formTaskAdd.querySelector(`.form__date`)
  const selectUser = formTaskAdd.querySelector(`.form__list-users`)
  const taskTitle = formTaskAdd.querySelector(`.form__title-add`)
  const taskText = formTaskAdd.querySelector(`#textarea-text`)
  if (inputDate.value !== '' && selectUser.value !== '' && taskTitle.value !== '' && taskText.value !== '') {
    xhr.send(formData)
  } else {
    showMessage(TypeMessage.WARNING, `Заполните все поля!`, `Внимание!`)
  }
}

if (formTaskAdd) {
  formTaskAdd.addEventListener(`submit`, submitOnFormTaskAdd)
}
