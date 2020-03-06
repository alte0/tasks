import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru';
// import { showMessage, TypeMessage } from './show-user-message';

const CONFIG = {
  removePlugins: ['ImageUpload'],
  toolbar: ['Heading', 'bold', 'italic', '|', 'Link', 'bulletedList', 'numberedList', 'blockQuote', 'MediaEmbed', 'Undo', 'Redo'],
  language: 'ru',
  mediaEmbed: {
    previewsInData: true
  }
};
let editor;
/**
 * Инициализация ckeditor5
 * @param elem
 * @param fn - функция получения данных из редактора.
 */
export const initEditor = (elem, fn) => {
  // const MAX_CHARACTERS = 1000 || TEXTAREA.maxLength;

  ClassicEditor.create(elem, CONFIG)
    .then(newEditor => {
      editor = newEditor;
    editor.model.document.on('change:data', () => {
        const data = editor.getData();
        fn(data);
    });
      // return true
    })
    .catch(error => {
      console.error(error);
    });

};
/**
 * Размонтирование Редактора
 */
export const destroyEditor = () => {
  editor.destroy()
    .catch(error => {
      console.log(error);
    });
}
/**
 * Очишает введеные данные в ckeditor5
 */
export const clearDataEditor = () => {
  editor.setData('')
};
