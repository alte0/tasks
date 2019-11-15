import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/ru'
import { showMessage, TypeMessage } from './show-user-message'

const formTaskAdd = document.querySelector('.form_task-add')
const config = {
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
  const button = formTaskAdd.querySelector('[type="submit"]')
  const maxCharacters = 1000 || textarea.maxLength

  ClassicEditor.create(textarea, config)
    .then(newEditor => {
      editor = newEditor
      editor.model.document.on('change:data', () => {
        const editorData = editor.getData()
        textarea.innerHTML = editorData
        const inputCharacters = textarea.textLength
        const isDisabed = inputCharacters > maxCharacters
        button.toggleAttribute('disabled', isDisabed)
        if (isDisabed) {
          showMessage(TypeMessage.WARNING, `В редакторе превышен лимит в ${maxCharacters} символов!`)
        }
      })
      return true
    })
    .catch(error => {
      console.error(error)
    })
  // document.querySelector('[type="submit"]').addEventListener('click', () => {
  //   const editorData = editor.getData()
  //   textarea.innerHTML = editorData
  // })
}

if (formTaskAdd) {
  initEditor()
}
/**
 * Очишает введеные данные в ckeditor5
 */
export const clearDataEditor = function () {
  editor.setData('')
}
