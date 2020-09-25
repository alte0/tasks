import React from 'react';
import Footer from "./footer";
import renderer from 'react-test-renderer';

it('Footer render', () => {
    const tree = renderer
        .create(<Footer/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
