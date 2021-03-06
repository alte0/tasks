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
 * Удаление Cookie по её имени.
 * @param {String} name
 */
export const deleteCookie = (name) => {
    setCookie(name, "", {
        'max-age': -1
    })
}
/**
 * Переворачивает дату с сервера (2020-07-21) для js (21-07-2020)
 * @param {String} date
 */
export const reverseDate = (date) => {
    return date.split('.').reverse().join('-');
}
/**
 * Возвращает заголовок для задач в зависимости от активного скрина.
 * @param {String} url
 * @param {String} textSearch
 */
export const getActiveTitleTasks = (url, textSearch="") => {
    switch (url) {
        case "/my-tasks-done":
            return "Мои выполненные задачи.";
        case "/designated-tasks":
            return "Я назначил задачи.";
        case "/designated-tasks-done":
            return "Выполненные задачи другими.";
        case "/search":
            return `Результаты поиска по запросу - "${textSearch}"`;
        default:
            return "Мои задачи.";
    }
}
/**
 * Удаление задачи. Для страниц с задачами.
 * @param {Object} tasks
 * @param {Number} idTask
 */
export const deleteTaskFromArrTasks = (tasks, idTask) => {
    let copyTasks = [...tasks];
    const indexTask = copyTasks.findIndex((task) => Number(task.task_id) === Number(idTask));

    if (indexTask !== -1) {
        copyTasks.splice(indexTask, 1);
    }

    return copyTasks;
}
/**
 * Изменение статуса задачи для страницы задач.
 * @param {Object} task
 */
export const changeStatusTask = (task) => {
    return Object.assign({}, task, { task_status: "1" });
}
/**
 * Получение массива активных(изменяемых в зависимости от типа адреса) ссылок для меню.
 * @param {String} url
 */
export const getActiveMenuLinks = (url) => {
    switch (url) {
        case "/":
            return [
                { textLink: "Выполненные задачи мною", href: "/my-tasks-done" },
                { textLink: "Я назначил задачи", href: "/designated-tasks" },
            ]
        case "/my-tasks-done":
            return [
                { textLink: "Мои задачи", href: "/"},
                { textLink: "Я назначил задачи", href: "/designated-tasks" },
            ]
        case "/designated-tasks":
            return [
                { textLink: "Выполненные задачи другими", href: "/designated-tasks-done" },
                { textLink: "Мои задачи", href: "/"},
            ]
        case "/designated-tasks-done":
            return [
                { textLink: "Выполненные задачи другими", href: "/designated-tasks-done" },
                { textLink: "Мои задачи", href: "/"},
            ]
        case "/search":
            return [
                { textLink: "Мои задачи", href: "/"},
                { textLink: "Я назначил задачи", href: "/designated-tasks" },
            ]
        default:
            return [
                { textLink: "Мои задачи", href: "/" },
                { textLink: "Я назначил задачи", href: "/designated-tasks" },
            ]
    }
}
/**
 * Получаем текст для поиска из параметра q
 * @param location
 * @returns {string}
 */
export const getTextInSearchParams = (location) => {
    const { search } = location;
    const params = new URLSearchParams(search);
    const searchTextEncode = params.get("q") || '';
    return decodeURIComponent(searchTextEncode);
}
/**
 * Проверяет залогинился ли пользователь
 * @returns { Boolean }
 */
export const checkLoggedUser = () => (getCookie("userInfo") && getCookie("PHPSESSID"));
