/**
 * Получение моих задач
 */
export const fetchRequest = async (
  link,
  params = {
    method: 'GET',
    cache: 'no-store'
  }
  ) => {

  const response = await fetch(`/ajax/${link}`, params);

  return await response.json();
};
/**
 * Получение моих задач
 */
export const getMyTasks = () => fetchRequest('get-my-tasks.php?my-tasks=ajax');
/**
 * Получение моих выполненых задач
 */
export const getMyTasksDone = () => fetchRequest('get-my-tasks-done.php?my-tasks-done=ajax');
/**
 * Получение задач поставленных мною
 */
export const getDesignatedTasks = () => fetchRequest('get-designated-tasks.php?get-designated-task=ajax');
/**
 * Выполненные задачи другими
 */
export const getDesignatedTasksDone = () => fetchRequest('get-designated-tasks-done.php?get-designated-task-done=ajax');
/**
 * Получение всех ользователей
 */
export const getAllUsers = () => fetchRequest('get-all-users.php?all-users=ajax');
/**
 * Выполнение задачи
 */
export const executeTask = (idTask) => fetchRequest(`execute-task.php?execute-task=ajax&action=execute&id=${idTask}`);
/**
 * Добавление заддачи
 * @param {Object} formData 
 */
export const addTask = (formData) => fetchRequest(
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
export const signUpUser = (formData) => fetchRequest(
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
export const signInUser = (formData) => fetchRequest(
  `signin.php`,
  {
    method: 'POST',
    body: formData
  }
  );
/**
 * Выход с сайта.
 */
export const logOut = () => fetchRequest(`logout.php?logout=ajax&action=exit`);
/**
 * Поиск задачи
 * @param {String} text 
 */
export const getResultSearchText = (text) => fetchRequest(`get-result-search.php?search-field=${text}`);