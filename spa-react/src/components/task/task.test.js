import React from 'react';
import renderer from 'react-test-renderer';
import Task from './task';
import {myTasks} from '../../mocks/mocks';

it('Task render', () => {
    const option = {
        isMore: false,
        isShowDesc: true
    };

    const tree = renderer
        .create(
                <Task
                    isMore={option.isMore}
                    isShowDesc={option.isShowDesc}
                    task={myTasks[0]}
                />
            )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
