import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru'

const dateFlatpickr = document.body.querySelector(`.flatpickr`)
const ConfigFlatpickr = {
  locale: Russian,
  defaultDate: `today`,
  mode: `range`,
  dateFormat: `d.m.Y`,
  minDate: `today`,
  weekNumbers: true,
  wrap: true
}
let fp

if (dateFlatpickr) {
  fp = flatpickr(dateFlatpickr, ConfigFlatpickr)
  fp.config.onOpen.push(function () {
    fp.redraw()
  })
}
/**
 * Очищает данные в flatpickr и устанавливает текущую дату
 */
export const clearDataFlatpickr = () => {
  fp.clear()
  fp.setDate(+new Date(), true, ConfigFlatpickr.dateFormat)
}
