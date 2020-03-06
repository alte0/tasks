/**
 * Получение моих задаач
 */
export const getMyTasks = async () => {
  const response = await fetch('http://tasks.loc:80/ajax/get-my-tasks.php');

  return await response.json();
};
/**
 * Получение задач поставленных мною
 */
export const getDesignatedTasks = async () => {
  const response = await fetch('http://tasks.loc:80/ajax/get-designated-tasks.php');

  return await response.json();
};
