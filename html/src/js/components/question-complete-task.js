const main = document.querySelector(`main`)
/**
 * Нативное модальное окно с подтверждением о выполнеии задачи
 */
const linkClickHandler = (evt) => {
  const target = evt.target
  if (target.tagName === `A` && target.closest('.task__execute')) {
    const task = target.closest('.task')
    const title = task.querySelector(`.task__title`)
    const titleText = title.innerText
    const isConfirm = confirm(`Вы хотите выполнить задачу - ${titleText}?`)
    if (!isConfirm) {
      evt.preventDefault()
    }
  }
}

if (main) {
  main.addEventListener(`click`, linkClickHandler)
}
