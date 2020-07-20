import { combineReducers } from 'redux';
import user from "./user";
import task from "./task";
import users from "./users";



export default combineReducers({
    user,
    task,
    users
})
