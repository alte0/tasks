import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru'

const DATE_FLATPICKR = document.body.querySelector(`.flatpickr`)
const CONFIG_FLATPICKR = {
  locale: Russian,
  defaultDate: `today`,
  mode: `range`,
  dateFormat: `d.m.Y`,
  minDate: `today`,
  weekNumbers: true,
  wrap: true
}
let fp

if (DATE_FLATPICKR) {
  fp = flatpickr(DATE_FLATPICKR, CONFIG_FLATPICKR)
  fp.config.onOpen.push(function () {
    fp.redraw()
  })
}
/**
 * Очишает данные в flatpickr и устанавливает текушую дату
 */
export const clearDataFlatpickr = function () {
  fp.clear()
  fp.setDate(+new Date(), true, CONFIG_FLATPICKR.dateFormat)
}
