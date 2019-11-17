import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/ru'
import { showMessage, TypeMessage } from './show-user-message'

const FORM_TASK_ADD = document.querySelector('.form_task-add')
const CONFIG = {
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
  const TEXTAREA = FORM_TASK_ADD.querySelector('#textarea-text')
  const BUTTON = FORM_TASK_ADD.querySelector('[type="submit"]')
  const MAX_CHARACTERS = 1000 || TEXTAREA.maxLength

  ClassicEditor.create(TEXTAREA, CONFIG)
    .then(newEditor => {
      editor = newEditor
      editor.model.document.on('change:data', () => {
        const EDITOR_DATA = editor.getData()
        TEXTAREA.innerHTML = EDITOR_DATA
        const INPUT_CHARACTERS = TEXTAREA.textLength
        const IS_DISABED = INPUT_CHARACTERS > MAX_CHARACTERS
        BUTTON.toggleAttribute('disabled', IS_DISABED)
        if (IS_DISABED) {
          showMessage(TypeMessage.WARNING, `В редакторе превышен лимит в ${MAX_CHARACTERS} символов!`)
        }
      })
      return true
    })
    .catch(error => {
      console.error(error)
    })
}

if (FORM_TASK_ADD) {
  initEditor()
}
/**
 * Очишает введеные данные в ckeditor5
 */
export const clearDataEditor = function () {
  editor.setData('')
}
