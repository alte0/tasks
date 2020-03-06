/**
 * Получение моих задач
 */
export const getMyTasks = async () => {
  const response = await fetch('http://tasks.loc:80/ajax/get-my-tasks.php');

  return await response.json();
};
/**
 * Получение моих выполненых задач
 */
export const getMyTasksDone = async () => {
  const response = await fetch('http://tasks.loc:80/ajax/get-my-tasks-done.php');

  return await response.json();
};
/**
 * Получение задач поставленных мною
 */
export const getDesignatedTasks = async () => {
  const response = await fetch('http://tasks.loc:80/ajax/get-designated-tasks.php');

  return await response.json();
};
/**
 * Выполненные задачи другими
 */
export const getDesignatedTasksDone = async () => {
  const response = await fetch('http://tasks.loc:80/ajax/get-designated-tasks-done.php');

  return await response.json();
};
/**
 * Получение всех ользователей
 */
export const getAllUsers = async () => {
  const response = await fetch('http://tasks.loc:80/ajax/get-all-users.php');

  return await response.json();
};