import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru'

// const dateStartTask = document.body.querySelector(`.form__date-start`)
const dateFlatpickr = document.body.querySelector(`.flatpickr`)
const configFlatpickr = {
  locale: Russian,
  mode: `range`,
  dateFormat: `d.m.Y`,
  minDate: `today`,
  weekNumbers: true,
  wrap: true
}

flatpickr(dateFlatpickr, configFlatpickr)
