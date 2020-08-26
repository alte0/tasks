/**
 * Получение Cookie по имени
 * @param name - имя Cookie
 * @returns {any}
 */
export const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}
/**
 * Устанавливает куки с именем name и значением value c опциями.
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 */
function setCookie (name, value, options = {}) {
  options = {
    path: '/',
    ...options
  }

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey
    const optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }

  document.cookie = updatedCookie
}
/**
 * Удаление Cookie по её имени.
 * @param {String} name
 */
export const deleteCookie = (name) => {
  setCookie(name, '', {
    'max-age': -1
  })
}
/**
 * Проверяет инпуты формы, что они не пустые.
 * @param {FormData} formData
 * @returns {boolean}
 */
export const checkFormsInputNotEmpty = (formData) => {
  let isSend = true

  // проверяем значения инпутов на не пустые
  for (const field of formData.entries()) {
    const valueField = 1
    if (field[valueField] === '') {
      isSend = false
    }
  }

  return isSend
}
