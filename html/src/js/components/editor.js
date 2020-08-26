import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/ru'
import { showMessage, TypeMessage } from './show-user-message'

const formTaskAdd = document.querySelector('.form_task-add')
const Config = {
  removePlugins: ['ImageUpload'],
  toolbar: ['Heading', 'bold', 'italic', '|', 'Link', 'bulletedList', 'numberedList', 'blockQuote', 'MediaEmbed', 'Undo', 'Redo'],
  language: 'ru',
  mediaEmbed: {
    previewsInData: true
  }
}

let editor
/**
 * Инициализация ckeditor5
 */
const initEditor = () => {
  const textarea = formTaskAdd.querySelector('#textarea-text')
  const submit = formTaskAdd.querySelector('[type="submit"]')
  const MAX_CHARACTERS = 1000 || textarea.maxLength

  ClassicEditor.create(textarea, Config)
    .then(newEditor => {
      editor = newEditor
      editor.model.document.on('change:data', () => {
        const isDisabled = textarea.textLength > MAX_CHARACTERS

        textarea.innerHTML = editor.getData()
        submit.toggleAttribute('disabled', isDisabled)

        if (isDisabled) {
          showMessage(TypeMessage.WARNING, `В редакторе превышен лимит в ${MAX_CHARACTERS} символов!`)
        }
      })
      return true
    })
    .catch(error => {
      console.error(error)
    })
}

if (formTaskAdd) {
  initEditor()
}
/**
 * Очищает введённые данные в ckeditor5
 */
export const clearDataEditor = function () {
  editor.setData('')
}
