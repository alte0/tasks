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