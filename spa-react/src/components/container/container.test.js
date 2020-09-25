import React from 'react';
// import {  render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Container from './container';

it('Container render', () => {
    const tree = renderer
        .create(
            <Container>
                <p>text</p>
            </Container>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
