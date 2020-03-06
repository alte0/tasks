/**
 * Получение моих задач
 */
export const fetchRequest = async (link) => {
  const response = await fetch(link);

  return await response.json();
};
/**
 * Получение моих задач
 */
export const getMyTasks = () => fetchRequest('http://tasks.loc:80/ajax/get-my-tasks.php');

/**
 * Получение моих выполненых задач
 */
export const getMyTasksDone = () => fetchRequest('http://tasks.loc:80/ajax/get-my-tasks-done.php');
/**
 * Получение задач поставленных мною
 */
export const getDesignatedTasks = () => fetchRequest('http://tasks.loc:80/ajax/get-designated-tasks.php');
/**
 * Выполненные задачи другими
 */
export const getDesignatedTasksDone = () => fetchRequest('http://tasks.loc:80/ajax/get-designated-tasks-done.php');
/**
 * Получение всех ользователей
 */
export const getAllUsers = () => fetchRequest('http://tasks.loc:80/ajax/get-all-users.php');
