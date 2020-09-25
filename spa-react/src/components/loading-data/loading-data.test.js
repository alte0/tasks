import React from 'react';
import LoadingAata from "./loading-data";
import renderer from 'react-test-renderer';

it('LoadingData render', () => {
    const tree = renderer
        .create(<LoadingAata/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
