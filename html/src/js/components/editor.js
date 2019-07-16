import 'codemirror'
import FroalaEditor from 'froala-editor'
import '../../../node_modules/froala-editor/js/languages/ru'

import '../../../node_modules/froala-editor/js/plugins/align.min'
import '../../../node_modules/froala-editor/js/plugins/code_beautifier.min'
import '../../../node_modules/froala-editor/js/plugins/code_view.min'
import '../../../node_modules/froala-editor/js/plugins/draggable.min'
import '../../../node_modules/froala-editor/js/plugins/link.min'
import '../../../node_modules/froala-editor/js/plugins/lists.min'
import '../../../node_modules/froala-editor/js/plugins/paragraph_format.min'
import '../../../node_modules/froala-editor/js/plugins/paragraph_style.min'
import '../../../node_modules/froala-editor/js/plugins/table.min'
import '../../../node_modules/froala-editor/js/plugins/url.min'
import '../../../node_modules/froala-editor/js/plugins/entities.min'

FroalaEditor('#textarea-text', {
  language: 'ru',
  placeholderText: 'Обьяснение задачи ...',
  enter: FroalaEditor.ENTER_P,
  events: {
    initialized: function () {
      this.el.closest('form').addEventListener('submit', function (e) {
        e.preventDefault()
      })
    }
  }
})
