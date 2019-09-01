import React from 'react';
import { create } from 'react-test-renderer';

import BottomTab from '../BottomTab';
import { ApplicationProviderMock } from '../../../setupJest';

describe('BottomTab', () => {
  it('matches snapshot', () => {
    const component = create(
      <ApplicationProviderMock>
        <BottomTab selectedIndex={0} onTabSelect={() => null} />
      </ApplicationProviderMock>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
