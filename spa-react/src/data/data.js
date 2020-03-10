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
  const response = await fetch(`http://tasks.loc:80/ajax/${link}`, params);

  return await response.json();
};
/**
 * Получение моих задач
 */
export const getMyTasks = () => fetchRequest('get-my-tasks.php');
/**
 * Получение моих выполненых задач
 */
export const getMyTasksDone = () => fetchRequest('get-my-tasks-done.php');
/**
 * Получение задач поставленных мною
 */
export const getDesignatedTasks = () => fetchRequest('get-designated-tasks.php');
/**
 * Выполненные задачи другими
 */
export const getDesignatedTasksDone = () => fetchRequest('get-designated-tasks-done.php');
/**
 * Получение всех ользователей
 */
export const getAllUsers = () => fetchRequest('get-all-users.php');
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
