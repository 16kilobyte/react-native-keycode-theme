import React from 'react';
import { create } from 'react-test-renderer';

import RoomList from '../RoomList';
import { mockData } from '../../../data';
import { ApplicationProviderMock } from '../../../setupJest';

describe('RoomList', () => {
  it('matches snapshot', () => {
    const component = create(
      <ApplicationProviderMock>
        <RoomList rooms={mockData} />
      </ApplicationProviderMock>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
