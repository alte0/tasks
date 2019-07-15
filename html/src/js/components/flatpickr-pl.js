import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru'

const dateFlatpickr = document.body.querySelector(`.flatpickr`)
const configFlatpickr = {
  locale: Russian,
  defaultDate: `today`,
  mode: `range`,
  dateFormat: `d.m.Y`,
  minDate: `today`,
  weekNumbers: true,
  wrap: true
}

if (dateFlatpickr) {
  const fp = flatpickr(dateFlatpickr, configFlatpickr)
  fp.config.onOpen.push(function () {
    fp.redraw()
  })
}
