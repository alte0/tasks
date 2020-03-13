import toastr from 'toastr';

toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: `toast-top-center`,
    onclick: null,
    showDuration: `300`,
    hideDuration: `1000`,
    extendedTimeOut: `1000`,
    showEasing: `swing`,
    hideEasing: `linear`,
    showMethod: `fadeIn`,
    hideMethod: `fadeOut`
};
/**
 * Сообщение для пользователя
 * @param {String} type (`info`, `success`, `warning`, `error`)
 * @param {String} message `text`
 * @param {String} title `text`
 * @param {Number} time
 */
const showMessage = (type, message, title = ``, options = { time: 5000, preventDuplicates: false }) => {
    toastr.options.timeOut = options.time;
    toastr.options.preventDuplicates = options.preventDuplicates;
    if (title) {
        toastr[type](message, title)
    } else {
        toastr[type](message)
    }
};
/**
 * Типы сообщений для функции showMessage
 */
const TypeMessage = {
    INFO: `info`,
    SUCCESS: `success`,
    WARNING: `warning`,
    ERROR: `error`
};

export { showMessage, TypeMessage }
