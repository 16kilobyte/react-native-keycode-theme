import React from 'react';
import { View } from 'react-native';
import { create } from 'react-test-renderer';

import SafeArea from '../SafeArea';

jest.useFakeTimers();

describe('SafeArea', () => {
  it('matches snapshot', () => {
    const component = create(<SafeArea>Hello</SafeArea>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('displays correct component', () => {
    const child = 'Hello';

    const component = create(<SafeArea>Hello</SafeArea>);
    const instance = component.root;
    expect(instance.findByType(View).props.children).toBe(child);
  });
});
