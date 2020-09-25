import React from 'react';
// import {  render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);
const store = createStore(rootReducer, undefined, composedEnhancers);

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// store.dispatch({})
it('App render', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <App />
            </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
