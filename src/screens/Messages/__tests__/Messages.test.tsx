import React from 'react';
import { create } from 'react-test-renderer';

import Messages from '../Messages';
import { ApplicationProviderMock } from '../../../setupJest';

describe('Messages', () => {
  it('matches snapshot', () => {
    const component = create(
      <ApplicationProviderMock>
        <Messages />
      </ApplicationProviderMock>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
