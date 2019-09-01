import React from 'react';
import { create } from 'react-test-renderer';

import RoomListItem from '../RoomListItem';
import { ApplicationProviderMock } from '../../../setupJest';
import { images } from '../../../theme';

describe('RoomListItem', () => {
  it('matches snapshot', () => {
    const component = create(
      <ApplicationProviderMock>
        <RoomListItem title="Garage" icon={images.garage} />
      </ApplicationProviderMock>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
