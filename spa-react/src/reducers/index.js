import { combineReducers } from 'redux';
import user from "./user";
import task from "./task";
import users from "./users";
import tasks from "./tasks";



export default combineReducers({
    user,
    task,
    users,
    tasks
})
