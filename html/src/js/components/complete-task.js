import { Vars } from './vars-common'
import { showMessage, TypeMessage } from './show-user-message'
import { apiFetch } from './apiFetch'

const task = document.querySelector(`.task`)
const tasks = document.querySelector(`.tasks`)
const elem = tasks || task
/**
 * Нативное модальное окно с подтверждением о выполнении задачи
 */
const linkClickHandler = (evt) => {
  const { target } = evt

  if (target.tagName === `A` && target.closest('.task__execute')) {
    evt.preventDefault()
    const task = target.closest('.task')
    const taskExecute = task.querySelector('.task__execute')
    const taskStatus = task.querySelector(`.task__status`)
    const title = task.querySelector(`.task__title`)
    const titleText = title.textContent
    const isQuestion = confirm(`Вы хотите выполнить задачу - ${titleText}?`)
    const urlExecuteTask = `/ajax/execute-task.php`

    if (isQuestion) {
      const urlExecute = new URL(target.href)

      apiFetch.taskExecute(urlExecuteTask + urlExecute.search)
        .then((response) => {
          if (response.msgsType === `success`) {
            showMessage(response.msgsType, response.textMsgs)

            // если на странице список задач
            if (tasks) {
              const tasksLists = tasks.querySelector('.tasks__lists')
              const tasksItem = target.closest('.tasks__item')
              const paginationList = document.querySelector('.pagination-list')

              tasksItem.parentElement.removeChild(tasksItem)

              if (tasksLists.childElementCount === 0 && !paginationList) {
                tasks.removeChild(tasksLists)
                tasks.insertAdjacentHTML('beforeend', '<div>Нет никаких задач</div>')
              }

              if (tasksLists.childElementCount === 0 && paginationList) {
                setTimeout(() => {
                  document.location.reload(true)
                }, Vars.TIME)
              }
            } else {
              taskStatus.textContent = 'Статус: Выполнено!'
              taskExecute.innerHTML = ''
            }
          } else if (response.msgsType === `error`) {
            showMessage(response.msgsType, response.textMsgs)
          }

          return true
        })
        .catch((e) => {
          showMessage(TypeMessage.ERROR, e)
        })
    }
  }
}

if (elem) {
  elem.addEventListener(`click`, linkClickHandler)
}
