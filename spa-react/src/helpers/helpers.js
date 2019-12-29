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
    const date = new Date(dateTask).getTime();
    return today >= date;
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
 * Получение задачи по её id
 * @param tasks
 * @param idTask - id задачи
 * @returns {Object}
 */
export const getTask = (tasks, idTask) => {
    return tasks.find((task) => task.id === (+idTask));
};