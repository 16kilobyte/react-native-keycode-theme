import React from 'react';
import { create } from 'react-test-renderer';

import SignupForm from '../SignupForm';
import { ApplicationProviderMock } from '../../../setupJest';

describe('SignupForm', () => {
  it('matches snapshot', () => {
    const component = create(
      <ApplicationProviderMock>
        <SignupForm onSubmit={() => null} />
      </ApplicationProviderMock>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
