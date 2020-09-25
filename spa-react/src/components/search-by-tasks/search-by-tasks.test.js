import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchByTasks from './search-by-tasks';

it('Container render', () => {
    const tree = renderer
        .create(
            <Router>
                <SearchByTasks textSearch={'Text search data'} />)
            </Router>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
