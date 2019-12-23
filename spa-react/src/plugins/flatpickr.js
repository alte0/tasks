import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru';

const CONFIG_FLATPICKR = {
  locale: Russian,
  defaultDate: `today`,
  mode: `range`,
  dateFormat: `d.m.Y`,
  minDate: `today`,
  weekNumbers: true,
  wrap: true
};
let fp;

/**
 * Иницилизация flatpickr
 * @param elem
 */
export const initFlatpickr = (elem) => {
  fp = flatpickr(elem, CONFIG_FLATPICKR);
  fp.setDate(+new Date(), true, CONFIG_FLATPICKR.dateFormat);
};
/**
 * Очишает данные в flatpickr и устанавливает текушую дату
 */
export const clearDataFlatpickr = () => {
  fp.clear();
  fp.setDate(+new Date(), true, CONFIG_FLATPICKR.dateFormat);
};
