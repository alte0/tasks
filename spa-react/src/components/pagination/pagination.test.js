import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './pagination';

it('Pagination render', () => {
    const tree = renderer
        .create(
            <Pagination pagesCount={9} pageCurrentPagination={0}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
