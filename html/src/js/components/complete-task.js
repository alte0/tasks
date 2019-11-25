import { Vars } from './vars-common'
import { showMessage, TypeMessage } from './show-user-message'

const TASK = document.querySelector(`.task`)
const TASKS = document.querySelector(`.tasks`)
/**
 * Нативное модальное окно с подтверждением о выполнеии задачи
 */
const linkClickHandler = (evt) => {
  const TARGET = evt.target

  if (TARGET.tagName === `A` && TARGET.closest('.task__execute')) {
    evt.preventDefault()
    const TASK = TARGET.closest('.task')
    const TITLE = TASK.querySelector(`.task__title`)
    const TITLE_TEXT = TITLE.textContent
    const IS_QUESTION = confirm(`Вы хотите выполнить задачу - ${TITLE_TEXT}?`)
    const URL_EXECUTE_TASK = `/ajax/execute-task.php`

    if (IS_QUESTION) {
      // eslint-disable-next-line prefer-const
      let URL_EXECUTE = new URL(TARGET.href)
      URL_EXECUTE.searchParams.append('execute-task', 'ajax')

      fetch(URL_EXECUTE_TASK + URL_EXECUTE.search, {
        cache: 'no-store'
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

            if (TASKS) {
              const LI_ITEM = TARGET.closest('.tasks__item')
              var TASKS_LISTS = TASKS.querySelector('.tasks__lists')
              var PAG_LIST = document.querySelector('.pagination-list')
              LI_ITEM.parentElement.removeChild(LI_ITEM)
            }

            if (TASKS_LISTS.childElementCount === 0 && TASKS && !PAG_LIST) {
              TASKS.removeChild(TASKS_LISTS)
              TASKS.insertAdjacentHTML('beforeend', '<div>Нет никаких задач</div>')
            }

            if (TASKS_LISTS.childElementCount === 0 && PAG_LIST) {
              setTimeout(() => {
                document.location.reload(true)
              }, 2000)
            }
          } else if (response.msgsType === `error`) {
            showMessage(response.msgsType, response.textMsgs)
          }
          return false
        })
        .catch((e) => {
          showMessage(TypeMessage.ERROR, e)
        })
    }
  }
}

const ELEM = TASKS || TASK

if (ELEM) {
  ELEM.addEventListener(`click`, linkClickHandler)
}
