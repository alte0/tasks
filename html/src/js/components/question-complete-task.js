const TASKS = document.querySelector(`.tasks`)
/**
 * Нативное модальное окно с подтверждением о выполнеии задачи
 */
const linkClickHandler = (evt) => {
  const TARGET = evt.target
  if (TARGET.tagName === `A` && TARGET.closest('.task__execute')) {
    const TASK = TARGET.closest('.task')
    const TITLE = TASK.querySelector(`.task__title`)
    const TITLE_TEXT = TITLE.innerText
    const IS_QUESTION = confirm(`Вы хотите выполнить задачу - ${TITLE_TEXT}?`)
    if (!IS_QUESTION) {
      evt.preventDefault()
    }
  }
}

if (TASKS) {
  TASKS.addEventListener(`click`, linkClickHandler)
}
