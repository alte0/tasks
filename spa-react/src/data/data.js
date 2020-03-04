import {designatedTasks} from "../mocks/mocks";

const getDataMyTasks = async () => {
  const response = await fetch('http://tasks.loc:80/ajax/get-my-tasks.php');

  return await response.json();
};

export const getMyTasks = getDataMyTasks;
export const getDesignatedTasksTasks = () => designatedTasks;