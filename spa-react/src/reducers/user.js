const initialState = {
    name: '',
    surname: '',
    patronymic: '',
    userId: 0
}

const reducerUser = (state = initialState, action ) => {
    switch (action.type) {
        case 'GET_USER_INFO':
            return action.payload;
        default:
            return state;
    }
}

export default reducerUser;
