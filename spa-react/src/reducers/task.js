import { changeStatusTask } from "../helpers/helpers";

const reducerTask = (state = null, action ) => {
    switch (action.type) {
        case 'FETCH_TASK':
            return action.payload;
        case 'EXECUTE_TASK':
            return changeStatusTask(action.payload);
        default:
            return state;
    }
}

export default reducerTask;
