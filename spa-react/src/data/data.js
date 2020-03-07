/**
 * Получение моих задач
 */
export const fetchRequest = async (link) => {
  const response = await fetch(`http://tasks.loc:80/ajax/${link}`);

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
