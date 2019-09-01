import React from 'react';
import { create } from 'react-test-renderer';

import FormInput from '../FormInput';
import { ApplicationProviderMock } from '../../../setupJest';

describe('FormInput', () => {
  it('matches snapshot', () => {
    const component = create(
      <ApplicationProviderMock>
        <FormInput
          label="FORM LABEL"
          value="Input Value"
          onChangeText={() => null}
        />
      </ApplicationProviderMock>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
