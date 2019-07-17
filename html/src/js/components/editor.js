import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/ru'

const textarea = document.querySelector('#textarea-text')
const config = {
  removePlugins: ['ImageUpload'],
  toolbar: ['Heading', 'bold', 'italic', '|', 'Link', 'bulletedList', 'numberedList', 'blockQuote', 'MediaEmbed', 'Undo', 'Redo'],
  language: 'ru'
}
let editor

ClassicEditor.create(textarea, config)
  .then(newEditor => {
    editor = newEditor
    return true
  })
  .catch(error => {
    console.error(error)
  })

document.querySelector('[type="submit"]').addEventListener('click', () => {
  const editorData = editor.getData()
  textarea.innerHTML = editorData
})
