import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import UserMenu from './user-menu';
import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../../reducers";
import {Provider} from "react-redux";

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);
const store = createStore(rootReducer, undefined, composedEnhancers);

it('UserMenu render', () => {
    const user = {
        name: 'Пётр',
        surname: 'Петров',
        patronymic: 'Петрович'
    }

    const tree = renderer
        .create(
            <Provider store={store}>
                <Router>
                    <UserMenu user={user} url={'/'} />
                </Router>
            </Provider>
            )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
