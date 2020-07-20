const reducerTasks = (state = [], action ) => {
    switch (action.type) {
        case 'GET_TASKS':
            return action.payload;
        default:
            return state;
    }
}

export default reducerTasks;
