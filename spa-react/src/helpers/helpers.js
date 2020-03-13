/**
 * Функция для проверки длины строки, в промежутке -  >= && <=
 * @param str
 * @param minLengthStr
 * @param maxLengthStr
 * @returns {boolean|boolean}
 */
export const checkLengthMinMaxStr = (str, minLengthStr, maxLengthStr) => {
    return (str.length >= minLengthStr) && (str.length <= maxLengthStr);
};
/**
 * Истекла ли задача
 * @param dateTask - дата задачи.
 * @returns {boolean}
 */
export const hasDateExpired = (dateTask) => {
    const today = new Date().getTime();
    const dateEnd = new Date(reverseDate(dateTask)).getTime();
    
    return dateEnd < today;
};
/**
 * Получение Cookie по имени
 * @param name - имя Cookie
 * @returns {any}
 */
export const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        // eslint-disable-next-line no-useless-escape
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
/**
 *  Устанавливает куки с именем name и значением value c опциями.
 * @param {String} name 
 * @param {String} value
 * @param {Object} options 
 */
function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
/**
 * Уддаление Cookie по её имени.
 * @param {String} name 
 */
export const deleteCookie = (name) => {
    setCookie(name, "", {
        'max-age': -1
    })
}
/**
 * Получение задачи по её id
 * @param tasks
 * @param idTask - id задачи
 * @returns {Object}
 */
export const getTask = (tasks, idTask) => {
    return tasks.find((task) => Number(task.task_id) === Number(idTask));
};
/**
 * Переворачивает дату с сервера для js
 * @param {String} date 
 */
export const reverseDate = (date) => {
    return date.split('.').reverse().join('-');
}
/**
 * Возврашает заголовок для задач в зависимомти от активного скрина.
 * @param {String} activeScreen 
 */
export const getActiveTitleTasks = (activeScreen) => {
    switch (activeScreen) {
        case "screen-tasks":
            return "Мои задачи.";
        case "screen-my-tasks-done":
            return "Мои выполненые задачи.";
        case "screen-designated-tasks":
            return "Я назначил задачи.";
        case "screen-designated-tasks-done":
            return "Выполненные задачи другими.";
        default:
            return "Мои задачи.";
    }
}
/**
 * Изминение статуса задачи и её удаление
 * @param {Object} tasks 
 * @param {Number} idTask 
 */
export const changeStatusTaskAndDel = (tasks, idTask) => {
    let copyTasks = [...tasks];
    const indexTask = copyTasks.findIndex((task) => Number(task.task_id) === Number(idTask));
    if (indexTask !== -1) {
        copyTasks[indexTask]["task_status"] = "1";
        copyTasks.splice(indexTask, 1);
    }
    
    return copyTasks;
}
