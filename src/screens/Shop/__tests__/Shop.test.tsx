import React from 'react';
import { create } from 'react-test-renderer';

import Shop from '../Shop';
import { ApplicationProviderMock } from '../../../setupJest';

describe('Shop', () => {
  it('matches snapshot', () => {
    const component = create(
      <ApplicationProviderMock>
        <Shop />
      </ApplicationProviderMock>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
