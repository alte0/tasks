import {myTasks, designatedTasks} from "../mocks/mocks";

const getDataMyTasks = async () => {
  const data = new Promise((resolve, reject) => {
    setTimeout(() => resolve(myTasks), 2000)
  })

  return await data;
};

export const getMyTasks = getDataMyTasks;
export const getDesignatedTasksTasks = () => designatedTasks;