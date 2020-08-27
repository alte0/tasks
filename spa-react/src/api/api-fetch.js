class ApiFetch {
    /**
     * Общая функция для сетевых запросов
     */
    _fetchRequest = async (
        link,
        params = {
            method: 'GET',
            cache: 'no-store'
        }
    ) => {

        const response = await fetch(`/ajax/${link}`, params);

        if (response.ok) {
            return await response.json();
        } else {
            alert(`Ошибка: ${response.status}`);
        }
    };

    /**
     * Получение моих задач
     */
    getMyTasks = () => this._fetchRequest('get-my-tasks.php');
    /**
     * Получение моих выполненных задач
     */
    getMyTasksDone = () => this._fetchRequest('get-my-tasks-done.php');
    /**
     * Получение задач поставленных мною
     */
    getDesignatedTasks = () => this._fetchRequest('get-designated-tasks.php');
    /**
     * Выполненные задачи другими
     */
    getDesignatedTasksDone = () => this._fetchRequest('get-designated-tasks-done.php');
    /**
     * Получение всех пользователей
     */
    getAllUsers = () => this._fetchRequest('get-all-users.php');
    /**
     * Выполнение задачи
     */
    executeTask = (idTask) => this._fetchRequest(`execute-task.php?action=execute&id=${idTask}`);
    /**
     * Добавление задачи
     * @param {Object} formData
     */
    addTask = (formData) => this._fetchRequest(
        `add-task.php`,
        {
            method: 'POST',
            body: formData
        }
    );
    /**
     * Регистрация пользователя на сайте.
     * @param {Object} formData
     */
    signUpUser = (formData) => this._fetchRequest(
        `signup.php`,
        {
            method: 'POST',
            body: formData
        }
    );
    /**
     * Авторизация пользователя на сайте.
     * @param {Object} formData
     */
    signInUser = (formData) => this._fetchRequest(
        `signin.php`,
        {
            method: 'POST',
            body: formData
        }
    );
    /**
     * Выход с сайта.
     */
    logOut = () => this._fetchRequest(`logout.php?action=exit`);
    /**
     * Поиск задачи
     * @param {String} text
     */
    getResultSearchText = (text) => this._fetchRequest(`get-result-search.php?search-field=${text}`);
    /**
     * Получение задачи по её ID
     * @param {Number} idTask
     */
    getTask = (idTask) => this._fetchRequest(`get-task.php?id=${idTask}`);
}

export const apiFetch = new ApiFetch()
