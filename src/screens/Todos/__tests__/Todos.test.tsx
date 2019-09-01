import React from 'react';
import { create } from 'react-test-renderer';

import Todos from '../Todos';
import { ApplicationProviderMock } from '../../../setupJest';

describe('Todos', () => {
  it('matches snapshot', () => {
    const component = create(
      <ApplicationProviderMock>
        <Todos />
      </ApplicationProviderMock>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
