import { showMessage, TypeMessage } from './show-user-message'

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
    }
    if (this.readyState === 4 && this.status !== 200) {
      showMessage(TypeMessage.ERROR, `Не удалось добавить задачу`, `Ошибка`)
    }
  }

  xhr.send(formData)
}

if (formTaskAdd) {
  formTaskAdd.addEventListener(`submit`, submitOnFormTaskAdd)
}
