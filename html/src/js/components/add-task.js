import { Vars } from './vars-common'
import { showMessage, TypeMessage } from './show-user-message'
import { clearDataEditor } from './editor'
import { clearDataFlatpickr } from './flatpickr-pl'

const FORM_TASK_ADD = document.body.querySelector(`.form_task-add`)
/**
 * ajax Добавление задачи на сервер
 */
const formTaskAddSubmitHandler = (evt) => {
  evt.preventDefault()
  const BUTTON_SUBMIT = FORM_TASK_ADD.querySelector('.form__submit')
  const URL = `/ajax/add-task.php`
  // eslint-disable-next-line prefer-const
  let FORM_DATA = new FormData(FORM_TASK_ADD)
  let isSend = true

  if (FORM_DATA.get('executor') === null) {
    isSend = false
  }

  for (const field of FORM_DATA.entries()) {
    if (field[1] === '') {
      isSend = false
    }
  }

  if (isSend) {
    FORM_DATA.append('add-task', 'ajax')

    BUTTON_SUBMIT.setAttribute('disabled', 'disabled')

    fetch(URL, {
      method: `POST`,
      body: FORM_DATA
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
          FORM_TASK_ADD.reset()
          clearDataEditor()
          clearDataFlatpickr()
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

if (FORM_TASK_ADD) {
  FORM_TASK_ADD.addEventListener(`submit`, formTaskAddSubmitHandler)
  FORM_TASK_ADD.querySelector('[name="text"]').removeAttribute('required')
}
