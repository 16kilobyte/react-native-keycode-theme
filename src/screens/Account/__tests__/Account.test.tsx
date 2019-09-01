import React from 'react';
import { create } from 'react-test-renderer';

import Account from '../Account';
import { ApplicationProviderMock } from '../../../setupJest';

describe('Account', () => {
  it('matches snapshot', () => {
    const component = create(
      <ApplicationProviderMock>
        <Account />
      </ApplicationProviderMock>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
